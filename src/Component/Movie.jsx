import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from 'react'
import Counter from './Counter'
import {useNavigate} from "react-router-dom"


export default function Movie({ movieTake, editButton, deleteButton }) {

    const ratingStyles = {
        color: movieTake.rating >= 8.5 ? "green" : "red"
    }

    const [show, setShow] = useState(true);
    const navigate = useNavigate()

    return (
        <Card  className="movie-container">
            <img className="movie-poster" src={movieTake.poster} />
            <CardContent>
                <div className="movie-spec">
                    <h2 className="movie-name">{movieTake.name}
                        <IconButton color="primary" aria-label="Toggle-Description" onClick={() => setShow(!show)}  >
                            {show ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
                        </IconButton>
                        <IconButton  color="primary" aria-label="Movie-Info" onClick={() => navigate("/portal/view/${movieTake._id}")} >
                            <InfoIcon fontSize="medium"/>
                        </IconButton>
                    </h2>
                    <h3 style={ratingStyles} className="movie-rating">⭐{movieTake.rating}</h3>
                </div>
            </CardContent>
            {show ? <p className="movie-summary">{movieTake.summary}</p> : null}
            <CardActions>
                <Counter /> {editButton} {deleteButton }
            </CardActions>
        </Card >
    )
}