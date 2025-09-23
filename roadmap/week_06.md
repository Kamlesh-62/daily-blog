# Week 6: AI Background Jobs

## Goal
Make AI requests run in the background so they don't slow down the website.

## What to Build

### ⏰ Job Queue System
- [ ] Set up Redis for job queue
- [ ] Move AI requests to background jobs
- [ ] Show "Processing..." status to users
- [ ] Update page when AI job finishes

### 📡 Real-time Updates
- [ ] WebSocket or polling to check job status
- [ ] Show progress: "Generating titles..." → "Done!"
- [ ] Handle failed jobs with retry
- [ ] Queue multiple AI requests

### 🔧 Job Processing
- [ ] Separate worker process for AI jobs
- [ ] Handle multiple jobs at once
- [ ] Retry failed jobs (3 attempts)
- [ ] Clean up old completed jobs

### 📊 Better UI
- [ ] Job history: see previous AI generations
- [ ] Cancel running jobs if needed
- [ ] Show estimated time remaining
- [ ] Better error messages

## Success Check
- ✅ Click "Generate Titles" and page doesn't freeze
- ✅ See status updates as AI processes
- ✅ Multiple users can use AI at same time
- ✅ Failed jobs retry automatically
- ✅ Can see history of AI requests

## New Architecture
```
User clicks "Generate" → API creates job → Queue picks up job 
→ Worker calls OpenAI → Worker saves result → User sees results
```

## API Endpoints to Update
- `POST /api/ai/titles` - Creates background job, returns job ID
- `GET /api/ai/job/:id` - Check job status
- `GET /api/ai/history` - See my AI request history

## Database Changes
```sql
CREATE TABLE ai_jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    type VARCHAR(50), -- 'titles', 'summary'  
    status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'processing', 'completed', 'failed'
    input_data JSONB, -- post content, etc
    result_data JSONB, -- generated titles/summary
    error_message TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    completed_at TIMESTAMP
);
```

## New Components
- Background worker process (separate from web server)
- Job queue management
- WebSocket connection for real-time updates

## Don't Worry About
- Complex job scheduling
- Job priorities
- Distributed workers across servers
- Advanced monitoring dashboards