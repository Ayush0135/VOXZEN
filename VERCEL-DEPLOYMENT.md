# 🚀 Vercel Deployment Guide for Voxzen AI

## ⚠️ Important: SQLite Won't Work on Vercel

**Problem**: SQLite requires a writable local file system, but Vercel uses serverless functions with read-only filesystems.

**Solution**: Use a cloud database instead. Here are your options:

---

## 🗄️ Database Options for Vercel

### Option 1: Vercel Postgres (Recommended)
✅ Integrated with Vercel  
✅ Easy setup  
✅ Free tier: 256 MB storage  

**Steps:**
1. Go to your Vercel project dashboard
2. Click "Storage" → "Create Database" → "Postgres"
3. Vercel will automatically add environment variables
4. That's it! No manual configuration needed

### Option 2: Supabase (Recommended for Free)
✅ Free forever plan (500 MB)  
✅ Built-in auth, storage, realtime  
✅ Open source  

**Steps:**
1. Sign up at [supabase.com](https://supabase.com)
2. Create a new project
3. Get connection string from Settings → Database
4. Add to Vercel environment variables

### Option 3: Neon (Serverless Postgres)
✅ Serverless with auto-scaling  
✅ Free tier: 512 MB  
✅ Very fast  

**Steps:**
1. Sign up at [neon.tech](https://neon.tech)
2. Create a database
3. Copy connection string
4. Add to Vercel

### Option 4: PlanetScale (MySQL)
✅ MySQL-based  
✅ Free tier: 5 GB  
✅ Branching for development  

---

## 📝 Environment Variables for Vercel

**You need to add these in Vercel Dashboard:**

Go to: Project Settings → Environment Variables

### For Vercel Postgres:
```
# Auto-added by Vercel when you create Postgres database
POSTGRES_URL=<auto-filled>
POSTGRES_PRISMA_URL=<auto-filled>
POSTGRES_URL_NON_POOLING=<auto-filled>
POSTGRES_USER=<auto-filled>
POSTGRES_HOST=<auto-filled>
POSTGRES_PASSWORD=<auto-filled>
POSTGRES_DATABASE=<auto-filled>
```

### For Supabase:
```
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
```

### For Neon:
```
DATABASE_URL=postgresql://[USER]:[PASSWORD]@[HOST]/[DATABASE]
```

### Optional:
```
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

---

## 🔧 Code Changes Needed

Since we're switching from SQLite to Postgres, you need to update the database code.

### Current Status:
- ❌ Using SQLite (`better-sqlite3`)
- ❌ Won't work on Vercel

### What to Do:

**Option A: Quick Fix - Use Vercel Postgres with SQL**
I can update the code to use `@vercel/postgres` package

**Option B: Best Practice - Use Prisma ORM**
I can set up Prisma for type-safe database access

**Which would you prefer?**

---

## 🚀 Deployment Steps

### 1. Install Vercel CLI (Optional)
```bash
npm i -g vercel
```

### 2. Deploy via GitHub (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Vercel auto-detects Next.js
6. Click "Deploy"

### 3. Add Database
1. In Vercel Dashboard → Storage
2. Create Postgres database
3. Environment variables auto-added

### 4. Update Database Schema
You'll need to create the table in Postgres:

```sql
CREATE TABLE applications (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  current_occupation VARCHAR(255),
  investment_readiness VARCHAR(50),
  youtube_experience VARCHAR(50),
  goals TEXT,
  preferred_niche VARCHAR(255),
  how_heard VARCHAR(50),
  additional_info TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'pending'
);
```

---

## 📦 Package Changes Needed

### Remove (SQLite):
```bash
npm uninstall better-sqlite3
```

### Add (Postgres):
```bash
npm install @vercel/postgres
# OR
npm install pg
```

---

## ✅ Pre-Deployment Checklist

- [ ] Choose database provider (Vercel Postgres, Supabase, or Neon)
- [ ] Update database code (I can help with this)
- [ ] Add environment variables in Vercel
- [ ] Test locally with cloud database
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Run database migrations
- [ ] Test form submission on production

---

## 🆘 Need Help?

**Tell me which database you want to use:**
1. **Vercel Postgres** - Easiest, integrated
2. **Supabase** - Most features, free tier
3. **Neon** - Serverless, fast

I'll update the code to work with your choice!

---

## 🔒 .gitignore Check

Make sure these are in `.gitignore`:
```
.env.local
.env*.local
applications.db
node_modules/
.next/
```

---

## 📊 After Deployment

### View Applications:
- Admin: `https://your-domain.vercel.app/admin/applications`
- API: `https://your-domain.vercel.app/api/applications`

### Connect to Database:
- Vercel Postgres: Via Vercel dashboard
- Supabase: Via web UI at supabase.com
- Neon: Via connection string with `psql`

---

**Next Step:** Choose your database provider and I'll update the code! 🚀
