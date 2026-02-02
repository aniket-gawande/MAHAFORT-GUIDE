# 🏰 MahaFort - Maharashtra Fort Guide

A stunning, professional web application showcasing 42+ Maharashtra forts with comprehensive information, interactive chatbot, and beautiful UI/UX.

![MahaFort Banner](https://img.shields.io/badge/MahaFort-Heritage%20Platform-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-16+-green?style=for-the-badge&logo=node.js)

---

## 🌟 Features

### ✨ **Stunning UI/UX**
- Vibrant gradient designs with Marathi cultural theme
- Animated backgrounds and smooth transitions
- Premium fort cards with hover effects
- Equal-sized hero containers with dramatic visuals
- Responsive design for all devices

### 🏰 **Comprehensive Fort Database**
- **42+ Maharashtra Forts** with detailed information
- Fort details: Location, difficulty, altitude, timings, entry fees
- Historical significance and trekking routes
- Search and filter by district and difficulty
- Complete Sinhagad Fort itinerary

### 🤖 **Bahirji Chatbot**
- Interactive AI assistant named "बहिर्जी नाईक" (Bahirji Naik)
- Answers questions about forts, trekking, safety tips
- Knowledge base covering major forts like Sinhagad, Raigad, Pratapgad
- Beautiful chat interface with Marathi branding

### 📊 **Statistics Dashboard**
- Total forts count
- Districts covered
- Easy trek recommendations
- Average ratings

---

## 🚀 Quick Start Guide

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)

### 📥 Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/MAHAFORT-GUIDE.git
cd MAHAFORT-GUIDE
```

---

## 🎯 Running the Application

### Option 1: Frontend Only (Recommended for Quick Start)

The frontend works standalone with static fort data!

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (first time only)
npm install

# Start the development server
npm start
```

**The app will open automatically at:** `http://localhost:3000`

---

### Option 2: Full Stack (Frontend + Backend)

If you want to run both frontend and backend:

#### **Terminal 1 - Backend Server**
```bash
# Navigate to backend directory
cd backend

# Install dependencies (first time only)
npm install

# Start backend server
npm start
```
Backend runs on: `http://localhost:5000`

#### **Terminal 2 - Frontend Server**
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (first time only)
npm install

# Start frontend server
npm start
```
Frontend runs on: `http://localhost:3000`

---

## 📁 Project Structure

```
MAHAFORT-GUIDE/
├── frontend/                 # React frontend application
│   ├── public/              # Static files
│   │   └── index.html       # HTML template
│   ├── src/
│   │   ├── assets/          # Images (shivaji.jpg, bahirji.jpg, mahalogo.jpeg)
│   │   ├── components/      # React components
│   │   │   ├── Navbar.jsx           # Navigation bar with logo
│   │   │   ├── FortCard.jsx         # Premium fort card component
│   │   │   └── BahirjiChatbot.jsx   # AI chatbot component
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx             # Main landing page
│   │   │   └── SinhagadItinerary.jsx # Sinhagad fort details
│   │   ├── data/
│   │   │   └── staticForts.js       # 42+ fort database
│   │   ├── services/        # API services
│   │   └── App.js           # Main app component
│   └── package.json         # Frontend dependencies
│
├── backend/                 # Node.js backend (optional)
│   ├── server.js           # Express server
│   ├── data/               # Fort data files
│   └── package.json        # Backend dependencies
│
└── README.md               # This file
```

---

## 🎨 Key Technologies

### Frontend
- **React 18** - UI framework
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

### Backend (Optional)
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database (if configured)

---

## 🛠️ Development Guide

### Making Changes

1. **Edit Fort Data**: Modify `frontend/src/data/staticForts.js`
2. **Update UI**: Edit components in `frontend/src/components/`
3. **Add Pages**: Create new pages in `frontend/src/pages/`
4. **Styling**: Use Tailwind CSS classes

### Adding New Forts

Edit `frontend/src/data/staticForts.js`:

```javascript
{
  _id: 'fort-id',
  name: 'Fort Name',
  location: { district: 'District Name' },
  difficulty: 'Easy/Moderate/Hard',
  description: 'Fort description...',
  images: ['image-url'],
  rating: 4.5,
  bestTimeToVisit: 'October to March',
  entryFee: 'Free',
  timings: '6:00 AM - 6:00 PM',
  altitude: '1000 m',
  historicalSignificance: 'Historical info...'
}
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Kill process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9
```

### Dependencies Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Image Not Loading
- Make sure images are in `frontend/src/assets/` folder
- Check import paths are correct
- Restart development server

---

## 📦 Building for Production

```bash
cd frontend
npm run build
```

This creates an optimized production build in the `build/` folder.

---

## 🌐 Deployment

### Deploy to GitHub Pages

```bash
cd frontend
npm install gh-pages --save-dev
npm run deploy
```

### Deploy to Vercel/Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

---

## 🎯 Features Checklist

- ✅ 42+ Maharashtra forts database
- ✅ Vibrant UI with Marathi theme
- ✅ Search and filter functionality
- ✅ Statistics dashboard
- ✅ Bahirji AI chatbot
- ✅ Sinhagad complete itinerary
- ✅ Premium fort cards
- ✅ Responsive design
- ✅ MahaFort logo and branding

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 Notes for Developers

### Important Files to Know

1. **`frontend/src/data/staticForts.js`** - Main fort database
2. **`frontend/src/components/BahirjiChatbot.jsx`** - Chatbot logic
3. **`frontend/src/pages/Home.jsx`** - Main landing page
4. **`frontend/src/components/Navbar.jsx`** - Navigation bar

### Chatbot Knowledge Base

The Bahirji chatbot has built-in knowledge about:
- Sinhagad, Raigad, Pratapgad forts
- Trekking tips and safety
- Best time to visit
- Fort recommendations by difficulty

To add more knowledge, edit the `fortKnowledge` object in `BahirjiChatbot.jsx`.

---

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#ea580c), Red (#b91c1c)
- **Accent**: Yellow (#facc15)
- **Gradients**: Multi-stop vibrant gradients
- **Text**: White on colored backgrounds, Gray-800 on light

### Typography
- **Headings**: Font-black, large sizes (text-5xl to text-7xl)
- **Body**: Font-medium to font-bold
- **Marathi Text**: Clear, large, with drop-shadows

---

## 📧 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the code comments
3. Check browser console for errors
4. Create an issue on GitHub

---

## 📄 License

This project is open source and available for educational purposes.

---

## 🙏 Acknowledgments

- Chhatrapati Shivaji Maharaj - Inspiration
- Bahirji Naik - Maratha warrior and spy
- Maharashtra Tourism - Fort information
- React Community - Amazing framework

---

## 🚀 Happy Coding!

**Made with ❤️ for Maharashtra's Heritage**

🏰 **Jai Shivaji! Jai Bhavani!** 🚩
