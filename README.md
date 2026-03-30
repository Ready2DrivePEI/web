# Ready2Drive LMS

Next.js App Router + TypeScript + Tailwind + Supabase.

## Local Development

1. Copy `.env.example` to `.env.local` and fill real values.
2. Install dependencies:
```bash
npm install
```
3. Run dev server:
```bash
npm run dev
```

## Vercel Deployment

### 1) Project Settings
- Framework preset: `Next.js`
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: default (`.next`)

### 2) Environment Variables (Vercel)
Set these in Vercel for Production (and Preview if needed):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (optional alias)
- `SUPABASE_SERVICE_ROLE_KEY` (server-only, required for admin API routes)
- `SUPABASE_URL` (optional alias)

Use `.env.example` as the reference template.

### 3) Important Security Note
- Never put `SUPABASE_SERVICE_ROLE_KEY` in client code.
- Admin account creation route is server-side and requires an authenticated admin bearer token.

### 4) Post-Deploy Smoke Checks
1. Login as admin.
2. Open `/admin` and create a student account.
3. Confirm user exists in `auth.users` and `public.profiles`.
4. Login as student and verify LMS opens.
5. Check chapter progress updates and resume prompt behavior.
