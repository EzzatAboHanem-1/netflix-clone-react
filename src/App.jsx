import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import TvShows from './component/TVShows/TVShows';
import Home from './component/Home/Home';
import Movies from './component/Movies/Movies';
import Popular from './component/Popular/Popular';
import MyList from './component/MyList/MyList';
import MyLanguage from './component/MyLanguage/MyLanguage';
import NotFound from './component/NotFound/NotFound';
import Layout from './component/Layout/Layout'
import UserProfile from './component/UserProfile/UserProfile';
import Login from './component/Login/Login';
import Player from './component/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firbase';
import { ToastContainer, toast } from 'react-toastify'; 


function App() {


  let routs = createBrowserRouter([
    {path: '', element: <Layout></Layout>, children: [
      {path: '', element: <Home/>},
      {path: 'TVShows', element: <TvShows/>},
      {path: 'Movies', element: <Movies/>},
      {path: 'Popular', element: <Popular/>},
      {path: 'MyList', element: <MyList/>},
      {path: 'MyLanguage', element: <MyLanguage/>},
      {path: 'UserProfile', element: <UserProfile/>},
      {path: 'Login', element: <Login/>},
      {path: 'Player/:id', element: <Player/>},
      {path: '*', element: <NotFound/>}
    ]}
  ])
  return (
    <>
      <ToastContainer theme='dark'/>
      <RouterProvider router={routs}></RouterProvider>
    </>
  )
}

export default App
