# Week 8: AI Polish & Limits

## Goal
Make AI features reliable and prevent users from spending too much money.

## What to Build

### 💸 Usage Controls
- [ ] Daily AI limits per user (20 requests/day)
- [ ] Monthly spending caps ($10/month per user)
- [ ] Show usage dashboard: "15/20 requests used today"
- [ ] Upgrade limits for power users
- [ ] Warning when approaching limits

### 🛡️ Better Error Handling
- [ ] Graceful failures when OpenAI is down
- [ ] Retry logic for temporary failures
- [ ] Fallback messages when AI fails
- [ ] User-friendly error messages
- [ ] Admin alerts for API issues

### ⚡ Performance Improvements
- [ ] Faster AI responses (optimize prompts)
- [ ] Cancel long-running jobs
- [ ] Cache common AI responses
- [ ] Batch multiple requests efficiently
- [ ] Timeout after 60 seconds

### 📊 AI Analytics
- [ ] Track which AI features are most used
- [ ] Monitor AI response quality
- [ ] Cost tracking per user and total
- [ ] Success/failure rates
- [ ] Average response times

## Success Check
- ✅ AI consistently works 95%+ of the time  
- ✅ Users can't accidentally spend $100 on AI
- ✅ Clear feedback when limits are reached
- ✅ Admin can see AI usage across all users
- ✅ AI features feel fast and reliable

## Usage Limits System
```javascript
// Daily limits
const LIMITS = {
  author: { daily: 20, monthly_cost: 1000 }, // $10
  admin: { daily: 100, monthly_cost: 5000 }  // $50
};
```

## API Endpoints to Create
- `GET /api/ai/limits` - Get my current usage and limits
- `GET /api/admin/ai-stats` - Overall AI usage (admin only)
- `POST /api/admin/ai-limits/:userId` - Adjust user limits

## Database Changes
```sql
-- Track daily usage
CREATE TABLE ai_usage_daily (
    user_id UUID REFERENCES users(id),
    date DATE,
    requests_count INTEGER DEFAULT 0,
    cost_cents INTEGER DEFAULT 0,
    PRIMARY KEY (user_id, date)
);

-- User-specific limits
ALTER TABLE users ADD COLUMN ai_daily_limit INTEGER DEFAULT 20;
ALTER TABLE users ADD COLUMN ai_monthly_limit_cents INTEGER DEFAULT 1000;
```

## Background Jobs to Add
- Daily usage reset (runs at midnight)
- Monthly cost calculation
- Alert admins of high usage
- Clean up old AI job records

## UI Improvements
- Usage indicator in header: "AI: 15/20 today"
- Better loading states for AI features
- Progress bars for long operations
- "Upgrade limits" link for power users

## Admin Dashboard
- Total AI costs this month
- Top AI users
- AI error rates
- Usage trends over time

## Don't Worry About
- Complex billing system
- Multiple AI providers
- Advanced prompt optimization
- Custom AI model training
- Enterprise usage analytics