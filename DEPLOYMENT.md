# Deployment Guide

This guide explains how to deploy the Carolina Georgia Services website to GitHub and Vercel.

## Prerequisites

- GitHub account
- Vercel account (can sign up with GitHub)
- Git installed locally

## Step 1: Push to GitHub

### Option A: Using GitHub CLI (Recommended)

The project already has Git initialized. Follow these steps:

```bash
# Navigate to project directory
cd /home/ubuntu/carolina-georgia-services

# Authenticate with GitHub (if not already done)
gh auth login

# Create a new repository on GitHub
gh repo create carolina-georgia-services --public --source=. --remote=origin

# Push the code
git add .
git commit -m "Initial commit: Carolina Georgia Services website"
git push -u origin main
```

### Option B: Using GitHub Web Interface

1. Go to [GitHub](https://github.com) and create a new repository named `carolina-georgia-services`
2. In your terminal, run:

```bash
cd /home/ubuntu/carolina-georgia-services
git remote add origin https://github.com/YOUR_USERNAME/carolina-georgia-services.git
git add .
git commit -m "Initial commit: Carolina Georgia Services website"
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI

```bash
# Install Vercel CLI globally (if not installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? carolina-georgia-services
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

### Option B: Using Vercel Dashboard (Recommended for First-Time Users)

1. Go to [Vercel](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import your GitHub repository `carolina-georgia-services`
4. Configure project settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `client/dist`
5. Click "Deploy"

## Step 3: Configure Build Settings (If Needed)

If Vercel doesn't auto-detect the settings, use these:

- **Build Command**: `pnpm run build`
- **Output Directory**: `client/dist`
- **Install Command**: `pnpm install`
- **Development Command**: `pnpm run dev`

## Step 4: Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Domains
3. Add your custom domain (e.g., `carolinageorgiaservices.com`)
4. Follow Vercel's instructions to configure DNS

## Environment Variables

This project doesn't require any environment variables for basic deployment. All configuration is handled through the build process.

## Continuous Deployment

Once connected to GitHub, Vercel will automatically deploy:

- **Production**: Every push to `main` branch
- **Preview**: Every pull request

## Troubleshooting

### Build Fails on Vercel

- Ensure `pnpm` is being used (Vercel should auto-detect from `pnpm-lock.yaml`)
- Check that the output directory is set to `client/dist`
- Verify all dependencies are listed in `package.json`

### Images Not Loading

- Ensure all images in `client/public` are referenced with absolute paths (e.g., `/hero-hvac.jpg`)
- Check that image files are committed to Git

### 404 on Page Refresh

- Vercel should handle this automatically for SPA routing
- If issues persist, add a `vercel.json` configuration file

## Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- GitHub Documentation: https://docs.github.com
