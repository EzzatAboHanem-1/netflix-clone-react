import React, { useEffect, useState } from 'react'
import back_logo from '../../assets/back_arrow_icon.png';
import style from '../Player/Player.module.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Player() {

  let {id} = useParams();
  let [APITrailer, SetAPITrailer] = useState({
    name: '',
    key: '',
    published_at: '',
    type: '',
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTliZmNlYTkzOTY1ZTIyMmQ2OWRjNjM0OGJjZDI3YiIsIm5iZiI6MTc2NTQ3NDAxOC44NDE5OTk4LCJzdWIiOiI2OTNhZmVlMjFiM2ZjY2M1YmFmNjIxYTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oC1FXv-zYcNXiwWUAbEA-0N3pOb7mIqU2Qmsrr9dZwc'
    }
  };

  function getTrailer() {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then((response) =>  SetAPITrailer(response?.data.results[0]))
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    getTrailer();
  },[])
  
  let navigate = useNavigate();

  return (
    <div className={style.trailer_player}>
      <img src={back_logo} alt="" onClick={()=> navigate('/')}/>
      <iframe src={`https://www.youtube.com/embed/${APITrailer.key}`} width={'88%'} height={'90%'} title='trailer' allowFullScreen frameborder="0"></iframe>
      <div className={style.trailer_info}>
        <p>{APITrailer.published_at.slice(0, 10)}</p>
        <p>{APITrailer.name}</p>
        <p>{APITrailer.type}</p>
      </div>
    </div>
  )
}
