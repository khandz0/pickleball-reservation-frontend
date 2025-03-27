# 🏓 Pickleball Reservation System

This is a full-stack web application that allows users to register, search for nearby pickleball courts using Google Maps, make reservations, and allows admin users to manage users and bookings.

It includes:

- A backend RESTful API built with Node.js, Express, and PostgreSQL
- A frontend web app built with React
- Integration with Google Maps, Places, and Geocoding APIs
- Deployment-ready setup for both frontend and backend

---

## 🌐 Live Deployment

- **Frontend**: [https://your-frontend.vercel.app](https://your-frontend.vercel.app)
- **Backend**: [https://pickleball-reservation.onrender.com](https://pickleball-reservation.onrender.com)

---

## 🔒 Features

### ✅ General User

- Register and log in
- Search courts by address or location (via Google Maps API)
- View, create, update, and delete your own reservations
- Prevent double-booking of the same court/time

### 👑 Admin User

- Promote any user to admin via SQL
- View all users and reservations
- Delete any reservation or user
- API protected with JWT-based role-checking

---

## 🧱 Backend Overview

See full backend documentation in `README.md` and `ADMIN_MANUAL.md`.

### Backend Tech Stack

- Node.js + Express
- PostgreSQL
- JWT authentication
- Google Maps, Places, and Geocoding APIs
- Deployed via Render
  Backend Repo: [pickleball-reservation](https://github.com/khandz0/pickleball-reservation)

---

## 🧱 Frontend Overview

The frontend is built using modern web technologies and follows best practices for React development:

### Core Technologies

- **React 18** - Modern UI library for building user interfaces
- **TypeScript** - For type-safe JavaScript development
- **React Router v6** - For client-side routing and navigation
- **Tailwind CSS** - For utility-first CSS styling

### Project Structure

```
src/
├── assets/           # Static assets (images, icons, fonts)
│   ├── images/      # Image files
│   ├── icons/       # Icon files
│   └── fonts/       # Custom fonts
├── components/      # Reusable React components
│   ├── Login.tsx    # Login page component
│   └── Home.tsx     # Home page component
├── App.tsx          # Main application component
├── index.tsx        # Application entry point
└── index.css        # Global styles and Tailwind directives
```

### Key Features

- Modern, responsive UI design
- Type-safe development with TypeScript
- Component-based architecture
- Clean and maintainable code structure
- Efficient asset management
- Environment-based configuration

### Development Tools

- **Create React App** - For project scaffolding and development
- **ESLint** - For code linting and style enforcement
- **TypeScript** - For static type checking
- **Tailwind CSS** - For responsive and modern styling

### Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

The application will be available at `http://localhost:3000` in development mode.

---

## ⚙️ Development Setup

### 🔧 Backend (API)

```bash
git clone https://github.com/khandz0/pickleball-reservation.git
cd pickleball-reservation
npm install
npm run dev
```

### Backend `.env` example:

```env
PORT=5001
DB_USER=your_db_user
DB_PASS=your_db_password
DB_HOST=localhost
DB_NAME=pickleball_reservations
JWT_SECRET=your_jwt_secret
GOOGLE_MAPS_API_KEY=your_google_maps_key
```

---

### 🖥 Frontend (React)

```bash
git clone https://github.com/khandz0/pickleball-reservation-frontend.git
cd pickleball-reservation-frontend
npm install
npm start
```

### Frontend `.env` example:

```env
REACT_APP_API_URL=https://pickleball-reservation.onrender.com
```

---

## 🧪 API Examples

### Register

```bash
curl -X POST https://pickleball-reservation.onrender.com/auth/register   -H "Content-Type: application/json"   -d '{"name":"Alice","email":"alice@example.com","password":"secret"}'
```

### Make a Reservation

```bash
curl -X POST https://pickleball-reservation.onrender.com/reservations   -H "Authorization: Bearer YOUR_TOKEN"   -H "Content-Type: application/json"   -d '{
    "court_name": "Central Park Court",
    "court_address": "123 Main St, NY",
    "reservation_time": "2025-04-01T10:00:00Z"
  }'
```

---

## 👨‍💼 Admin Manual

See `ADMIN_MANUAL.md` for:

- How to promote users to admin
- Admin-only endpoints
- Example curl requests for admin access

---

## 📦 Deployment Guide

### Backend

- Hosted on [Render](https://render.com)
- Use External DB URL to connect locally, Internal DB URL for deployed app
- Add `.env` config in Render dashboard

### Frontend

- Hosted on [Vercel](https://vercel.com)
- Connect your GitHub frontend repo
- Add `REACT_APP_API_URL` in Vercel environment settings

---

## 👨‍💻 Author

Built by Thien Khang Kieu as a full-stack portfolio project.
