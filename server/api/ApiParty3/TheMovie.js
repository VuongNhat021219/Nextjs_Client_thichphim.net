const express = require("express");
const axios = require("axios");

const router = express.Router();

const API_KEY = "44fadd0f434e25da29a39f84f2a491b3";
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGZhZGQwZjQzNGUyNWRhMjlhMzlmODRmMmE0OTFiMyIsInN1YiI6IjY0YWRiNjFkMWNmZTNhMDBlNGM1MGQzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IXUDmejDBeLB71KdGNnP0vwv4mf6uebNEP_bdxzFiJg";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
    Accept: "application/json",
  },
  params: {
    api_key: API_KEY,
  },
});

router.get("/movies/:id", async (req, res) => {
  const movieId = req.params.id;

  try {
    const response = await instance.get(`/movie/${movieId}`, {
      params: {
        append_to_response: "videos,images",
      },
    });
    res.send(response.data);
  } catch (error) {
    console.log("Yêu cầu không thành công.", error);
    res.status(500).send("Lỗi khi lấy thông tin phim.");
  }
});
// Thêm phim
router.post("/movies", async (req, res) => {
  const movieData = req.body;

  try {
    const response = await instance.post("/movie", movieData);
    res.send(response.data);
  } catch (error) {
    console.log("Yêu cầu không thành công.", error);
    res.status(500).send("Lỗi khi thêm phim.");
  }
});

// Cập nhật phim
router.put("/movies/:id", async (req, res) => {
  const movieId = req.params.id;
  const updatedData = req.body;

  try {
    const response = await instance.put(`/movie/${movieId}`, updatedData);
    res.send(response.data);
  } catch (error) {
    console.log("Yêu cầu không thành công.", error);
    res.status(500).send("Lỗi khi cập nhật phim.");
  }
});

// Xóa phim
router.delete("/movies/:id", async (req, res) => {
  const movieId = req.params.id;

  try {
    const response = await instance.delete(`/movie/${movieId}`);
    res.send(response.data);
  } catch (error) {
    console.log("Yêu cầu không thành công.", error);
    res.status(500).send("Lỗi khi xóa phim.");
  }
});
module.exports = router;
