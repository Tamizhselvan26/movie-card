import express from "express";
const router = express.Router();
// importing all controlles

// importing all controlles
import {
    getMovies,
    getMovieByID,
    createMovies,
    deleteMovieByID,
    updateMovieByID,
} from "../controllers/movieControlers.js";
import jwt from "jsonwebtoken";


const auth = (req, res, next)=> {
    try{
const getToken = req.header("x-token")
jwt.verify(getToken, "students")
next()
    }catch(error){
console.log(error.message)
    }
}

// get methods

// Fectch all movies
router.get("/get",auth, getMovies);

// Fectch movie by ID
router.get("/getbyid/:id", getMovieByID);

// post methods

// creating movie in DB
router.post("/post", createMovies);

// delete methods

// delete movie by ID
router.delete("/deletebyid/:id", deleteMovieByID);

// put methods

// Edit movie by ID
router.put("/updatebyid/:id", updateMovieByID);

export default router;