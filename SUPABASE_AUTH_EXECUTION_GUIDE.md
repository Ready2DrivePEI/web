# Supabase Backend Auth Execution Guide (Ready2Drive)

## 1) Goal of this backend setup
Build a secure auth + account system where:
- Users log in with valid credentials.
- Each account has a role (`admin` or `student`).
- Student progress is saved in backend tables and loaded on return.
- Student access expires after 90 days.
- Admins can create/manage accounts and review progress.
- Course content remains on frontend; backend stores identity, access, and progress.

## 2) Important fix first (current project issue)
Your current login page writes `email/password` directly into `profiles`.
That is not authentication and should not be used for real login.

Correct model:
- Supabase Auth handles login credentials and password security.
- Your app tables (like `profiles`, `student_progress`) store app data only.

## 3) Recommended project structure
Use this structure in this Next.js App Router project:

```text
app/
  login/page.tsx
  admin/page.tsx
  api/
    auth/
      session/route.ts
    admin/
      users/route.ts
      access/route.ts
      progress/route.ts
lib/
  supabase/
    client.ts
    server.ts
    admin.ts
middleware.ts
```

Purpose of each:
- `client.ts`: browser Supabase client for normal logged-in user operations.
- `server.ts`: server client using request cookies/session.
- `admin.ts`: service-role client for admin-only operations (server only).
- `middleware.ts`: checks session and protects routes.
- `api/admin/*`: safe backend endpoints for admin actions.

## 4) Supabase tables to create
Keep this simple and stable.

### `profiles`
One row per auth user.
- `id uuid primary key` (same as `auth.users.id`)
- `email text unique not null`
- `role text not null` (`admin` or `student`)
- `full_name text`
- `created_at timestamptz default now()`

### `student_access`
Tracks 90-day access window.
- `user_id uuid primary key references profiles(id) on delete cascade`
- `start_at timestamptz not null default now()`
- `expires_at timestamptz not null`
- `status text not null default 'active'` (`active`, `expired`, `disabled`)
- `updated_at timestamptz default now()`

Recommended default:
- Set `expires_at = start_at + interval '90 days'` when account is created.

### `student_progress`
Stores lesson progress.
- `id bigserial primary key`
- `user_id uuid not null references profiles(id) on delete cascade`
- `module_id text not null`
- `chapter_id text not null`
- `lesson_id text`
- `quiz_id text`
- `progress_percent numeric(5,2) default 0`
- `completed boolean default false`
- `last_position_seconds integer default 0`
- `updated_at timestamptz default now()`

Unique constraint:
- `(user_id, module_id, chapter_id, lesson_id, quiz_id)` to support upsert updates.

## 5) Role and auth flow (end-to-end)

### Login validation
1. User submits email/password on `/login`.
2. Backend auth call validates credentials using Supabase Auth.
3. If valid, session cookie is issued.
4. App fetches `profiles.role` for that user.
5. Redirect:
- `admin` -> `/admin`
- `student` -> `/lms-course`

### Route protection
Use `middleware.ts` rules:
- `/lms-course/*` requires logged-in user and role `student` or `admin`.
- `/admin/*` requires logged-in user with role `admin`.
- If no valid session -> redirect to `/login`.

### 90-day access enforcement
For students entering LMS:
1. Read `student_access` by `user_id`.
2. If `status != active` or `now() > expires_at`, block LMS and show expired-access message.
3. Admin can extend access by updating `expires_at`.

## 6) RLS and security model
Enable RLS for app tables and apply clear rules:

- `profiles`: user can read own row.
- `student_access`: user can read own row.
- `student_progress`: user can read/update own progress rows.
- Admin-wide read/write should be done through server endpoints using service role key (not from browser).

Critical security rules:
- Never store plain passwords in your tables.
- Never expose service role key to frontend.
- All admin create/manage actions must run in server routes only.

## 7) Admin management tools (what to build)
Admin page should provide:
- Create student account (email/password + profile row + access row with +90 days).
- View all students with role/status/expires_at.
- Extend/disable student access.
- View progress summary per student (latest updated module/chapter/progress).

Implementation approach:
- UI in `/admin`.
- Calls backend endpoints in `app/api/admin/*`.
- Endpoints verify requester role is `admin` before any action.

## 8) Frontend-stored course content integration
Your course content stays on frontend.
Backend stores progress against stable content IDs:
- `module_id`, `chapter_id`, `lesson_id`, `quiz_id`.

Rule:
- IDs in frontend content files must remain stable over time.
- If IDs change, existing saved progress mapping will break.

## 9) Practical implementation phases

### Phase 1: Foundation
- Add Supabase client/server/admin utilities.
- Add middleware session and route protection.
- Replace current login logic with real auth flow.

### Phase 2: Data model
- Create `profiles`, `student_access`, `student_progress`.
- Enable RLS and policies.
- Add profile creation + 90-day access initialization on account creation.

### Phase 3: Student behavior
- Save progress with upsert when lesson/quiz state changes.
- Load progress on LMS entry and continue where left off.
- Enforce expiry before allowing course continuation.

### Phase 4: Admin behavior
- Build `/admin` page and server APIs for account + access + progress management.
- Add safe audit fields (`updated_at`, actor ID where useful).

## 10) Testing checklist (must pass)
- Valid login succeeds and invalid login fails.
- Role routing works (`admin` vs `student`).
- Student can save and reload progress across sessions/devices.
- Expired student is blocked from LMS.
- Admin can create account and it gets 90-day access row.
- Admin can view progress and extend access.
- Student cannot access admin endpoints.
- Service role key never appears in client bundle.

## 11) What to keep from your current app
- Keep current frontend lesson content architecture.
- Keep current LMS UI routes.
- Replace only auth and progress persistence path with proper backend flow.

---

If you follow this guide in order, you get a production-safe baseline without overengineering:
- secure auth,
- clear role model,
- reliable progress persistence,
- and controlled admin tooling.
