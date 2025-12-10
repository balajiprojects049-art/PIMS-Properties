# 🚀 PIMS Properties - Vercel Deployment Guide

## Quick Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Login to Vercel** (you'll need a Vercel account - free at https://vercel.com)
   ```bash
   vercel login
   ```

2. **Deploy to Production**
   ```bash
   vercel --prod
   ```

3. **Follow the prompts:**
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No**
   - Project name? `pims-properties` (or your preferred name)
   - Directory? `./ ` (press Enter)
   - Override settings? **No**

4. **Your site will be live!** 🎉
   Vercel will provide you with a URL like: `https://pims-properties.vercel.app`

### Option 2: Deploy via Vercel Dashboard (Alternative)

1. **Go to** https://vercel.com and sign up/login

2. **Click "Add New Project"**

3. **Import Git Repository:**
   - First push your code to GitHub:
     ```bash
     # Create a new repo on GitHub first, then:
     git remote set-url origin YOUR_GITHUB_REPO_URL
     git push -u origin main
     ```
   - Import the GitHub repository in Vercel

4. **Configure Build Settings:**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Click "Deploy"**

6. **Your site will be live!** 🎉

---

## Post-Deployment Checklist

### ✅ Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your domain (e.g., pimsproperties.com)
4. Update DNS settings as instructed

### ✅ Environment Variables (If needed)
1. Go to project settings
2. Navigate to "Environment Variables"
3. Add any required variables (e.g., API keys)

### ✅ Performance Optimization
- ✓ Automatic CDN enabled
- ✓ Automatic HTTPS enabled
- ✓ Image optimization available
- ✓ Edge functions supported

---

## Updating Your Live Site

Whenever you make changes:

```bash
# Make your changes, then:
git add .
git commit -m "Update description"
git push origin main
```

Vercel will automatically deploy the new version!

Or with Vercel CLI:
```bash
vercel --prod
```

---

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`

### Routing Issues
- The `vercel.json` file handles SPA routing
- All routes redirect to `index.html`

### Slow Build Times
- Build cache is automatic
- Consider upgrading to Vercel Pro for faster builds

---

## Useful Commands

```bash
# Preview deployment
vercel

# Production deployment
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel remove pims-properties
```

---

## Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **Vite Docs:** https://vitejs.dev/guide/
- **Support:** https://vercel.com/support

---

## Your Website Info

- **Local URL:** http://localhost:5173
- **Production URL:** Will be provided after deployment
- **Framework:** React + Vite + Tailwind CSS
- **Build Output:** dist/

---

**Ready to deploy? Run: `vercel --prod`** 🚀
