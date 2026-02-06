import React from 'react'
import background_banner from '../../assets/hero_banner.jpg'
import title from '../../assets/hero_title.png'
import play from '../../assets/play_Movie_icon.jpg'
import info from '../../assets/info_icon.jpg'
import styles from '../Home/Home.module.css'
import Layout from '../Layout/Layout'
import MoviesCards from '../MoviesCards/MoviesCards'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className= {styles.landing}>
        <img className= {styles.hero} src= {background_banner} alt="" />
        <div className={styles.hero_caption}>
          <img className = {styles.hero_title} src={title} alt="" />
          <p className= {styles.title}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis amet debitis praesentium, blanditiis, perspiciatis quisquam saepe pariatur dolor doloremque?</p>
          <div className={styles.hero_btn}>
            <button className={styles.btn1}><i class="fa-solid fa-play"></i> Play</button>
            <button className={styles.btn2}><i class="fa-solid fa-circle-info"></i> More Info</button>
          </div>
          <MoviesCards/>
        </div>
      </div>
      <div className={styles.more_Cards}>
          <MoviesCards title = {'Blockbuster Movies'} category = {'top_rated'}/>
          <MoviesCards title = {'Only On Netflix'} category = {'popular'}/>
          <MoviesCards title = {'Upcoming'} category = {'upcoming'}/>
          <MoviesCards title = {'Topics For You'} category = {'now_playing'}/>
      </div>
      <Footer/>
    </div>
  )
}
