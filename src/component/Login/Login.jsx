import React, { useState } from 'react'
import logo from '../../assets/logo.png';
import style from '../Login/Login.module.css';
import bgImage from '../../assets/login_bg.jpg';
import { Link } from 'react-router-dom';
import {signin, signup} from '../../firbase';
import loadingSpinner from '../../assets/netflix_spinner.gif';
import Loader from './../Loader/Loader';

export default function Login() {


  
  //
  let [singIn, setSignIn] = useState('Sign In');
  let [singUp, setSignUp] = useState('Sign Up');
  //
  let [Name, SetName] = useState();
  let [Email, SetEmail] = useState();
  let [Password, Setpassword] = useState();
  //
  let [Loading, SetLoading] = useState(false);

  async function authentication(event) {
    event.preventDefault();
    SetLoading(true);
    if(singIn == 'Sign In') {
      await signin(Email, Password);
    } else {
      await signup(Name, Email, Password);
    }
    SetLoading(false);
  }

  function hanldleAuthontication() {
    setSignIn(singUp);
    setSignUp(singIn)
  }
  return (
    <div className={style.login_page}>
      {
      Loading? 
      <div className= {style.loader_parent}>
        <div className={style.loading_spinner}><Loader ></Loader></div>
      </div>
      : null
      }
      <Link><img src={logo} alt="" className={style.login_logo}/></Link>
      <img src= {bgImage} alt="" className={style.bgImg}/>
      <div className={style.login_form}>
        <div className={style.title}>
          <p>{singIn}</p>
        </div>
        <div className={style.authontication_form}>
          {singIn == 'Sign Up'? <input value={Name} onChange = {(e) => SetName(e.target.value)} type="text" placeholder='Your name' />: null}
          <input value={Email} onChange={(e) => SetEmail(e.target.value)} type="email" placeholder='Email' />
          <input value={Password} onChange={(e) => Setpassword(e.target.value)} type="password" placeholder='Password' />
          {singIn == 'Sign Up'? <button type='submit' onClick={(e) => {authentication(e)}} className="submit">{singIn}</button>: <button onClick={(e) => {authentication(e)}} className="submit">{singIn}</button>}
        </div>
        <div className={style.authontication_help}>
          <div className={style.remember}>
            <input type="checkbox" name="" id="remember" className={style.checkBox}/>
            <label htmlFor="remember">Remember Me</label>
          </div>
          <p>Need Help?</p>
        </div>
        <div className= {style.signup_signin_switch}>
          <p className={style.first_child}>New to Design Flix? <span onClick={() => hanldleAuthontication()}>{singUp} now</span>.</p>
          <p className={style.second_child}>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
        </div>
      </div>
    </div>
  )
}
