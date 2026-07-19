# LMS Platform

A complete, production-ready Learning Management System built with Next.js 15, TypeScript, Prisma, and modern UI components.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Recharts
- **Backend**: Next.js API Routes, Prisma ORM, PostgreSQL
- **Auth**: NextAuth.js v5 with email/password + OAuth (Google, GitHub)
- **State**: Zustand (client), React Query (server)
- **Forms**: React Hook Form + Zod

## Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

## Quick Start

### 1. Extract & Install
```bash
unzip lms-platform.zip
cd lms-platform
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
```

Edit `.env`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/lms_db?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-min-32-chars-long"
```

### 3. Database Setup
```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
```

### 4. Run
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Super Admin | superadmin@lms.com | password123 |
| Admin | admin1@lms.com | password123 |
| Instructor | instructor1@lms.com | password123 |
| Student | student1@lms.com | password123 |

## Project Structure

```
lms/
├── app/
│   ├── (auth)/           # Login, Register
│   ├── (dashboard)/      # Admin, Instructor, Student
│   ├── api/              # REST API routes
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/
│   ├── ui/               # shadcn/ui (25+ components)
│   ├── layout/           # Sidebar, Header
│   └── providers.tsx     # Auth, Query, Theme providers
├── lib/                  # Prisma, Auth, Utils, API helpers
├── hooks/                # useAuth, useCourses, useProgress, useNotifications
├── stores/               # Zustand auth store
├── types/                # TypeScript interfaces
├── prisma/
│   ├── schema.prisma     # Complete DB schema (20+ models)
│   └── seed.ts           # 58 users, 10 courses, badges, etc.
└── styles/
    └── globals.css       # Tailwind + custom styles
```

## Features

- [x] Authentication (Email/Password, OAuth, RBAC)
- [x] Role-based route protection
- [x] Responsive sidebar with collapse animation
- [x] Dark mode toggle
- [x] Notification bell with unread count
- [x] Complete Prisma schema (Users, Courses, Modules, Lessons, Quizzes, Progress, Certificates, Badges, etc.)
- [x] Comprehensive seed data
- [x] Type-safe API routes
- [x] Modern UI with 25+ shadcn components

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run db:migrate` | Run migrations |
| `npm run db:seed` | Seed database |
| `npm run db:studio` | Prisma Studio GUI |

## OAuth Setup (Optional)

**Google**: [Google Cloud Console](https://console.cloud.google.com/)
- Redirect URI: `http://localhost:3000/api/auth/callback/google`

**GitHub**: [GitHub Settings](https://github.com/settings/developers)
- Callback URL: `http://localhost:3000/api/auth/callback/github`

Add to `.env`:
```env
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
```

## License

MIT
