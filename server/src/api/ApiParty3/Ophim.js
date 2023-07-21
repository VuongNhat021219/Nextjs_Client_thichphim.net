const express = require("express");
const router = express.Router();
// const axios = require("axios");
const database = require("../../Config/Database");

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
database
  .connectToDatabase()
  .then(() => {
    router.get("/v1/bophim/:slug", async (req, res) => {
      const movieSlug = req.params.slug;
      try {
        const collection = await database.getCollection("movieon");
        const data = await collection.findOne({ "movie.slug": movieSlug });

        if (data) {
          res.json(data);
        } else {
          res.status(404).send("Không tìm thấy bộ phim.");
        }
      } catch (error) {
        console.log("Yêu cầu không thành công.", error);
        res.status(500).send("Lỗi khi lấy thông tin phim.");
      }
    });

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    router.get("/v1/all-movie/phim-hanh-dong", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Hành Động" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });

    router.get("/v1/phim-hanh-dong", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Hành Động" })
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

    router.get("/v1/all-movie/phim-tinh-cam", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Tình Cảm" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });

    router.get("/v1/phim-tinh-cam", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Tình Cảm" })
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

    router.get("/v1/all-movie/phim-co-trang", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Cổ Trang" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-co-trang", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Cổ Trang" })
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
    router.get("/v1/all-movie/phim-vo-thuat", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Võ Thuật" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-vo-thuat", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Võ Thuật" })
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
    router.get("/v1/all-movie/phim-gia-dinh", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Gia Đình" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-gia-dinh", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Gia Đình" })
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
    router.get("/v1/all-movie/phim-kinh-di", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Kinh Dị" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-kinh-di", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Kinh Dị" })
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
    router.get("/v1/all-movie/phim-am-nhac", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Âm Nhạc" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-am-nhac", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Âm Nhạc" })
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
    router.get("/v1/all-movie/phim-vien-tuong", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Viễn Tưởng" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-vien-tuong", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Viễn Tưởng" })
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
    router.get("/v1/all-movie/phim-hinh-su", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Hình Sự" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-hinh-su", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Hình Sự" })
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
    router.get("/v1/all-movie/phim-chien-tranh", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Chiến Tranh" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-chien-tranh", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Chiến Tranh" })
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
    router.get("/v1/all-movie/phim-hai-huoc", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Hài Hước" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-hai-huoc", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Hài Hước" })
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
    router.get("/v1/all-movie/phim-tai-lieu", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Tài Liệu" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-tai-lieu", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Tài Liệu" })
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
    router.get("/v1/all-movie/phim-kinh-dien", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Kinh Điển" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-kinh-dien", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Kinh Điển" })
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
    router.get("/v1/all-movie/phim-khoa-hoc", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Khoa Học" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-khoa-hoc", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Khoa Học" })
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
    router.get("/v1/all-movie/phim-hoc-duong", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Học Đường" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-hoc-duong", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Học Đường" })
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
    router.get("/v1/all-movie/phim-the-thao", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Thể Thao" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-the-thao", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Thể Thao" })
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
    router.get("/v1/all-movie/phim-bi-an", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Bí Ẩn" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-bi-an", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Bí Ẩn" })
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
    router.get("/v1/all-movie/phim-phieu-luu", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Phiêu Lưu" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-phieu-luu", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Phiêu Lưu" })
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
    router.get("/v1/all-movie/phim-xxx", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Phim 18+" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-xxx", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Phim 18+" })
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
    router.get("/v1/all-movie/phim-chinh-kich", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Chính Kịch" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-chinh-kich", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Chính Kịch" })
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
    router.get("/v1/all-movie/phim-than-thoai", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Thần Thoại" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-than-thoai", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Thần Thoại" })
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
    router.get("/v1/all-movie/phim-tam-ly", async (req, res) => {
      try {
        const limit = 500;
        const collection = await database.getCollection("movieon");
        const data = await collection
          .find({ "movie.category.name": "Tâm Lý" })
          .limit(limit)
          .toArray();
        res.json({
          data,
        }); // Gửi dữ liệu dưới dạng JSON bao gồm tổng số trang và dữ liệu bộ phim
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
    router.get("/v1/phim-tam-ly", async (req, res) => {
      try {
        const collection = await database.getCollection("movieon");
        const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
        const limit = 28; // Số lượng kết quả trên mỗi trang
        const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua

        const data = await collection
          .find({ "movie.category.name": "Tâm Lý" })
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

    router.get("/v1/tim-kiem", async (req, res) => {
      try {
        const keyword = req.query.key;

        const collection = await database.getCollection("movieon");
        const limit = 10;
        const data = await collection
          .find({
            $or: [
              { "movie.name": { $regex: `.*${keyword}.*`, $options: "i" } }, // Tìm kiếm gần chính xác trong trường "name"
              {
                "movie.origin_name": {
                  $regex: `.*${keyword}.*`,
                  $options: "i",
                },
              }, // Tìm kiếm gần chính xác trong trường "origin_name"
            ],
          })
          .limit(limit)
          .toArray();

        res.json(data); // Gửi dữ liệu phim dưới dạng JSON
      } catch (error) {
        console.error("Lỗi truy vấn dữ liệu:", error);
        res.status(500).send("Lỗi truy vấn dữ liệu");
      }
    });
  })
  .catch((error) => {
    console.error("Lỗi kết nối cơ sở dữ liệu:", error);
  });

module.exports = router;
