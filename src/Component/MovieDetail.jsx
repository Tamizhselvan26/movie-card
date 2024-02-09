import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from "axios";

export default function MovieDetail() {
    const { id } = useParams();
  
    const [movie, setMovie] = useState([]);

    useEffect (() => {
        loadUser()
    }, [])
    
    let loadUser = async () => {
        try{
            let product = await axios.get("http://localhost:4000/movie/getbyid/${id}")
       setMovie(product.data.movie)
        
        }catch(error){
            console.log(error)
        } 
    }
  
      const ratingStyles = {
        color: movie.rating >= 8.5 ? "green" : "red",
      };
    
      const navigate = useNavigate();
  
    return (
      <div>
        <iframe
          width="100%"
          height="900px"
          src={movie.trailer}
          title={movie.name}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
  
        <div className="movie-detail-container">
          <div className="movie-spec">
            <h2 className="movie-name">{movie.name}</h2>
  
            <h3 style={ratingStyles} className="movie-rating">
              ⭐{movie.rating}
            </h3>
          </div>
  
          <p className="movie-summary">{movie.summary}</p>
        </div>
         
        <Button variant="contained" startIcon={<ArrowBackIosIcon />} onClick={()=> navigate(-1) }>
       Back
      </Button>
  
      </div>
    );
  }