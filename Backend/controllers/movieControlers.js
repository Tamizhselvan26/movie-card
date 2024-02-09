import Movie from "../models/movieModel.js";
import { ObjectId } from "mongodb";



// Fectch all movies
export const getMovies =  async (req, res) => {
    try {
        const Movies = await Movie.find({});
        res.status(200).json({ Movies });
    } catch (error) {
        return res.status(500).send({ error });
    }
};

// creating movie in DB
export const createMovies = async (req, res) => {
    // Spliting data from req.bady to multiple varibles
    const { name, poster, trailer, rating, summary } = req.body;
    const movie = await Movie.create({
        name,
        poster,
        trailer,
        rating,
        summary,
    });
    if (movie) {
        res.status(201).json({
            message: "Movie added successfully ",
        });
    } else {
        // if movie is not created saying movie is not created
        res.status(400);
        throw new Error("failed to create");
    }
};

// Fectch movie by ID
export const getMovieByID = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findOne({ _id: new ObjectId(id) });
        res.status(200).json({ movie });
    } catch (error) {
        return res.status(500).send({ error });
    }
};



// delete movie by ID
export const deleteMovieByID = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteMovie = await Movie.deleteOne({ _id: new ObjectId(id) });
        if (deleteMovie > 0) {
            res.status(200).json({ message: "Data Deleted Successfully" });
        }
    } catch (error) {
        return res.status(500).send({ error });
    }
};

// Edit movie by ID
export const updateMovieByID = async (req, res) => {
    // Spliting data from req.bady to multiple varibles
    const { name, poster, trailer, rating, summary } = req.body;
    const { id } = req.params;
    const movie = await Movie.updateOne({ _id: new ObjectId(id) }, {
        name,
        poster,
        trailer,
        rating,
        summary,
    });
    if (movie) {
        res.status(201).json({
            movie
        });
    } else {
        // if movie is not updated saying movie is not created
        res.status(400);
        throw new Error("failed to create");
    }
};