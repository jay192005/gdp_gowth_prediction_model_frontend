# GDP Growth Prediction Model - Frontend

A React + Vite application for GDP growth prediction and scenario simulation with Firebase authentication.

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jay192005/gdp_gowth_prediction_model_frontend)

## 📋 Prerequisites

- Node.js 18+ 
- npm or pnpm
- Firebase project (for authentication)
- Backend API deployed (Railway/Render)

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 6
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + shadcn/ui
- **Authentication**: Firebase Auth
- **Charts**: Recharts
- **State Management**: React Context API

## 📦 Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.development
```

## 🔧 Environment Variables

Create `.env.production` for Vercel deployment:

```env
# Backend API URL
VITE_API_BASE_URL=https://your-backend-url.onrender.com

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🏃 Local Development

```bash
# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 Vercel Deployment

### Option 1: Deploy via Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/new)
2. Import this repository
3. Configure environment variables in Vercel settings
4. Deploy!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Vercel Configuration

The project includes `vercel.json` with:
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing support
- Asset caching headers

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── auth/          # Authentication components
│   │   │   ├── dashboard.tsx  # Main dashboard
│   │   │   ├── growth-calculator.tsx
│   │   │   ├── landing-page.tsx
│   │   │   └── ui/            # Reusable UI components
│   │   └── App.tsx
│   ├── config/
│   │   └── firebase.ts        # Firebase configuration
│   ├── contexts/
│   │   └── AuthContext.tsx    # Auth state management
│   ├── services/
│   │   └── api.ts             # API client
│   └── styles/                # Global styles
├── public/
├── vercel.json                # Vercel configuration
├── vite.config.ts             # Vite configuration
└── package.json
```

## 🔑 Features

- 🔐 Firebase Authentication (Google Sign-In)
- 📊 GDP Growth Prediction Dashboard
- 🎯 Scenario Simulation
- 📈 Interactive Charts
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS

## 🔗 API Integration

The frontend connects to the backend API for:
- GDP predictions
- Scenario simulations
- Historical data retrieval

Ensure your backend is deployed and the `VITE_API_BASE_URL` is correctly set.

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Environment Variables Not Loading

- Ensure variables start with `VITE_`
- Restart dev server after changing `.env` files
- In Vercel, add variables in Project Settings → Environment Variables

### Firebase Auth Issues

- Verify Firebase config in Vercel environment variables
- Check Firebase Console for authorized domains
- Add your Vercel domain to Firebase authorized domains

## 📝 License

MIT

## 👤 Author

Jay Gavali

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Ready for Vercel deployment!** 🚀
