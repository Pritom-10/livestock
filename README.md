# 🐄 Pineapple QurbaniHat – Livestock Booking Platform

A modern livestock marketplace where users can explore animals for Qurbani, view detailed information, and book animals after authentication. Built with Next.js and a clean responsive UI, focusing on real-world booking flow and secure user experience.

---

## 🌐 Live Demo
https://livestock-gules.vercel.app

---

## 📌 Project Purpose
This project is developed as part of **Assignment Category-A8**.  
It demonstrates a full-stack-like frontend application with authentication, protected routes, dynamic routing, and a clean marketplace UI for livestock booking.

---

## 🚀 Key Features

### 🏠 General
- Fully responsive design (mobile, tablet, desktop)
- Modern UI with unique marketplace layout
- SPA routing with Next.js
- Error-free page reload handling on all routes

### 🐄 Animal Marketplace
- Browse livestock animals (cow, goat, etc.)
- View detailed animal information
- Sort animals by price
- Featured animals section on homepage
- Extra sections:
  - Qurbani Tips
  - Top Breeds

### 📄 Animal Details Page
- Full animal description view
- Booking form (Name, Email, Phone, Address)
- Requires authentication to book
- Success toast on booking submission
- Form resets after submission (no persistent storage)

### 🔐 Authentication System
- Email/password login
- Google social login
- User registration system
- Protected routes for authenticated users
- Redirect after login/logout

### 👤 User Profile System
- My Profile page (name, email, photo)
- Update profile information (name + image)
- Uses Better Auth update API

### 🔔 UI/UX Enhancements
- Toast notifications for success/error messages
- Loading states during data fetch
- Custom Not Found page
- Smooth animations (using Lottie / animation library)

---

## 🧭 Routes Structure

### Public Routes
- `/` → Home Page
- `/animals` → All Animals Page
- `/login` → Login Page
- `/register` → Register Page

### Private Routes
- `/details-page` → Animal Details Page
- `/my-profile` → User Profile Page

---

## 🧩 Technologies Used

### Frontend
- Next.js (App Router)
- React.js
- Tailwind CSS

### Authentication
- Better Auth

### UI & UX
- React Icons
- React Toastify (or any toast library)
- Lottie / Animation Library (Animate.css / React Spring / Lottie)

### Deployment
- Vercel / Render

---

## 📦 NPM Packages Used

- `next`
- `react`
- `react-dom`
- `tailwindcss`
- `better-auth`
- `react-icons`
- `react-toastify`
- `lottie-react` (or animation library used)

---

## ⚙️ Environment Variables

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_API_URL=your_api_url
BETTER_AUTH_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

```
---
## Installation
Clone the repository:

```
git clone [https://github.com/your-username/pineapple-qurbanihat.git](https://github.com/your-username/pineapple-qurbanihat.git)
```
** Install dependencies:

```
npm install
```
** Start the development server:

```
npm run dev
```
---
 ## Author

 ** Pritom Barua Shiro ** 


