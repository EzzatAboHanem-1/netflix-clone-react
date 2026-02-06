import React, { useRef, useState } from 'react'
import cardsData from '../../assets/Cards/Cards_data'
import style from '../MoviesCards/MoviesCards.module.css'
import { useEffect } from 'react';
import EventHandler from './../../../node_modules/bootstrap/js/src/dom/event-handler';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MoviesCards({title, category}) {

    let [Movies, SetMovies] = useState([]);

    let cardRef = useRef();

    function handleWheel(event) {
      event.preventDefault();
      cardRef.current.scrollLeft += event.deltaY;
    }

    //get Movies API
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTliZmNlYTkzOTY1ZTIyMmQ2OWRjNjM0OGJjZDI3YiIsIm5iZiI6MTc2NTQ3NDAxOC44NDE5OTk4LCJzdWIiOiI2OTNhZmVlMjFiM2ZjY2M1YmFmNjIxYTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oC1FXv-zYcNXiwWUAbEA-0N3pOb7mIqU2Qmsrr9dZwc'
      }
    };

    function get_MoviesAPI() {
      axios.get(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
      .then((response) => {
        SetMovies(response.data.results);
      })
      .catch((error) => console.log(error))
    }
    useEffect(() => {
      get_MoviesAPI();
      cardRef.current.addEventListener('wheel', handleWheel);
    },[])


  return (
    <div className= {style.cards_section}>
      <h2 className={style.card_Heading}>{title?title:'Popular On Netflix'}</h2>
      <div className={style.card_list} ref={cardRef}>
        {Movies?.map((card, index) => {
          return <Link to = {`/Player/${card.id}`} className={style.card} key={index}>
            <img className={style.image} src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="" />
            <p>{card?.title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}
