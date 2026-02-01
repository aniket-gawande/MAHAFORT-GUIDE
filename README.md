# 🏰 MahaFort Smart Heritage Platform

> **Smart Urban-Heritage Management System for Maharashtra's Forts**  
> Built for La Trobe Innovation & Global Challenges (TIGC) Smart City Hackathon

![TIGC Smart City](https://img.shields.io/badge/TIGC-Smart%20City-orange)
![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![Prototype](https://img.shields.io/badge/Prototype-Sinhagad%20Fort-blue)

---

## 🎯 **Problem Statement**

Maharashtra's forts face:
- **Overcrowding** and safety incidents
- **Poor accessibility** planning
- **Emergency response delays**
- **Unregulated tourism** damaging heritage sites
- **No feedback loop** for local authorities

## 💡 **Our Solution**

A **data-driven, city-integrated digital platform** that provides:

1. **🚨 Emergency Response** - Instant access to guides, police & medical contacts
2. **📊 Crowd Management** - Real-time Low/Medium/High crowd advisory
3. **♿ Accessibility Planning** - Wheelchair access, elderly-friendly routes, steps count
4. **👨‍💼 Municipal Dashboard** - City authorities can manage crowd status
5. **📥 Data Export** - Download all fort details as PDF

---

## 🏗️ **Tech Stack**

- **Frontend**: React.js + Tailwind CSS + React Icons
- **Backend**: Node.js + Express.js
- **Database**: MongoDB + Mongoose
- **PDF Generation**: jsPDF
- **Maps**: Google Maps Embed (No API key needed!)

---

## 🚀 **Quick Start**

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)

### Installation

```bash
# Clone repository
git clone <your-repo-url>
cd MAHAFORT-GUIDE

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Setup Environment

Create `backend/.env`:
```env
MONGODB_URI=mongodb://localhost:27017/mahafort
PORT=5000
```

### Run Application

```bash
# Terminal 1: Start MongoDB (if local)
mongod

# Terminal 2: Seed database
cd backend
node seed.js

# Terminal 3: Start backend
cd backend
npm start

# Terminal 4: Start frontend
cd frontend
npm start
```

**Frontend**: http://localhost:3000  
**Backend**: http://localhost:5000

---

## 📱 **Features**

### For Visitors

✅ **Smart Fort Discovery**
- Search forts by name/location
- View crowd status (Low/Medium/High)
- See emergency contact count

✅ **Detailed Fort Information**
- History & description
- Trek routes with difficulty ratings
- Visit timings, entry fees
- Food & stay options
- Google Maps location

✅ **Safety Features**
- Real-time safety alerts
- Emergency help button (floating)
- 5 emergency contacts for Sinhagad:
  - 2 Guides
  - Police station
  - Medical center
  - Rescue team (108)

✅ **Accessibility Information**
- Wheelchair accessible: Yes/No
- Elderly friendly: Yes/No
- Steps count: 400
- Rest points: 5
- Alternative routes

✅ **Download Fort Details**
- Export all info as PDF
- Includes emergency contacts
- Offline access

### For Municipal Authorities

✅ **Admin Dashboard** (`/admin`)
- Password: `mahafort2026`
- **Crowd Management**:
  - View all forts
  - Update crowd status (Low/Medium/High)
- **Emergency Logs**:
  - View all emergency alert requests
  - Track contact type, location, timestamp

---

## 🎨 **Maharashtra Cultural Theming**

- 🎭 **Shivaji Maharaj** silhouette in hero
- 🚩 **Maratha Flag** (Bhagwa Zenda) decorative elements
- 👑 **Royal Seal** (Rajmudra) watermarks
- ⚔️ **Talwar** (sword) icons as dividers
- 🏰 **Fort Gateway** icons
- 🟠 **Saffron & Gold** color scheme
- 🔤 **Poppins** font for modern typography

---

## 📊 **TIGC Alignment**

| Smart City Goal | Our Implementation |
|----------------|-------------------|
| **Safety** | Emergency alert system with 5 contact types |
| **Sustainability** | Crowd advisory to prevent overcrowding |
| **Accessibility** | Detailed wheelchair/elderly-friendly info |
| **Governance** | Admin dashboard for municipal control |
| **Innovation** | Real-time crowd management + emergency tracking |

---

## 🗂️ **Project Structure**

```
MAHAFORT-GUIDE/
├── backend/
│   ├── models/
│   │   └── Fort.js (Smart City schema)
│   ├── routes/
│   │   ├── forts.js
│   │   ├── emergencyRoutes.js
│   │   └── adminRoutes.js
│   ├── server.js
│   └── seed.js
│
├── frontend/
│   ├── src/
│   │   ├── assets/svg/ (Maharashtra cultural assets)
│   │   ├── components/
│   │   │   ├── EmergencyButton.jsx
│   │   │   ├── CrowdStatusBadge.jsx
│   │   │   ├── DownloadButton.jsx
│   │   │   └── FortCard.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── FortDetails.jsx
│   │   │   └── Admin.jsx
│   │   └── App.js
│   └── package.json
```

---

## 🧪 **Testing**

### 1. Home Page
- See Shivaji Maharaj imagery
- View Smart City Features section
- See Sinhagad Fort with crowd badge

### 2. Fort Details
- Click Sinhagad Fort
- See safety alerts
- See accessibility info
- Click emergency button
- Download PDF

### 3. Admin Dashboard
- Navigate to `/admin`
- Login: `mahafort2026`
- Update crowd status
- View emergency logs

---

## 🎬 **Demo Video Script**

1. **Home Page** - Maharashtra theming + Smart City features
2. **Sinhagad Fort** - Crowd status + Safety alerts
3. **Emergency System** - Click emergency button, show contacts
4. **Accessibility** - Wheelchair info, steps count, rest points
5. **Download PDF** - Offline access demonstration
6. **Admin Dashboard** - Crowd management + Emergency logs

---

## 🏆 **Winning Points**

✅ Solves real urban-heritage problem  
✅ Smart City integration (safety, sustainability, governance)  
✅ Scalable architecture (Sinhagad prototype → all forts)  
✅ Cultural preservation (Maharashtra theming)  
✅ User-centric design (emergency contacts, accessibility)  
✅ Municipal value (admin dashboard)  
✅ Sustainable tourism (crowd management)

---

## 📝 **Future Enhancements**

- [ ] IoT sensors for real-time crowd detection
- [ ] Weather API integration for monsoon warnings
- [ ] User authentication & trip planner
- [ ] Mobile app (React Native)
- [ ] Multi-language support (Marathi, Hindi, English)
- [ ] Expand to all 350+ Maharashtra forts

---

## 👥 **Team**

**Team A4**  
Building smart solutions for Maharashtra's heritage

---

## 📄 **License**

MIT License - Built for TIGC Smart City Hackathon 2026

---

## 🙏 **Acknowledgments**

- La Trobe Innovation & Global Challenges (TIGC)
- Maharashtra Tourism
- Chhatrapati Shivaji Maharaj's legacy

---

**🚀 Jay Maharashtra! 🚩**

---

## 📞 **Contact**

For queries about this project, please contact Team A4.

---

**Built with ❤️ for Maharashtra's Heritage**
