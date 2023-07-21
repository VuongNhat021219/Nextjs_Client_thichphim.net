const express = require("express");
const router = express.Router();
const axios = require("axios");
// const options = {
//   method: "GET",
//   url: "https://moviesdatabase.p.rapidapi.com/titles/?page=2",
//   headers: {
//     "X-RapidAPI-Key": "41a55e3d1fmshecc863b6a070d4dp1c1379jsn494c3d8b16d5",
//     "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
//   },
// };
router.get("/moviedatabase/", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles",
    headers: {
      "X-RapidAPI-Key": "41a55e3d1fmshecc863b6a070d4dp1c1379jsn494c3d8b16d5",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.log("Yêu cầu không thành công.", error);
    res.status(500).send("Lỗi khi lấy thông tin phim.");
  }
});

module.exports = router;
