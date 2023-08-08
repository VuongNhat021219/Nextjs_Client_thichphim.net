import { connectToDatabase } from '@/utils/mongodb';
export default async function handler(req, res) {
    const key = req.query.key; // Lấy giá trị trang từ query parameter, mặc định là 1
    const limit = 12; // Số lượng kết quả trên mỗi trang
   
   
   // Kết nối đến cơ sở dữ liệu MongoDB
   const { db } = await connectToDatabase();
   const collection = await db.collection("movieon");
   // Xử lý yêu cầu API dựa trên slug tại đây

    const data = await collection
    .find({
        $or: [
          { "movie.name": { $regex: `.*${key}.*`, $options: "i" } }, // Tìm kiếm gần chính xác trong trường "name"
          { "movie.origin_name": { $regex: `.*${key}.*`, $options: "i" } }, // Tìm kiếm gần chính xác trong trường "origin_name"
        ],
      })
      .limit(limit)
      .toArray();
    res.status(200).json(data);
  }
  
 
