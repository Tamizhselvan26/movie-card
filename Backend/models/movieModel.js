import mongoose from "mongoose";

// Creating schema
const movieSchema =  mongoose.Schema(
    // Adding the fielleds and their type
    {
      name: { type: String, required: true },
      poster: { type: String, required: true },
      trailer: { type: String, required: true },
      rating: { type: Number, required: true },
      summary: { type: String, required: true },
   
    },
    // Adding time stramps which used save datas timings entered in DB
    {
      timestamps: true,
    }
  );

  // Exporting schema
const Movie = mongoose.model("Movie", movieSchema);
export default Movie;