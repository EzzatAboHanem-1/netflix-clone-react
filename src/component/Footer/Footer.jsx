import React from 'react'
import facebookIcon from '../../assets/facebook_icon.png';
import youtubeIcon from '../../assets/youtube_icon.png';
import twitterIcon from '../../assets/twitter_icon.png';
import instagramIcon from '../../assets/instagram_icon.png';
import style from '../Footer/Footer.module.css';

export default function Footer() {
  return (
    <div className= {style.footer}>
      <div className={style.icons}>
        <img src={youtubeIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={facebookIcon} alt="" />
      </div>
      <ul className={style.footer_links}>
        <li>Audio Discription</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investors Relations</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preference</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <div className={style.copy_right_text}>
        <i class="fa-regular fa-copyright"></i>
        <p>1997-2025 Netflix</p>
      </div>
    </div>
  )
}
