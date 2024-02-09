import React from 'react'
import Movie from './Movie'
import { useState, useEffect } from "react";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

export default function MovieList() {
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        // setLoading(true)
        let users = await axios.get("http://localhost:4000/movie/get",{
            headers: {"x-token": window.localStorage.getItem("studentToken")}
        });
        console.log(users)
        setUsers(users.data.Movies)
        // setLoading(false)
    }

      const deleteMovie = async (id) => {
        try {
            let ask = window.confirm("This Data will delete")
            if (ask){
               
                await axios.delete("http://localhost:4000/movie/deletebyid/${id}");
        loadData()

            }
        }catch(error){
                console.log(error)
            }

  };
    return (
        <div className="movie-list">
            {
                users.map((list, index) => (
                    <div key={index}>
                        <Movie movieTake={list} 
                        deleteButton={
                            <IconButton
                            sx={{marginLeft:"auto"}}
                              aria-label="delete"
                              color="error"
                              onClick={() => deleteMovie(list._id)}
                            >
                              <DeleteIcon  />
                            </IconButton>
                          }
                        
                          editButton={
                            <IconButton
                            sx={{marginLeft:"auto"}}
                              aria-label="edit"
                              color="secondary" 
                              onClick={()=> navigate("/portal/edit/${list._id}")}
                            >
                              <EditIcon />
                            </IconButton>
                          }
                        />
                    </div>
                ))
            }
        </div>

    )
}