const { validateMovie, getMovie } = require("../Models/Movie");

exports.getMovie = async (req, res) => {
  const movies = await getMovie();
 
  res.render("Pages/movieView", {
    user: [
      {
        username: "vuong",
        email: "admin@example.com",
        password: "dfsdfsad",
        age: "23",
        address: "hà nội",
        phone: "0383333732",
      },
    ],
    movies,
 
  });
};

exports.getMovieAdd = (req, res) => {
  res.render("Pages/movieAddView", {
    user: [
      {
        username: "vuong",
        email: "admin@example.com",
        password: "dfsdfsad",
        age: "23",
        address: "hà nội",
        phone: "0383333732",
      },
    ],
  });
};

exports.postMovieAdd = async (req, res) => {
  const images = req.files["images"];

  const uploadedImages = [];
  for (let i = 0; i < images.length; i++) {
    uploadedImages.push(images[i].originalname);
  }

  const img = JSON.stringify(uploadedImages);

  const {
    title,
    director,
    actor,
    genre,
    release,
    duration,
    poster,
    summary,
    description,
  } = req.body;
  const { clip } = req.files;

  const newMovie = {
    title: title,
    director: director,
    actors: actor,
    genre: genre,
    releaseDate: release,
    duration: Number(duration),
    summary: summary,
    description: description,
    poster: poster,
    images: img,
    clips: clip[0].originalname,
  };

  await validateMovie(newMovie);
  await res.redirect("/movie/");
};

exports.getMovieShowId = (req, res) => {
  res.render("Pages/movieShowIdView", {
    user: [
      {
        username: "vuong",
        email: "admin@example.com",
        password: "dfsdfsad",
        age: "23",
        address: "hà nội",
        phone: "0383333732",
      },
    ],
  });
};
