const database = require("../config/Database");

async function validateMovie(movie) {
  const moviesController = await database.getCollection("movies");
  if (
    typeof movie.title !== "string" &&
    typeof movie.director !== "string" &&
    typeof movie.actor !== "string" &&
    typeof movie.genre !== "string" &&
    typeof movie.release !== "string" &&
    typeof Number(movie.duration) !== "number" &&
    typeof movie.poster !== "string" &&
    typeof movie.summary !== "string" &&
    typeof movie.description !== "string" &&
    typeof movie.img !== "string" &&
    typeof movie.clip[0].originalname !== "string"
  ) {
    console.log("thêm thất bại");
    return false;
  }
  await moviesController.insertOne(movie);
  console.log("thêm mới phim thành công");
  return true;
}

const getMovie = async () => {
  const moviesController = await database.getCollection("movies");
  const movie = await moviesController.find().toArray();
  return movie;
};

module.exports = { validateMovie, getMovie };
