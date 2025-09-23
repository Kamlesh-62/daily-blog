# Week 4: Public Blog Pages

## Goal
Anyone can visit your blog and read published posts. Fast loading pages with good SEO.

## What to Build

### 📖 Public Pages
- [ ] Blog homepage - list of recent published posts
- [ ] Individual post pages (`/blog/my-post-title`)
- [ ] Author pages (`/author/john-doe`)
- [ ] Basic search (find posts by title/content)
- [ ] Pagination (10 posts per page)

### ⚡ Performance
- [ ] Fast loading pages (under 2 seconds)
- [ ] Cache published posts so they load instantly
- [ ] Responsive design (works on phones)
- [ ] Basic CSS styling that looks professional

### 🔍 SEO Basics
- [ ] Page titles and descriptions
- [ ] Open Graph tags (for social sharing)
- [ ] Sitemap.xml file
- [ ] Robots.txt file

### 🧭 Navigation
- [ ] Header with blog name and menu
- [ ] Footer with basic links
- [ ] Breadcrumbs on post pages
- [ ] "Back to posts" links

## Success Check
- ✅ Can visit `/blog` and see published posts
- ✅ Can click on a post and read it
- ✅ Posts show author name and date
- ✅ Can search for posts by title
- ✅ Pages look good on phone and desktop
- ✅ Pages load quickly

## API Endpoints to Create
- `GET /api/posts/published` - Get published posts (with pagination)
- `GET /api/posts/slug/:slug` - Get post by URL slug
- `GET /api/search?q=keyword` - Search posts

## Pages to Create
- `/blog` - Public blog homepage
- `/blog/[slug]` - Individual post pages
- `/author/[author]` - Author profile pages
- `/search` - Search results page

## Database Changes
```sql
-- Add indexes for better performance
CREATE INDEX idx_posts_status ON posts(status);
CREATE INDEX idx_posts_published_at ON posts(published_at DESC);
CREATE INDEX idx_posts_author ON posts(author_id);
```

## Don't Worry About
- Complex themes or customization
- Comments on posts
- Social sharing buttons
- Newsletter signup
- Advanced SEO features