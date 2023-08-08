import { connectToDatabase } from '@/utils/mongodb';
export default async function handler(req, res) {
    const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
    const limit = 12; // Số lượng kết quả trên mỗi trang
    const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua
   
   // Kết nối đến cơ sở dữ liệu MongoDB
   const { db } = await connectToDatabase();
   const collection = await db.collection("movieon");
   // Xử lý yêu cầu API dựa trên slug tại đây

    const data = await collection
    .find({})
    .sort({ "movie.view": -1 }) // Sắp xếp theo số lượt xem từ cao đến thấp
    .skip(skip)
    .limit(limit)
    .toArray();
    res.status(200).json(data);
  }
  
 
