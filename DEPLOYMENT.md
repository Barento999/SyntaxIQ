# Deployment Guide

This guide covers deploying SyntaxIQ to production environments.

## Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account or MongoDB server
- Google Gemini API key
- Domain name (optional)

## Environment Setup

### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/codereview-ai
JWT_SECRET=your_super_secret_jwt_key_min_32_characters
JWT_EXPIRE=7d
GEMINI_API_KEY=your_gemini_api_key
NODE_ENV=production
MAX_CODE_LENGTH=10000
FRONTEND_URL=https://your-domain.com
```

### Frontend Environment Variables

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=https://api.your-domain.com/api
```

## Deployment Options

### Option 1: Vercel (Frontend) + Render (Backend)

#### Deploy Frontend to Vercel

1. Push code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your repository
5. Configure:
   - Framework Preset: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add environment variable: `VITE_API_URL`
7. Deploy

#### Deploy Backend to Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your repository
4. Configure:
   - Name: codereview-ai-backend
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Add environment variables from `.env`
6. Deploy

### Option 2: Railway (Full Stack)

1. Go to [Railway](https://railway.app/)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway will auto-detect and deploy both services
5. Add environment variables for both services
6. Deploy

### Option 3: DigitalOcean App Platform

1. Go to [DigitalOcean](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Connect your repository
4. Configure both frontend and backend components
5. Add environment variables
6. Deploy

### Option 4: AWS (Advanced)

#### Backend (EC2 + Load Balancer)

```bash
# SSH into EC2 instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone https://github.com/yourusername/codereview-ai.git
cd codereview-ai/backend

# Install dependencies
npm install

# Setup PM2
sudo npm install -g pm2
pm2 start server.js --name codereview-backend
pm2 startup
pm2 save
```

#### Frontend (S3 + CloudFront)

```bash
# Build frontend
cd frontend
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name

# Configure CloudFront distribution
# Point to S3 bucket
# Add custom domain
# Enable HTTPS
```

## Database Setup

### MongoDB Atlas

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (M0 Free tier available)
3. Create database user
4. Whitelist IP addresses (0.0.0.0/0 for all IPs)
5. Get connection string
6. Update `MONGODB_URI` in environment variables

## Domain Configuration

### Custom Domain

1. Purchase domain from registrar (Namecheap, GoDaddy, etc.)
2. Add DNS records:
   ```
   A     @     points to your-backend-ip
   CNAME www   points to your-frontend-url
   CNAME api   points to your-backend-url
   ```

### SSL Certificate

- Vercel/Render: Automatic SSL
- Custom server: Use Let's Encrypt

```bash
sudo apt-get install certbot
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Post-Deployment

### Health Checks

Test your deployment:

```bash
# Backend health
curl https://api.your-domain.com/api/health

# Frontend
curl https://your-domain.com
```

### Monitoring

Set up monitoring:

- **Uptime**: UptimeRobot, Pingdom
- **Errors**: Sentry
- **Analytics**: Google Analytics, Plausible
- **Logs**: Papertrail, Loggly

### Backup

Set up automated backups:

- MongoDB Atlas: Automatic backups
- Custom: Use `mongodump`

```bash
mongodump --uri="mongodb+srv://..." --out=/backup/$(date +%Y%m%d)
```

## Scaling

### Horizontal Scaling

- Add more backend instances
- Use load balancer
- Enable auto-scaling

### Vertical Scaling

- Upgrade server resources
- Optimize database queries
- Implement caching (Redis)

## Troubleshooting

### Common Issues

**Backend not starting:**

- Check environment variables
- Verify MongoDB connection
- Check logs: `pm2 logs`

**Frontend not loading:**

- Check API URL configuration
- Verify CORS settings
- Check browser console

**Database connection failed:**

- Verify connection string
- Check IP whitelist
- Ensure database user has permissions

## Security Checklist

- [ ] Environment variables configured
- [ ] HTTPS enabled
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] Database secured
- [ ] API keys rotated
- [ ] Backups configured
- [ ] Monitoring set up

## Support

For deployment issues:

- Email: support@codereview.ai
- Documentation: https://docs.codereview.ai
- GitHub Issues: https://github.com/yourusername/codereview-ai/issues

---

Last updated: 2024-02-28
