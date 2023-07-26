const express = require("express");
const router = express.Router();

const database = require("../../Config/Database");
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

const getMoviesCategoryName = async (categoryName, limit, skip) => {
  try {
    const url =
      "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-kdnvd/endpoint/data/v1/action/find";
    const apiKey =
      "7L2iirPvWtKlc1L2Dy3DYrf2MPlf92cZwHEKaINL024Spj6Tb4huB9utAj7cfSjz";

    const data = {
      collection: "movieon",
      database: "websitephim",
      dataSource: "Cluster0",
      filter: {
        "movie.category.name": categoryName,
      },
      limit: limit,
      skip: skip,
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
const searchMovie = async (keyword, limit) => {
  try {
    const url =
      "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-kdnvd/endpoint/data/v1/action/find";
    const apiKey =
      "7L2iirPvWtKlc1L2Dy3DYrf2MPlf92cZwHEKaINL024Spj6Tb4huB9utAj7cfSjz";

    const data = {
      collection: "movieon",
      database: "websitephim",
      dataSource: "Cluster0",
      filter: {
        $or: [
          { "movie.name": { $regex: `.*${keyword}.*`, $options: "i" } }, // Tìm kiếm gần chính xác trong trường "name"
          {
            "movie.origin_name": {
              $regex: `.*${keyword}.*`,
              $options: "i",
            },
          }, // Tìm kiếm gần chính xác trong trường "origin_name"
        ],
      },
      limit: limit,
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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.get("/v1/tim-kiem", async (req, res) => {
  try {
    const keyword = req.query.key;
    const limit = 10;
    const movies = await searchMovie(keyword, limit);
    res.send(movies);
  } catch (error) {
    console.error("Lỗi truy vấn dữ liệu:", error);
    res.status(500).send("Lỗi truy vấn dữ liệu");
  }
});
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.get("/v1/bophim/:slug", async (req, res) => {
  const movieSlug = req.params.slug;
  try {
    const movie = await getMoviesByCategorySlug(movieSlug);
    res.send(movie);
  } catch (error) {
    console.log("Yêu cầu không thành công.", error);
    res.status(500).send("Lỗi khi lấy thông tin phim.");
  }
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.get("/v1/:slug", async (req, res) => {
  const movieSlug = req.params.slug;
  try {
    const categoryName =
      movieSlug === "phim-hanh-dong"
        ? "Hành Động"
        : movieSlug === "phim-tinh-cam"
        ? "Tình Cảm"
        : movieSlug === "phim-co-trang"
        ? "Cổ Trang"
        : movieSlug === "phim-vo-thuat"
        ? "Võ Thuật"
        : movieSlug === "phim-gia-dinh"
        ? "Gia Đình"
        : movieSlug === "phim-kinh-di"
        ? "Kinh Dị"
        : movieSlug === "phim-am-nhac"
        ? "Âm Nhạc"
        : movieSlug === "phim-vien-tuong"
        ? "Viễn Tưởng"
        : movieSlug === "phim-hinh-su"
        ? "Hình Sự"
        : movieSlug === "phim-chien-tranh"
        ? "Chiến Trang"
        : movieSlug === "phim-hai-huoc"
        ? "Hài Hước"
        : movieSlug === "phim-tai-lieu"
        ? "Tài Liệu"
        : movieSlug === "phim-kinh-dien"
        ? "Kinh Điển"
        : movieSlug === "phim-khoa-hoc"
        ? "Khoa Học"
        : movieSlug === "phim-hoc-duong"
        ? "Học Đường"
        : movieSlug === "phim-the-thao"
        ? "Thể Thao"
        : movieSlug === "phim-bi-an"
        ? "Bí Ẩn"
        : movieSlug === "phim-phieu-luu"
        ? "Phiêu Lưu"
        : movieSlug === "phim-xxx"
        ? "Phim 18+"
        : movieSlug === "phim-chinh-kich"
        ? "Chính Kịch"
        : movieSlug === "phim-than-thoai"
        ? "Thần Thoại"
        : movieSlug === "phim-tam-ly"
        ? "Tâm Lý"
        : "";
    const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
    const limit = 28; // Số lượng kết quả trên mỗi trang
    const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua
    const movies = await getMoviesCategoryName(categoryName, limit, skip);
    res.send(movies);
  } catch (error) {
    console.error("Lỗi truy vấn dữ liệu:", error);
    res.status(500).send("Lỗi truy vấn dữ liệu");
  }
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.get("/v1/phim-bo", async (req, res) => {
  try {
    const collection = await database.getCollection("movieon");
    const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
    const limit = 28; // Số lượng kết quả trên mỗi trang
    const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

    const data = await collection
      .find({ "movie.episode_total": { $ne: "1" } })
      .skip(skip)
      .limit(limit)
      .toArray();
    res.json(data); // Gửi dữ liệu dưới dạng JSON
  } catch (error) {
    console.error("Lỗi truy vấn dữ liệu:", error);
    res.status(500).send("Lỗi truy vấn dữ liệu");
  }
});
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.get("/v1/phim-le", async (req, res) => {
  try {
    const collection = await database.getCollection("movieon");
    const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
    const limit = 28; // Số lượng kết quả trên mỗi trang
    const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

    const data = await collection
      .find({ "movie.episode_total": { $eq: "1" } })
      .skip(skip)
      .limit(limit)
      .toArray();
    res.json(data); // Gửi dữ liệu dưới dạng JSON
  } catch (error) {
    console.error("Lỗi truy vấn dữ liệu:", error);
    res.status(500).send("Lỗi truy vấn dữ liệu");
  }
});
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.get("/v1/view", async (req, res) => {
  try {
    const collection = await database.getCollection("movieon");
    const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
    const limit = 12; // Số lượng kết quả trên mỗi trang
    const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

    const data = await collection
      .find({})
      .sort({ "movie.view": -1 }) // Sắp xếp theo số lượt xem từ cao đến thấp
      .skip(skip)
      .limit(limit)
      .toArray();
    res.json(data); // Gửi dữ liệu dưới dạng JSON
  } catch (error) {
    console.error("Lỗi truy vấn dữ liệu:", error);
    res.status(500).send("Lỗi truy vấn dữ liệu");
  }
});
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.get("/v1/the-loai", async (req, res) => {
  try {
    const collection = await database.getCollection("movieon");

    const distinctCategories = await collection
      .aggregate([
        { $unwind: "$movie.category" },
        { $group: { _id: "$movie.category.name" } },
        { $project: { _id: 0, name: "$_id" } },
      ])
      .toArray();

    const categories = distinctCategories.map((category) => category.name);

    res.json(categories); // Gửi danh sách thể loại dưới dạng JSON
  } catch (error) {
    console.error("Lỗi truy vấn dữ liệu:", error);
    res.status(500).send("Lỗi truy vấn dữ liệu");
  }
});
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.get("/v1/quoc-gia", async (req, res) => {
  try {
    const collection = await database.getCollection("movieon");

    const distinctCountries = await collection
      .aggregate([
        { $unwind: "$movie.country" },
        { $group: { _id: "$movie.country.name" } },
        { $project: { _id: 0, name: "$_id" } },
      ])

      .toArray();

    const countries = distinctCountries.map((country) => country.name);

    res.json(countries); // Gửi danh sách quốc gia dưới dạng JSON
  } catch (error) {
    console.error("Lỗi truy vấn dữ liệu:", error);
    res.status(500).send("Lỗi truy vấn dữ liệu");
  }
});

router.get("/v1/theo-quoc-gia/:quocgia", async (req, res) => {
  try {
    const quocGia = req.params.quocgia;
    const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
    const limit = 28; // Số lượng kết quả trên mỗi trang
    const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

    const collection = await database.getCollection("movieon");

    const data = await collection
      .find({ "movie.country.name": quocGia })
      .skip(skip)
      .limit(limit)
      .toArray();

    res.json(data); // Gửi dữ liệu phim theo quốc gia dưới dạng JSON
  } catch (error) {
    console.error("Lỗi truy vấn dữ liệu:", error);
    res.status(500).send("Lỗi truy vấn dữ liệu");
  }
});
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

module.exports = router;
