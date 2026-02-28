# ⚡ Quick Deploy Checklist - Fix "Unable to connect to server"

## 🔴 Problem
Frontend shows: "Unable to connect to the server. Please check your connection and try again."

## ✅ Solution (5 Steps)

### Step 1: Get Render Backend URL
1. Go to https://render.com/dashboard
2. Find your backend service
3. Copy the URL (e.g., `https://gdp-backend-abc123.onrender.com`)
4. Test it: Open URL in browser → Should show JSON

### Step 2: Set Environment Variable in Vercel
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Click **"Add New"**
5. Add:
   ```
   Name: VITE_API_BASE_URL
   Value: https://your-render-backend-url.onrender.com
   Environment: ✅ Production ✅ Preview ✅ Development
   ```
6. Click **"Save"**

### Step 3: Redeploy
1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**
4. Wait for build to complete

### Step 4: Verify
1. Open your Vercel app URL
2. Press F12 → Console tab
3. Look for: `API Base URL: https://your-backend.onrender.com`
4. Should NOT show `undefined` or `localhost`

### Step 5: Test
1. Select a country from dropdown
2. Should load historical data
3. Try scenario simulation
4. Should work without errors

---

## 🚨 Still Not Working?

### Check 1: Backend is Running
```bash
curl https://your-backend.onrender.com/
```
Should return JSON. If not, backend is down.

### Check 2: CORS Configuration
If you see CORS error in console:
1. Update backend `app_scenario.py`
2. Add your Vercel URL to allowed origins
3. Redeploy backend

### Check 3: Environment Variable
In browser console:
```javascript
console.log(import.meta.env.VITE_API_BASE_URL);
```
Should show your Render URL.

---

## 📋 Environment Variables Needed

### Required:
- `VITE_API_BASE_URL` - Your Render backend URL

### Optional (for Firebase):
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

---

## ✅ Success Indicators

- ✅ No "Unable to connect" error
- ✅ Country dropdown has real data
- ✅ Historical charts display
- ✅ Scenario simulation works
- ✅ No CORS errors in console

---

**That's it! Your app should now work perfectly.** 🎉
