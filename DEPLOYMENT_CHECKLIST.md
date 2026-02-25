# 🚀 Vercel Deployment Checklist

## ✅ Pre-Deployment (Completed)

- [x] Code pushed to GitHub repository
- [x] `vercel.json` configuration file present
- [x] `.vercelignore` file added
- [x] README.md with deployment instructions
- [x] VERCEL_DEPLOYMENT.md guide created
- [x] Environment variable examples documented

## 📋 Deploy Now - Follow These Steps

### Step 1: Gather Required Information

Before deploying, have these ready:

**Backend API URL:**
```
Your Railway/Render backend URL
Example: https://gdp-prediction-api.onrender.com
```

**Firebase Configuration** (from Firebase Console → Project Settings):
```
API Key: AIza...
Auth Domain: your-project.firebaseapp.com
Project ID: your-project-id
Storage Bucket: your-project.appspot.com
Messaging Sender ID: 123456789
App ID: 1:123456789:web:abc123
```

### Step 2: Deploy to Vercel

#### Option A: Via Vercel Dashboard (Easiest)

1. **Go to Vercel:**
   - Visit: https://vercel.com/new
   - Sign in with GitHub

2. **Import Repository:**
   - Click "Import Project"
   - Search for: `gdp_gowth_prediction_model_frontend`
   - Click "Import"

3. **Configure Build Settings:**
   - Framework: Vite (auto-detected) ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅
   - Install Command: `npm install` ✅

4. **Add Environment Variables:**
   
   Click "Environment Variables" tab and add each one:
   
   | Name | Value |
   |------|-------|
   | `VITE_API_BASE_URL` | `https://your-backend.onrender.com` |
   | `VITE_FIREBASE_API_KEY` | Your Firebase API Key |
   | `VITE_FIREBASE_AUTH_DOMAIN` | `your-project.firebaseapp.com` |
   | `VITE_FIREBASE_PROJECT_ID` | Your Project ID |
   | `VITE_FIREBASE_STORAGE_BUCKET` | `your-project.appspot.com` |
   | `VITE_FIREBASE_MESSAGING_SENDER_ID` | Your Sender ID |
   | `VITE_FIREBASE_APP_ID` | Your App ID |

5. **Deploy:**
   - Click "Deploy" button
   - Wait 2-3 minutes
   - Done! 🎉

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to frontend directory
cd frontend

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Follow the prompts and add environment variables when asked
```

### Step 3: Configure Firebase

After deployment, you'll get a URL like: `https://your-project.vercel.app`

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Navigate to: **Authentication** → **Settings** → **Authorized domains**
4. Click "Add domain"
5. Add: `your-project.vercel.app`
6. Click "Save"

### Step 4: Test Your Deployment

Visit your Vercel URL and verify:

- [ ] Landing page loads correctly
- [ ] "Sign in with Google" button works
- [ ] After login, dashboard displays
- [ ] GDP prediction form works
- [ ] Scenario simulation works
- [ ] Charts render properly
- [ ] Data saves to Firestore (if implemented)
- [ ] Sign out works

### Step 5: Update Backend CORS (If Needed)

If API calls fail, update your backend CORS settings to allow your Vercel domain:

```python
# In your backend (app.py or similar)
from flask_cors import CORS

CORS(app, origins=[
    "http://localhost:5173",
    "https://your-project.vercel.app"  # Add this
])
```

## 🔄 Continuous Deployment

Vercel automatically redeploys when you push to GitHub:

```bash
# Make changes to your code
git add .
git commit -m "Your changes"
git push origin master

# Vercel automatically builds and deploys! ✨
```

## 📊 Monitor Your Deployment

### View Deployment Status
- Vercel Dashboard → Your Project → Deployments
- See build logs, runtime logs, and deployment history

### Check Build Logs
If deployment fails:
1. Go to Vercel Dashboard
2. Click on the failed deployment
3. View "Building" logs for errors
4. Fix issues and push again

## 🐛 Troubleshooting

### Build Fails with "Module not found"
```bash
# Ensure all dependencies are installed
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### Environment Variables Not Working
- Ensure all variables start with `VITE_`
- Redeploy after adding variables: Deployments → Latest → Redeploy

### Firebase Auth Not Working
- Check Firebase authorized domains includes your Vercel URL
- Verify environment variables are correct in Vercel
- Check browser console for specific errors

### API Calls Failing (CORS errors)
- Update backend CORS to include Vercel domain
- Verify `VITE_API_BASE_URL` is correct
- Check backend is running and accessible

## 🎯 Post-Deployment Tasks

- [ ] Share your live URL with team/users
- [ ] Set up custom domain (optional)
- [ ] Enable Vercel Analytics (optional)
- [ ] Configure monitoring/alerts
- [ ] Update documentation with live URL
- [ ] Test on mobile devices
- [ ] Run performance audit

## 📱 Custom Domain (Optional)

To add a custom domain:

1. Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `gdp-prediction.com`)
3. Update DNS records as instructed by Vercel
4. Add custom domain to Firebase authorized domains
5. Wait for DNS propagation (up to 48 hours)

## 🔐 Security Checklist

- [x] No API keys in source code
- [x] All secrets in environment variables
- [ ] Firebase security rules configured
- [ ] Backend CORS properly configured
- [x] HTTPS enabled (automatic on Vercel)

## 📞 Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Firebase Docs:** https://firebase.google.com/docs
- **Vite Docs:** https://vitejs.dev

## 🎉 Success Indicators

Your deployment is successful when:
- ✅ Build completes without errors
- ✅ Site loads at Vercel URL
- ✅ Authentication works
- ✅ API calls succeed
- ✅ All features functional

---

**Repository:** https://github.com/jay192005/gdp_gowth_prediction_model_frontend

**Status:** ✅ Ready for Deployment

**Next Step:** Go to https://vercel.com/new and import your repository!
