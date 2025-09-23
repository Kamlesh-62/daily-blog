# Week 10: AI Generated Images

## Goal
AI can create featured images and illustrations for blog posts.

## What to Build

### 🎨 AI Image Generation
- [ ] Generate featured images from post title/content
- [ ] Create illustrations for specific topics
- [ ] Different art styles (photo, digital art, cartoon, minimal)
- [ ] Generate multiple options to choose from
- [ ] Custom prompts for specific images

### 🖼️ Image Styles & Presets
- [ ] Blog-friendly presets (professional, modern, colorful)
- [ ] Consistent brand colors/style options
- [ ] Different aspect ratios (16:9, 1:1, 4:3)
- [ ] High resolution for featured images
- [ ] Watermark or signature option

### 💰 Cost Management
- [ ] Image generation costs more than text
- [ ] Lower daily limits for images (5 per day)
- [ ] Show cost before generating
- [ ] Option to use free stock photos instead
- [ ] Bulk generate images for multiple posts

### 🔧 Integration
- [ ] "Generate Featured Image" button in post editor
- [ ] Save generated images to media library
- [ ] Edit AI prompts for better results
- [ ] Regenerate if you don't like the result
- [ ] Use generated images in post content

## Success Check
- ✅ Generate featured image that matches post topic
- ✅ Choose from multiple art styles
- ✅ Generated images look professional
- ✅ Can generate custom images with specific prompts
- ✅ Images are saved and reusable

## AI Image Prompts
```
Featured Image:
"Create a professional blog featured image for a post about [TOPIC].
Style: [modern/minimal/colorful], high quality, 1200x630 pixels,
no text overlay, suitable for social media sharing"

Custom Illustration:
"Create an illustration of [DESCRIPTION].
Style: [digital art/vector/photo], [colors], professional quality"
```

## API Endpoints to Create
- `POST /api/ai/generate-image` - Generate image from prompt
- `POST /api/ai/featured-image` - Generate featured image from post
- `GET /api/ai/image-styles` - Get available styles/presets

## Database Changes
```sql
-- Track AI image generation
ALTER TABLE ai_requests ADD COLUMN request_type VARCHAR(20); -- 'text' or 'image'
ALTER TABLE ai_requests ADD COLUMN image_url TEXT; -- for generated images

-- Link generated images to AI requests
ALTER TABLE media ADD COLUMN ai_generated BOOLEAN DEFAULT FALSE;
ALTER TABLE media ADD COLUMN ai_prompt TEXT;
```

## Image Generation Flow
```
User clicks "Generate Image" → API calls DALL-E/Midjourney 
→ Save image to S3 → Create media record → Show in UI
```

## AI Providers to Consider
- **OpenAI DALL-E**: Good quality, expensive (~$0.02 per image)
- **Stability AI**: Cheaper option (~$0.01 per image)
- **Midjourney API**: Best quality but most expensive

## UI Updates
- Image generation button in post editor
- Style selector dropdown
- Generated image preview grid
- Custom prompt input field
- Cost calculator

## Don't Worry About
- Advanced prompt engineering
- Image editing after generation
- Multiple AI image providers
- Batch image generation
- Custom model training