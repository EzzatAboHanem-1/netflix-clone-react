import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { auth } from '../../firbase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Layout() {
  
    let navigate = useNavigate();
      useEffect(()=> {
        onAuthStateChanged(auth, async (user)=> {
          if(user) {
            console.log('Logged In');
            navigate('/');
          } else {
            console.log('Logged Out');
            navigate('/Login');
          }
        })
      }, []);


  return (
    <div>
      {/* <Navbar/> */}
      <Outlet></Outlet>
    </div>
  )
}
