# Free Hosting Platforms Comparison

## Quick Comparison

| Platform | Free Tier | Pros | Cons | Best For |
|----------|-----------|------|------|----------|
| **Railway** | 500 hours/month | • Easy GitHub integration<br>• Auto-detects Flask<br>• Good performance<br>• Custom domains | • Limited free hours<br>• Requires credit card | **Recommended** |
| **Render** | 750 hours/month | • More free hours<br>• Auto-deploys<br>• SSL included<br>• Good docs | • Slower cold starts<br>• Limited regions | Production apps |
| **Vercel** | Unlimited | • Global CDN<br>• Instant deploys<br>• Great performance<br>• No credit card needed | • Serverless only<br>• 10s execution limit | Static + API routes |
| **PythonAnywhere** | Always free | • Always online<br>• Traditional hosting<br>• Good for learning | • Limited features<br>• Slower performance | Development/Learning |

## Setup Instructions

### Railway (Recommended)
1. Go to [railway.app](https://railway.app/)
2. "New Project" → "Deploy from GitHub repo"
3. Select your Portfolio repository
4. Railway auto-detects and deploys!

### Render
1. Go to [render.com](https://render.com/)
2. "New" → "Web Service"
3. Connect GitHub repo
4. Build Command: `pip install -r requirements.txt`
5. Start Command: `gunicorn app:app`

### Vercel
1. Install CLI: `npm install -g vercel`
2. Run: `vercel` in project directory
3. Follow prompts
4. For production: `vercel --prod`

### PythonAnywhere
1. Create account at [pythonanywhere.com](https://www.pythonanywhere.com/)
2. Upload files via Files tab
3. Create web app in Web tab
4. Configure WSGI to point to app.py

## Environment Variables

For production, set these in your hosting platform:

```bash
FLASK_ENV=production
SECRET_KEY=your-production-secret-key-here
DEBUG=False
```

## Performance Tips

- **Railway**: Use `gunicorn` for better performance
- **Render**: Enable persistent disk for SQLite
- **Vercel**: Consider using Vercel's database for better performance
- **PythonAnywhere**: Upgrade to paid plan for better performance

## Domain Configuration

- **Railway**: Free subdomain: `yourapp.railway.app`
- **Render**: Free subdomain: `yourapp.onrender.com`
- **Vercel**: Free subdomain: `yourapp.vercel.app`
- **PythonAnywhere**: Free subdomain: `yourusername.pythonanywhere.com`

Custom domains available on paid plans for all platforms.

## Monitoring

All platforms provide:
- Deployment logs
- Runtime logs
- Basic metrics
- Health checks

## Cost Comparison

- **Railway**: $5/month for unlimited hours
- **Render**: $7/month for 750 hours + extras
- **Vercel**: $20/month for Pro features
- **PythonAnywhere**: $5/month for Hacker plan

## Migration

If you outgrow the free tier:
1. **Railway → Render**: Similar setup, just reconnect repo
2. **Vercel → Railway**: Add `railway.json`, reconnect
3. **Any → PythonAnywhere**: Upload files, configure WSGI

## Recommendations

- **For Learning**: PythonAnywhere (always free)
- **For Development**: Railway (easy setup)
- **For Production**: Render (reliable, more hours)
- **For Static + API**: Vercel (best performance)

Choose based on your specific needs and usage patterns!
