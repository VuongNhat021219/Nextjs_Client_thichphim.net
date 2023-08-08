import { connectToDatabase } from '@/utils/mongodb';

export default async function handler(req, res) {
  // Kết nối đến cơ sở dữ liệu MongoDB
  const { db } = await connectToDatabase();

  // Thực hiện các truy vấn dữ liệu (ví dụ: lấy danh sách người dùng)
  const users = await db.collection('users').find({}).toArray();

  // Trả về dữ liệu dưới dạng JSON
  res.status(200).json(users);
}