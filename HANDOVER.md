# Project Handover Guide — Ready2Drive LMS & Website

This document provides a concise, practical technical overview for incoming developers, maintainers, and client administrators taking ownership of the Ready2Drive project.

---

## 1. Project Summary & Architecture

Ready2Drive PEI is a single full-stack Next.js web application encompassing three unified surfaces:
1. **Public Marketing Website**: Landing page, program packages, pricing, instructor info, and inquiry forms.
2. **Student LMS (`/lms-course`)**: Modular course reader, chapter progression tracking, interactive quizzes, video embeds, and course completion celebration.
3. **Admin Dashboard (`/admin`)**: Student onboarding, 90-day license provisioning, learning progress monitoring, and lead inquiry management.

### Tech Stack
* **Framework**: [Next.js 16 (App Router)](https://nextjs.org/docs) + [React 19](https://react.dev/)
* **Language & Styling**: TypeScript 5 + [Tailwind CSS v4](https://tailwindcss.com/docs) + [shadcn/ui](https://ui.shadcn.com/)
* **Database & Auth**: [Supabase](https://supabase.com/docs) (PostgreSQL + Supabase Auth)
* **Transactional Email**: [Resend](https://resend.com/docs)
* **Testing**: [Vitest](https://vitest.dev/) (unit) + [Playwright](https://playwright.dev/) (end-to-end)

For internal architecture maps and design token conventions, refer to:
* [ARCHITECTURE.md](docs/ARCHITECTURE.md) — Directory layout and component conventions.
* [docs/backend/auth.md](docs/backend/auth.md) — Authentication flows, JWT validation, and table schemas.
* [docs/STYLE.md](docs/STYLE.md) — LMS shell styling variables (`.lms-` tokens).

---

## 2. Quick Start for New Developers

### Prerequisites
* [Node.js](https://nodejs.org/) (v20+ recommended)
* npm (v10+)

### Setup Commands
```bash
# 1. Clone the repository
git clone https://github.com/ready2driveweb/website-and-lms.git
cd website-and-lms

# 2. Install dependencies
npm install

# 3. Create your local environment configuration
cp .env.example .env.local
# (Edit .env.local and insert your Supabase and Resend keys)

# 4. Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Key Scripts
* `npm run dev` — Run local dev server with Turbopack.
* `npm run build` — Create production build (validates TypeScript & bundle).
* `npm run lint` — Run ESLint checks.
* `npm run test` — Run Vitest unit tests.
* `npx playwright test` — Run Playwright E2E test suite.

---

## 3. Environment Variables & `.gitignore`

The project enforces a strict credential-isolation pattern in [.gitignore](.gitignore):
* All `.env*` files are ignored so secrets are never pushed to GitHub.
* `.env.example` is tracked as the authoritative template.

| Variable Name | Exposure | Purpose | Where to Find |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | Public / Client | Supabase Project API URL | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public / Client | Client-safe anonymous key (RLS enforced) | Supabase Dashboard → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | **Server-Only** | Privileged key bypassing RLS for admin tasks | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_LMS_BYPASS_LOCKS` | Public / Client | Set `true` in dev to unlock all lessons; `false` in prod | Application configuration |
| `RESEND_API_KEY` | **Server-Only** | API token for sending transactional emails | Resend Dashboard → API Keys |

---

## 4. Supabase Setup & Architecture

Rather than maintaining a custom authentication backend, the project uses official Supabase primitives.

### A. Authentication & Session Cookies
* **Mechanism**: Uses `@supabase/ssr` to maintain authenticated session tokens inside secure HTTP-only cookies across client and server boundaries.
* **Relevant Code**:
  * [lib/supabase/client.ts](lib/supabase/client.ts) — Browser-side client.
  * [lib/supabase/server.ts](lib/supabase/server.ts) — Server Components, Actions, and Route Handlers.
  * [lib/supabase/admin.ts](lib/supabase/admin.ts) — Service role client for privileged admin actions.
  * [middleware.ts](middleware.ts) — Protects `/lms-course/*` and `/admin/*` routes.
* **Documentation**: See [Supabase Next.js Server-Side Auth Guide](https://supabase.com/docs/guides/auth/server-side/nextjs).

### B. Database Schema & Tables
The database runs on standard PostgreSQL. The application utilizes 4 key tables:
1. `profiles`: Extends `auth.users` with `role` (`student` or `admin`), `full_name`, and access `expires_at`.
2. `student_access`: Manages 90-day course expiration access windows.
3. `student_progress`: Tracks student progress (`progress_percent`, `furthest_chapter_id`, `completion_email_sent`).
4. `contact_inquiries`: Stores landing page contact inquiries and lead submissions.

* **Documentation**: The complete SQL table schemas, foreign keys, and RLS policies are documented in [docs/backend/auth.md](docs/backend/auth.md).
* To execute or update schemas, use the [Supabase SQL Editor](https://supabase.com/docs/guides/database/tables#using-the-sql-editor).

### C. Database Keep-Alive (`/api/keep-alive`)
* Free-tier Supabase projects automatically pause after 7 days of inactivity.
* The application exposes a lightweight health check endpoint at `GET /api/keep-alive` that queries the database.
* **Recommended Setup**: Configure a free external ping service (such as [Cron-job.org](https://cron-job.org/) or [Updown.io](https://updown.io/)) to hit `https://<your-domain>/api/keep-alive` once every 3 days.
* **Documentation**: [Supabase Project Pausing](https://supabase.com/docs/guides/platform/pausing).

---

## 5. Transactional Emails (Resend)

The application uses [Resend](https://resend.com/) for automated email notifications.

### 1. Contact Form Inquiries
* **Handler**: [app/actions/contact.ts](app/actions/contact.ts)
* When a prospective student submits the landing page inquiry form, the lead is stored in `contact_inquiries` and an email summary is dispatched.

### 2. Course Completion Notifications
* **Handler**: [app/api/course-completion/route.ts](app/api/course-completion/route.ts)
* When a student reaches 100% progress, an atomic database lock ensures exactly one congratulatory / certificate-ready email is sent to the admin.

### Production Handover Tasks for Email
1. **Verify Custom Domain**:
   * Add your company domain in [Resend Domains Dashboard](https://resend.com/domains) and configure the DNS records (SPF, DKIM, MX).
   * Guide: [Resend Custom Domains Documentation](https://resend.com/docs/dashboard/domains/introduction).
2. **Update Sender & Recipient Addresses**:
   * Change `from: "Ready2Drive PEI <onboarding@resend.dev>"` to your verified sender (e.g. `info@ready2drivepei.ca`).
   * Change the `to:` recipient in [app/actions/contact.ts](app/actions/contact.ts) and [app/api/course-completion/route.ts](app/api/course-completion/route.ts) to the client's administrative email inbox.

---

## 6. LMS Content & Course Progression

### Course Structure
The LMS curriculum is statically defined in TypeScript for instant load times and type safety:
* Data location: `app/lms-course/data/modules/`
* Includes 4 primary modules covering Prince Edward Island driver training rules, road signs, defensive driving, and safe vehicle handling.
* Content blocks support: `markdown`, `quiz`, `video`, `checklist`, and external resource links.

### Lock Progression Switch
* During student production usage, chapters must be completed sequentially:
  ```env
  NEXT_PUBLIC_LMS_BYPASS_LOCKS=false
  ```
* For staff testing or content audits, set `NEXT_PUBLIC_LMS_BYPASS_LOCKS=true` to navigate freely between any chapter or quiz.

---

## 7. Deployment (Vercel)

The project is optimized for deployment on [Vercel](https://vercel.com/):

1. **Import Git Repository**:
   * In Vercel, click **Add New** → **Project** → select `ready2driveweb/website-and-lms`.
2. **Framework Preset**:
   * Framework: **Next.js** (detected automatically).
   * Root Directory: `./`.
3. **Environment Variables**:
   * Add all variables defined in `.env.example` into Vercel **Project Settings → Environment Variables**.
   * Set `NEXT_PUBLIC_LMS_BYPASS_LOCKS="false"` for Production.
4. **Deploy**:
   * Future pushes to the `main` branch trigger automatic preview and production deployments.
   * Documentation: [Vercel Next.js Deployment Guide](https://vercel.com/docs/frameworks/nextjs).

---

## 8. Client Handover Checklist

- [ ] **GitHub Access**: Verify client ownership of `ready2driveweb/website-and-lms` and invite personal account as a collaborator for ongoing support.
- [ ] **Supabase Organization**: Transfer or invite the client as Owner in Supabase project dashboard.
- [ ] **Resend Organization**: Invite client to Resend dashboard, add verified sending domain, and update recipient notification email in the code.
- [ ] **Vercel Hosting**: Connect repository to the client's Vercel team account and assign custom production domain (e.g., `ready2drivepei.ca`).
- [ ] **Keep-Alive Cron**: Set up recurring ping to `/api/keep-alive` to keep free-tier database active.
