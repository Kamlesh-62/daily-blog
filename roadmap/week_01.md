# Week 1: Basic Setup

## Goal
Get the project started with basic website and database.

## What to Build

### 🏗️ Project Setup
- [ ] Create GitHub repository
- [ ] Set up Next.js website (frontend)
- [ ] Set up Node.js API (backend)
- [ ] Connect PostgreSQL database
- [ ] Basic folder structure

### 📦 Database Tables
- [ ] Users table (id, email, name, role)
- [ ] Posts table (id, title, content, author_id, status)
- [ ] Database migrations working

### 🌐 Basic Pages
- [ ] Home page that says "AI Blog Platform"
- [ ] Login page (just the form, no login yet)
- [ ] Simple API endpoint that returns "Hello World"

### ⚙️ Development Setup
- [ ] Code runs locally without errors
- [ ] Database connects successfully
- [ ] Git commits and pushes work
- [ ] Basic TypeScript setup

## Success Check
- ✅ Website loads at http://localhost:3000
- ✅ API responds at http://localhost:3001/health
- ✅ Database tables exist and are empty
- ✅ Code is in GitHub

## Time Estimate
**3-5 days** if you're familiar with these tools.
**Full week** if you're learning as you go.

## Don't Worry About
- Making it look pretty
- User authentication yet
- AI features
- Hosting/deployment

## Files to Create
```
my-blog-platform/
├── frontend/          # Next.js app
├── backend/           # Node.js API  
├── database/          # SQL migration files
├── README.md
└── .gitignore
```