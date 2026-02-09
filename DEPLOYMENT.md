# CRUD App - Deployment Guide

## Local Development
```bash
# Install dependencies (both backend and client)
npm install
cd client && npm install

# Start backend (from root)
npm run dev

# In another terminal, start client dev server
cd client && npm run dev
```

## Deployment to Render.com (Full-Stack)

### Prerequisites
- GitHub account with this repo pushed
- MongoDB Atlas account (or your MongoDB connection string)
- Render.com account

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Setup for Render deployment"
git push origin main
```

### Step 2: Create Render Web Service
1. Go to [render.com](https://render.com) and sign up/login
2. Click **"New +"** → **"Web Service"**
3. Choose **"Connect a repository"** and select your repo
4. Fill in the details:
   - **Name**: `crud-app` (or your preferred name)
   - **Environment**: `Node`
   - **Region**: Keep default
   - **Branch**: `main`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run production`
   - **Plan**: Select **Free** (or paid for better uptime)

### Step 3: Add Environment Variables
Click **"Advanced"** and add these environment variables:
- **MONGODB_URI**: Your MongoDB connection string
  - Example: `mongodb+srv://username:password@cluster.mongodb.net/dbname`
- **JWT_SECRET**: A random secret string
  - Example: Generate one at [randomkeygen.com](https://randomkeygen.com)

### Step 4: Deploy
1. Click **"Create Web Service"**
2. Render will automatically build and deploy
3. Once deployed, your app will be live at `https://crud-app.onrender.com` (or similar)

### Done! 🎉
Your app is now deployed with:
- ✅ Frontend (React) served from the same server
- ✅ Backend (Express) handling API calls
- ✅ MongoDB connected via environment variable
- ✅ Authentication with JWT tokens

### Notes
- First load may be slow (Render free tier spins down after 15 mins of inactivity)
- Use environment variable `JWT_SECRET` in production (already in `.env.example`)
- Build cache will speed up future deployments

