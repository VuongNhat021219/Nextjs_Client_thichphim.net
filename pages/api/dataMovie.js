
const axios = require("axios");

const getMoviesByCategorySlug = async (slug) => {
  try {
    const url =
      "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-kdnvd/endpoint/data/v1/action/findOne";
    const apiKey =
      "7L2iirPvWtKlc1L2Dy3DYrf2MPlf92cZwHEKaINL024Spj6Tb4huB9utAj7cfSjz";

    const data = {
      collection: "movieon",
      database: "websitephim",
      dataSource: "Cluster0",
      filter: {
        "movie.slug": { $eq: slug },
      },
    };

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": apiKey,
    };

    const dataMovie = await axios
      .post(url, data, { headers: headers })
      .then((response) => {
        // console.log("Response:", response.data);
        return response.data;
      })
      .catch((error) => {
        console.error("Error:", error.response.status, error.response.data);
      });
    return dataMovie;
  } catch (error) {
    console.error("Lỗi truy vấn dữ liệu:", error);
    throw new Error("Lỗi truy vấn dữ liệu");
  }
};
// Hàm gọi API để lấy dữ liệu
async function getData() {
    const res = await fetch('https://api.example.com/...'); // Gọi API từ URL đã chỉ định
    // Trả về giá trị *không* được mã hóa
    // Bạn có thể trả về Date, Map, Set, v.v...
   
    if (!res.ok) {
      // Nếu có lỗi trong quá trình gọi API, kích hoạt Error Boundary
      throw new Error('Failed to fetch data');
    }
   
    return res.json(); // Trả về dữ liệu được giải mã từ API (trả về một Promise chứa dữ liệu)
  }
   