# Week 2: User Login & Database

## Goal
People can create accounts and log in. Two types of users: Author and Admin.

## What to Build

### 🔐 Authentication
- [ ] Sign up form (email, password, name)
- [ ] Login form (email, password)
- [ ] Logout button
- [ ] Store user session (JWT tokens or similar)

### 👥 User System
- [ ] New users get "author" role by default
- [ ] Admin can be set manually in database
- [ ] Show different things based on user role
- [ ] "My Account" page to see your info

### 🗃️ Database Operations
- [ ] Save new users to database
- [ ] Check login credentials against database
- [ ] Hash passwords (don't store plain text)
- [ ] Create your first admin user manually

### 🛡️ Basic Security
- [ ] Protected pages (must be logged in)
- [ ] Redirect to login if not signed in
- [ ] Can't access other people's draft posts

## Success Check
- ✅ Can create a new account
- ✅ Can log in with that account
- ✅ Can log out
- ✅ Admin user exists in database
- ✅ Can see different pages based on role

## API Endpoints to Create
- `POST /api/auth/signup` - Create new account
- `POST /api/auth/login` - Log in
- `POST /api/auth/logout` - Log out  
- `GET /api/auth/me` - Get current user info

## Pages to Create
- `/signup` - Registration form
- `/login` - Login form
- `/dashboard` - Protected page (shows after login)

## Database Changes
```sql
-- Add password and updated_at to users table
ALTER TABLE users ADD COLUMN password_hash VARCHAR(255);
ALTER TABLE users ADD COLUMN updated_at TIMESTAMP DEFAULT NOW();
```

## Don't Worry About
- OAuth (Google, GitHub login) - keep it simple
- Password reset - can add later
- Email verification - can add later
- Complex permissions - just author vs admin