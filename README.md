# 🎬 Netflix Clone (React)

A Netflix-inspired front-end web application built with React that replicates the core experience of Netflix. This project focuses on building a real-world UI, scalable architecture, and modern React development practices.

⚠️ Disclaimer: This project is for educational purposes only and is not affiliated with Netflix.

## 🚀 Live Demo
[Add your live demo link here]

## 📌 Project Overview

The goal of this project is to build a simplified Netflix-like platform where users can browse movies and TV shows, explore categories and trending content, view detailed information about each title, watch trailers, and manage a personal watchlist.

This project emphasizes:
- Component-based architecture  
- Reusable UI components  
- Clean and scalable folder structure  
- Modern React best practices  

## ✨ Features

### 🎥 Browsing & Discovery
- Netflix-inspired UI/UX  
- Browse Movies & TV Shows  
- Trending & Popular sections  
- Fully responsive design (mobile-first)  

### 🔍 Search & Details
- Search for movies & TV shows  
- View title details (overview, rating, release date)  
- Watch trailers (YouTube integration)  

### 👤 User Features
- Firebase Authentication (Login / Signup)  
- My List (Watchlist system)  

### ⚡ Performance & UX
- Fast performance using Vite  
- Smooth animations & transitions  
- Lazy loading-ready structure  

## 🛠️ Tech Stack

Frontend: React.js, HTML5, CSS3, JavaScript (ES6+)  
Routing: React Router  
Styling: Tailwind CSS  
HTTP Requests: Axios  
Authentication: Firebase  
API: TMDB API  
Build Tool: Vite  

## 📁 Project Structure

src/
│── assets/          # Images, icons  
│── components/      # Reusable UI components  
│   │── Navbar/  
│   │── Footer/  
│   │── Loader/  
│   │── MoviesCards/  
│  
│── pages/           # Application pages (routes)  
│   │── Home/  
│   │── Movies/  
│   │── TVShows/  
│   │── Popular/  
│   │── MyList/  
│   │── Login/  
│   │── UserProfile/  
│   │── NotFound/  
│  
│── layout/  
│   │── MainLayout.jsx  
│  
│── services/  
│   │── api.js  
│   │── requests.js  
│  
│── context/  
│   │── AuthContext.jsx  
│   │── LanguageContext.jsx  
│  
│── App.jsx  
│── main.jsx  

## ⚙️ Installation & Setup

git clone https://github.com/username/netflix-clone-react.git  
cd netflix-clone-react  
npm install  

Create .env file:
VITE_TMDB_API_KEY=your_api_key_here  

Run project:
npm run dev  

## 🎬 API Reference

TMDB API: https://www.themoviedb.org/  
Used for fetching movies, TV shows, and trending data.

## 🚀 Future Improvements

- Movie & TV details page enhancements  
- Advanced search with filters  
- Continue Watching feature  
- Dark / Light mode toggle  
- Performance optimization (code splitting & lazy loading)

## 👨‍💻 Developer

Ezzat Abo Hanem – Front-End Developer (React)

GitHub: https://github.com/EzzatAboHanem-1  
LinkedIn: https://linkedin.com/in/ezzat-abo-hanem-455a1b353  

## ⭐ If you like this project
Give it a ⭐ on GitHub and feel free to contribute!
