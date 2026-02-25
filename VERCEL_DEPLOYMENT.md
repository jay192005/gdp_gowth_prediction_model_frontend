# Vercel Deployment Guide

## 🎯 Step-by-Step Deployment

### 1. Prepare Environment Variables

Before deploying, gather these values:

**Backend API:**
- Your Railway/Render backend URL (e.g., `https://your-app.onrender.com`)

**Firebase Config** (from Firebase Console):
- API Key
- Auth Domain
- Project ID
- Storage Bucket
- Messaging Sender ID
- App ID

### 2. Deploy to Vercel

#### Method A: Via GitHub (Recommended)

1. **Push code to GitHub** (already done if you're reading this!)

2. **Go to Vercel:**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Sign in with GitHub

3. **Import Repository:**
   - Click "Import Project"
   - Select `gdp_gowth_prediction_model_frontend`
   - Click "Import"

4. **Configure Project:**
   - Framework Preset: **Vite** (auto-detected)
   - Root Directory: `./` (leave as is)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)

5. **Add Environment Variables:**
   Click "Environment Variables" and add:
   
   ```
   VITE_API_BASE_URL=https://your-backend.onrender.com
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

6. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your app will be live at `https://your-project.vercel.app`

#### Method B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from frontend directory)
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? gdp-growth-prediction
# - Directory? ./ (current)
# - Override settings? No

# Deploy to production
vercel --prod
```

### 3. Configure Firebase

After deployment, add your Vercel domain to Firebase:

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Go to **Authentication** → **Settings** → **Authorized domains**
4. Click "Add domain"
5. Add your Vercel domain: `your-project.vercel.app`
6. Save

### 4. Test Deployment

Visit your Vercel URL and test:
- ✅ Landing page loads
- ✅ Google Sign-In works
- ✅ Dashboard displays after login
- ✅ API calls to backend work
- ✅ Charts render correctly

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update feature"
git push origin master

# Vercel automatically builds and deploys!
```

## 🛠️ Post-Deployment Configuration

### Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Add custom domain to Firebase authorized domains

### Environment Variables Updates

To update environment variables:
1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Edit or add variables
3. Redeploy: Settings → Deployments → Latest → Redeploy

### Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Asset compression
- ✅ Image optimization
- ✅ Edge caching

## 📊 Monitoring

### View Deployment Logs

1. Vercel Dashboard → Your Project → Deployments
2. Click on any deployment
3. View build logs and runtime logs

### Analytics (Optional)

Enable Vercel Analytics:
1. Project Settings → Analytics
2. Enable Web Analytics
3. Install `@vercel/analytics` package if needed

## 🐛 Common Issues

### Build Fails

**Error: "Module not found"**
```bash
# Solution: Ensure all dependencies are in package.json
npm install
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

**Error: "Environment variable not defined"**
- Check all `VITE_` prefixed variables are set in Vercel
- Redeploy after adding variables

### Runtime Issues

**Firebase Auth Not Working**
- Verify Vercel domain is in Firebase authorized domains
- Check environment variables are correct
- Check browser console for errors

**API Calls Failing**
- Verify `VITE_API_BASE_URL` is correct
- Ensure backend is running
- Check CORS settings on backend

**Blank Page After Deploy**
- Check browser console for errors
- Verify `vercel.json` rewrites are configured
- Check build logs for errors

## 🔐 Security Checklist

- ✅ All sensitive data in environment variables
- ✅ No API keys in source code
- ✅ Firebase rules configured properly
- ✅ CORS configured on backend
- ✅ HTTPS enabled (automatic on Vercel)

## 📱 Testing Checklist

After deployment, test:
- [ ] Landing page loads
- [ ] Sign in with Google works
- [ ] Dashboard displays correctly
- [ ] GDP prediction works
- [ ] Scenario simulation works
- [ ] Charts render properly
- [ ] Responsive design on mobile
- [ ] All API endpoints respond
- [ ] Sign out works

## 🎉 Success!

Your app is now live on Vercel! Share your URL:
`https://your-project.vercel.app`

## 📞 Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Firebase Documentation](https://firebase.google.com/docs)

---

**Deployment Status:** ✅ Ready for Production
