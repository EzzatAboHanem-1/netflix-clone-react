Netflix Clone (React)

A Netflix-inspired Front-End web application built with React that replicates the core look and feel of Netflix. This project emphasizes clean UI, smooth UX, and scalable architecture, making it a strong portfolio-level project to demonstrate real-world React skills.

Disclaimer: This project is for educational purposes only and is not affiliated with Netflix.

Project Overview

The goal of this project is to build a simplified Netflix clone where users can:

Browse movies and TV shows

Explore categories and trending content

View movie/TV details

Watch trailers

The project emphasizes:

Component-based architecture

Reusable UI components

Modern React development practices

Clean and scalable folder structure

Features
Browsing & Discovery

Netflix-inspired UI/UX

Browse Movies & TV Shows

Popular & Trending sections

Fully responsive design

Search & Details

Search for Movies & TV Shows

View Title, Overview, Rating, Release Date

Watch trailers (YouTube integration)

User Features

My List (Watchlist)

Firebase Authentication for user login/signup

Performance & UX

Fast performance with Vite

Smooth animations and transitions

Tech Stack

Frontend: React.js, HTML5, CSS3, JavaScript (ES6+)

Routing: React Router

Styling: Bootstrap

HTTP Requests: Axios

Authentication: Firebase

API: TMDB API

Build Tool: Vite

Project Structure
src/
│── assets/          # Images, icons
│── components/      # Reusable UI components
│   │── Navbar/
│   │── Footer/
│   │── Loader/
│   │── MoviesCards/
│── pages/           # Application pages (Routes)
│   │── Home/
│   │── Movies/
│   │── TVShows/
│   │── Popular/
│   │── MyList/
│   │── Login/
│   │── UserProfile/
│   │── NotFound/
│── layout/
│   │── MainLayout.jsx
│── services/
│   │── api.js        # Axios instance
│   │── requests.js  # TMDB endpoints
│── context/
│   │── AuthContext.jsx
│   │── LanguageContext.jsx
│── App.jsx
│── main.jsx

Installation & Run Locally

Clone the repository

git clone https://github.com/username/netflix-clone-react.git


Navigate to the project folder

cd netflix-clone-react


Install dependencies

npm install


Create a .env file in the root directory:

VITE_TMDB_API_KEY=your_api_key_here


Start the development server

npm run dev

API Used

The Movie Database (TMDB API) – fetch movies and TV shows data.
https://www.themoviedb.org/

Future Enhancements

Dedicated Movie & TV Show Details Pages

Advanced Search functionality

Continue Watching: Resume playback from last watched minute per user

Dark / Light Mode toggle

Performance optimizations (Lazy Loading & Code Splitting)

Developer

Ezzat Abo Hanem – Front-End Developer (React)

GitHub: https://github.com/EzzatAboHanem-1

LinkedIn: https://linkedin.com/in/ezzat-abo-hanem-455a1b353

If you like this project, don’t forget to give it a star on GitHub!
