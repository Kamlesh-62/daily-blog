# Week 9: Image Upload

## Goal
Authors can upload images for their blog posts and set featured images.

## What to Build

### 📷 Image Upload System  
- [ ] Drag and drop image upload
- [ ] Choose featured image for each post
- [ ] Upload images inside post content
- [ ] Support JPG, PNG, WebP formats
- [ ] Image preview before upload

### 🗂️ Media Library
- [ ] "My Images" page showing all uploaded images
- [ ] Reuse images across multiple posts
- [ ] Delete unused images
- [ ] Search images by filename
- [ ] Organize by upload date

### ⚡ Image Optimization
- [ ] Automatically resize large images
- [ ] Compress images to reduce file size
- [ ] Generate multiple sizes (thumbnail, medium, full)
- [ ] Convert to WebP for better performance
- [ ] Add image alt text for accessibility

### 🌐 Image Delivery
- [ ] Store images in AWS S3 or similar
- [ ] Fast image loading via CDN
- [ ] Responsive images (different sizes for mobile/desktop)
- [ ] Lazy loading for better page speed

## Success Check
- ✅ Can drag image into post editor and it uploads
- ✅ Can set featured image for blog posts
- ✅ Images load fast on published posts
- ✅ Images look good on mobile and desktop
- ✅ Can reuse images from media library

## API Endpoints to Create
- `POST /api/media/upload` - Upload single image
- `GET /api/media/mine` - Get my uploaded images
- `DELETE /api/media/:id` - Delete image
- `PUT /api/posts/:id/featured-image` - Set featured image

## Database Changes
```sql
CREATE TABLE media (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    filename VARCHAR(255) NOT NULL,
    original_name VARCHAR(255),
    file_size INTEGER, -- bytes
    mime_type VARCHAR(100),
    url TEXT NOT NULL, -- S3 or CDN URL
    alt_text TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Link posts to featured images
ALTER TABLE posts ADD COLUMN featured_image_id UUID REFERENCES media(id);
```

## File Upload Flow
```
User selects image → Upload to S3 → Save record in database 
→ Return image URL → Show in editor → Insert in post content
```

## Storage Setup
- AWS S3 bucket for image storage
- CloudFront CDN for fast delivery
- Image processing with Sharp.js
- File size limits (5MB per image)

## UI Components
- Image upload dropzone
- Media library grid view
- Image selector modal
- Featured image preview

## Don't Worry About
- Advanced image editing
- Multiple file uploads at once
- Image galleries or slideshows
- Video upload support
- Complex image permissions