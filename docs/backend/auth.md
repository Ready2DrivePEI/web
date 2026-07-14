# Authentication & Authorization Architecture

This document defines the permanent backend authentication, authorization, and session model for the Ready2Drive application.

---

## 1. Auth Clients & Architecture
The project uses Next.js App Router and `@supabase/ssr` to manage authentication across server and client boundaries. Three client instantiations exist under [lib/supabase/](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/lib/supabase/):

* **Client SDK ([client.ts](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/lib/supabase/client.ts))**: 
  - Standard client for browser-side components.
  - Uses the public anonymous key (`NEXT_PUBLIC_SUPABASE_ANON_KEY`).
  - Accesses cookies automatically to authenticate client queries.
* **Server SDK ([server.ts](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/lib/supabase/server.ts))**: 
  - Used in Server Components, API routes, and Server Actions.
  - Automatically reads/writes session cookies to store the user's JWT.
* **Admin SDK ([admin.ts](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/lib/supabase/admin.ts))**:
  - Uses the privileged `SUPABASE_SERVICE_ROLE_KEY`.
  - **Never expose this client on the client-side** (keep it strictly within Server Actions/API routes).
  - Used by admins to create student accounts and manage database overrides bypassing RLS.

---

## 2. JWT Flow & Session Verification
- **Login Flow**: Users authenticate with credentials at `/login`. Supabase Auth verifies passwords and returns a JWT which is stored in a cookie.
- **Role Verification**: 
  - User roles (`student` or `admin`) are stored in the database `profiles` table.
  - The JWT contains claims that identify the user, but authorization checks must query the database role or `app_metadata` to verify roles safely.
- **Route Protection**:
  - Middleware intercepts requests to protect private zones:
    - `/lms-course/*`: Requires a valid session with role `student` or `admin`.
    - `/admin/*`: Requires a session with role `admin`.
- **Course Access Expiry**:
  - Student access is limited to **90 days**.
  - On entry to `/lms-course/*`, the system checks `student_access.expires_at`.
  - If `now() > expires_at` or status is not `active`, the student is redirected to an expired-access notification page.

---

## 3. Database Profiles & Progress Schema

### `profiles` Table
Stores basic user role details. Maps 1:1 with `auth.users` via UUID.
```sql
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  role text not null check (role in ('admin', 'student')),
  full_name text,
  created_at timestamptz default now()
);
```

### `student_access` Table
Enforces the 90-day learning sandbox.
```sql
create table public.student_access (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  start_at timestamptz not null default now(),
  expires_at timestamptz not null,
  status text not null default 'active' check (status in ('active', 'expired', 'disabled')),
  updated_at timestamptz default now()
);
```

### `student_progress` Table
Tracks modules, chapters, and lessons completed by students.
```sql
create table public.student_progress (
  id bigserial primary key,
  user_id uuid not null references public.profiles(id) on delete cascade,
  module_id text not null,
  chapter_id text not null,
  lesson_id text,
  quiz_id text,
  progress_percent numeric(5,2) default 0,
  completed boolean default false,
  last_position_seconds integer default 0,
  updated_at timestamptz default now(),
  constraint student_progress_unique unique (user_id, module_id, chapter_id, lesson_id, quiz_id)
);
```

---

## 4. Row-Level Security (RLS) Philosophy
All public tables in Supabase **must enable Row-Level Security**.

- **Profiles Policy**:
  - `SELECT`: Users can read their own profile row; admins can read all profiles.
  - `INSERT / UPDATE`: Restrict writes to the system context or authenticated users modifying their own info.
- **Student Access Policy**:
  - `SELECT`: Students can view their own access expiration. Admins can view/update all.
- **Student Progress Policy**:
  - `SELECT / UPDATE / INSERT`: Authenticated users can view or save progress rows matching their `auth.uid()`.
- **Deprecation of `auth.role()`**:
  - Avoid calling `auth.role() = 'authenticated'` in policies because it can trigger bypasses for anonymous users. Use the target clause `TO authenticated` instead:
    ```sql
    create policy "Allow student progress read" on public.student_progress
      for select to authenticated
      using (auth.uid() = user_id);
    ```
- **Security Definer & Views**:
  - Views bypass RLS by default. Ensure any views are configured with `WITH (security_invoker = true)`.
  - Database triggers or functions running privileged lookup actions must be defined as `SECURITY INVOKER` unless strictly required to bypass RLS, in which case they must be placed in a non-exposed database schema.
