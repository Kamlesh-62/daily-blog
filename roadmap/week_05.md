# Week 5: AI Titles & Summaries

## Goal
Add AI that helps authors write better titles and summaries for their posts.

## What to Build

### 🤖 AI Integration
- [ ] Connect to OpenAI API
- [ ] "Generate Titles" button in post editor
- [ ] "Generate Summary" button in post editor  
- [ ] Show 3-5 title options to choose from
- [ ] Generate short summary from post content

### 💬 AI Prompts
- [ ] Write good prompts for title generation
- [ ] Write good prompts for summary generation
- [ ] Handle long posts (truncate if needed)
- [ ] Make AI output sound natural

### 💰 Cost Tracking
- [ ] Count AI tokens used
- [ ] Estimate cost per request
- [ ] Show cost to user before generating
- [ ] Set simple limits (10 AI requests per day per user)

### 🎨 User Experience
- [ ] Loading spinner while AI thinks
- [ ] Click to use a generated title
- [ ] Regenerate if you don't like options
- [ ] Error messages if AI fails

## Success Check
- ✅ Click "Generate Titles" and get 5 good options
- ✅ Click "Generate Summary" and get 1-2 paragraph summary
- ✅ Can use AI suggestions in your post
- ✅ AI works within 10-15 seconds
- ✅ Error handling if AI is down

## API Endpoints to Create
- `POST /api/ai/titles` - Generate title options
- `POST /api/ai/summary` - Generate post summary
- `GET /api/ai/usage` - Check my AI usage today

## Database Changes
```sql
-- Track AI usage
CREATE TABLE ai_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    type VARCHAR(50), -- 'titles', 'summary'
    tokens_used INTEGER,
    cost_cents INTEGER,
    created_at TIMESTAMP DEFAULT NOW()
);
```

## AI Prompts to Write
```
Title Generation:
"Write 5 catchy blog post titles for this content: [CONTENT]
Make them engaging and click-worthy but not clickbait."

Summary Generation:
"Write a 2-paragraph summary of this blog post: [CONTENT]
Make it clear and engaging for potential readers."
```

## Don't Worry About
- Multiple AI providers (just use OpenAI)
- Complex prompt engineering
- AI content generation (full posts)
- Fine-tuning AI models
- Advanced cost optimization