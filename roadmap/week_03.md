# Week 3: Write & Edit Posts

## Goal
Authors can create, edit, and delete their own posts. Admins can edit anyone's posts.

## What to Build

### ✍️ Post Editor
- [ ] "New Post" page with title and content fields
- [ ] Rich text editor (bold, italic, headings, links)
- [ ] Save as draft button
- [ ] Publish button (makes post public)
- [ ] Auto-save while typing (every 30 seconds)

### 📝 Post Management
- [ ] "My Posts" page - list of your posts
- [ ] Edit existing posts
- [ ] Delete posts (with confirmation)
- [ ] Post status: Draft or Published

### 👮 Permissions
- [ ] Authors can only edit their own posts
- [ ] Admins can edit anyone's posts
- [ ] Show edit/delete buttons only when allowed

### 🏷️ Basic Post Info
- [ ] Auto-generate URL slug from title
- [ ] Show author name and publish date
- [ ] Character/word count while writing

## Success Check
- ✅ Can write a new post and save as draft
- ✅ Can publish a post
- ✅ Can edit your own posts
- ✅ Can delete your own posts
- ✅ Admin can edit other people's posts
- ✅ Author cannot edit other people's posts

## API Endpoints to Create
- `POST /api/posts` - Create new post
- `GET /api/posts/mine` - Get my posts
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `GET /api/posts/:id` - Get single post

## Pages to Create
- `/write` - New post editor
- `/posts` - List of my posts
- `/edit/:id` - Edit existing post

## Database Changes
```sql
-- Add missing columns to posts table
ALTER TABLE posts ADD COLUMN slug VARCHAR(200) UNIQUE;
ALTER TABLE posts ADD COLUMN excerpt TEXT;
ALTER TABLE posts ADD COLUMN published_at TIMESTAMP;
ALTER TABLE posts ADD COLUMN updated_at TIMESTAMP DEFAULT NOW();
```

## Don't Worry About
- Complex formatting options
- Image uploading in posts
- Tags or categories
- Comments system
- SEO optimization yet