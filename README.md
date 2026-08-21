# Ready2Drive LMS

Ready2Drive LMS is a driving school web platform built for Prince Edward Island driver training. It combines a public marketing site, an interactive student learning management system, and an administrative dashboard for student account management.

## Tech stack

- Next.js 16 (App Router) and React 19
- TypeScript 5
- Tailwind CSS v4
- Supabase (PostgreSQL, Supabase Auth via `@supabase/ssr`, Row-Level Security)
- Resend (transactional email alerts for contact inquiries)
- pdf-lib (client-side and server-side PDF certificate generation)
- Vitest and Playwright (unit, integration, and end-to-end test suites)

## Core features

- Marketing and program pages: Program overviews, pricing tiers, instructor details, and contact inquiry forms.
- Student LMS: Modular course structure with chapters, reading lessons, interactive quizzes, progress tracking, and downloadable completion certificates.
- Admin dashboard: Account provisioning with automated 90-day access windows, student progress overviews, and lead management.
- Secure auth: Cookie-based session handling across server and client boundaries with role-based access checks for students and admins.

## Getting started

### Prerequisites

- Node.js 20 or later
- npm 10 or later
- A Supabase project with database access

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ready2DrivePEI/web.git
cd web
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env.local` file in the project root. Populate it with the keys listed in the next section.

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment variables

Add these variables to your `.env.local` file:

```env
# Public Supabase credentials (client and server)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Server-only Supabase admin credential
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Transactional emails
RESEND_API_KEY=re_your_resend_api_key
```

Keep `SUPABASE_SERVICE_ROLE_KEY` secret. Never expose this key in client-side code or public repositories.

## Database and auth architecture

The system relies on Supabase Auth and PostgreSQL tables with Row-Level Security:

- `profiles`: Stores user account data linked to `auth.users.id`. Includes the user role (`student` or `admin`) and full name.
- `student_access`: Sets the active learning window. Admin account creation assigns a default 90-day access duration to new students.
- `student_progress`: Tracks completed chapters, lessons, quiz scores, and course completion states per student.
- `contact_inquiries`: Stores incoming inquiries submitted through the contact form on the marketing page.

Row-Level Security restricts student queries to their own records. Admin routes use the Supabase service role client to manage student accounts and review progress data across the cohort.

## Project structure

```
/
├── app/
│   ├── actions/                  # Server actions (contact submission)
│   ├── admin/                    # Admin dashboard and student creation UI
│   ├── api/                      # Route handlers for admin, auth, and progress
│   ├── lms-course/               # LMS layout, lesson viewer, quiz engine, and static curriculum data
│   │   ├── assessment/           # Final exam module
│   │   ├── data/modules/         # Static lesson and chapter data definitions
│   │   └── module/               # Dynamic module and chapter pages
│   ├── login/                    # Authentication sign-in page
│   ├── online-course-info/       # Course curriculum marketing page
│   ├── globals.css               # Global styles and LMS theme variables
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Marketing landing page
├── components/
│   ├── lms-sidebar/              # Course navigation sidebar components
│   └── ui/                       # Shared UI primitives (dialog, button, progress)
├── docs/                         # Architecture, auth, and styling documentation
├── lib/
│   ├── supabase/                 # Supabase browser, server, and admin clients
│   ├── certificate.ts            # PDF certificate generator using pdf-lib
│   ├── contact-schema.ts         # Zod validation schema for contact forms
│   └── lms-progress.ts           # Student progress tracking utilities
├── public/                       # Static assets, branding, and images
└── database.types.ts             # TypeScript definitions for Supabase schema
```

## Available scripts

- `npm run dev`: Starts the Next.js development server with hot reloading.
- `npm run build`: Compiles the application and generates the production build.
- `npm run start`: Runs the compiled production build locally.
- `npm run lint`: Runs ESLint across the codebase.
- `npm test`: Runs unit and component tests using Vitest.
- `npm run test:watch`: Runs Vitest in interactive watch mode.
- `npm run test:coverage`: Generates a test coverage report.
- `npm run test:e2e`: Runs end-to-end tests using Playwright.
- `npm run test:e2e:ui`: Opens the Playwright test runner UI.

## Deployment

### Vercel deployment

1. Connect the GitHub repository to your Vercel team account.
2. Ensure the framework preset is set to Next.js.
3. Configure the environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, and `RESEND_API_KEY`) in the Vercel dashboard.
4. Deploy the project. The default build command (`npm run build`) compiles the application.
