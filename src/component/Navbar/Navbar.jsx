import React, { useEffect, useRef } from 'react'
import nav_logo from '../../assets/logo.png' 
import profImg from '../../assets/profile_img.png'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { logout } from '../../firbase'

export default function Navbar() {

  let navRef = useRef();
  useEffect(()=> {
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 80) {
        navRef.current.classList.add(styles.navAfterScroll);
      } else {
        navRef.current.classList.remove(styles.navAfterScroll)
      }
    });
  }, []);


  return (
    <div className= {styles.navbar} ref={navRef}>
      <div className= {styles.nav_L}>
        <div className="">
          <Link to={'/'}><img src = {nav_logo} className= {styles.icon} onClick={() => window.location.reload()} alt="" /></Link>
        </div>
        <ul className= {styles.ul}>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/TVShows'}><li>TV Shows</li></Link>
          <Link to={'/Movies'}><li>Movies</li></Link>
          <Link to={'/Popular'}><li>New & Popular</li></Link>
          <Link to={'/MyList'}><li>My List</li></Link>
          <Link to={'/MyLanguage'}><li>Brows by Language</li></Link>
        </ul>

      </div>
      <div className= {styles.nav_R}>
        <div className= {styles.searchBox}>
          <div className= {styles.row}>
            <input type="text" placeholder="Search for anythig" id="input-search" onblur= ""/>
            <div className= {styles.icons}>
                <li className= {styles.removeIcon}><i className="fa-solid fa-xmark"></i></li>
                <button><li className= {styles.searchIcon}><i className="fa-solid fa-magnifying-glass"></i></li></button>
            </div>
          </div>
          <div className= {styles.respondBox}>
          </div>
        </div>
        <li className= {styles.search_bell}><i className="fa-solid fa-bell"></i></li>
        <div className= {styles.profile}>
          <Link className= {styles.profile} to={'/UserProfile'}>
          <li><img className= {styles.prof} src= {profImg} alt="" /></li>
          <li className= {styles.drowpDown_icon}><i className="fa-solid fa-caret-down"></i> </li>
          </Link>
          <Link className={styles.signUp} to = {'/Login'} onClick={()=> {logout()}}>SignOut of Netflix</Link>
        </div>
          

      </div>
    </div>
  )
}
