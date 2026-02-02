# 🚀 Quick Setup Guide for Developers

## For Your Friend to Get Started

### Step 1: Clone the Repo
```bash
git clone https://github.com/YOUR_USERNAME/MAHAFORT-GUIDE.git
cd MAHAFORT-GUIDE
```

### Step 2: Install & Run Frontend
```bash
cd frontend
npm install
npm start
```

**That's it!** App opens at `http://localhost:3000` 🎉

---

## What's Already Done ✅

- 42+ Maharashtra forts with full details
- Stunning UI with vibrant gradients
- Search & filter by district/difficulty
- Bahirji chatbot (बहिर्जी नाईक)
- Statistics dashboard
- Sinhagad complete itinerary
- MahaFort logo & branding
- Responsive design

---

## Quick Commands

```bash
# Start frontend only (recommended)
cd frontend && npm start

# Start backend (optional)
cd backend && npm start

# Build for production
cd frontend && npm run build

# Clear cache if issues
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## Key Files to Edit

1. **Add/Edit Forts**: `frontend/src/data/staticForts.js`
2. **Update Chatbot**: `frontend/src/components/BahirjiChatbot.jsx`
3. **Change UI**: `frontend/src/pages/Home.jsx`
4. **Navbar**: `frontend/src/components/Navbar.jsx`

---

## Troubleshooting

**Port 3000 busy?**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

**Dependencies error?**
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

---

## 🎯 Ready to Code!

Check the main `README.md` for full documentation.

**Jai Shivaji! 🏰**
