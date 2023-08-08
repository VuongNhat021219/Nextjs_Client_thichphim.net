import { connectToDatabase } from '@/utils/mongodb';
export default async function handler(req, res) {
  const { slug } = req.query;

   // Kết nối đến cơ sở dữ liệu MongoDB
   const { db } = await connectToDatabase();
   const collection = await db.collection("movieon");
   // Xử lý yêu cầu API dựa trên slug tại đây
   const data = await collection.findOne({ "movie.slug": slug });
   
    res.status(200).json(data);
  }
  
 
