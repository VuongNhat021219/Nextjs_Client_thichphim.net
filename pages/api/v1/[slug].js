import { connectToDatabase } from '@/utils/mongodb';
export default async function handler(req, res) {
    const page = parseInt(req.query.page) || 1; // Lấy giá trị trang từ query parameter, mặc định là 1
    const limit = 28; // Số lượng kết quả trên mỗi trang
    const skip = (page - 1) * limit; // Số lượng kết quả cần bỏ qua
    const { slug } = req.query; // Lấy slug từ URL
   // Kết nối đến cơ sở dữ liệu MongoDB
   const { db } = await connectToDatabase();
   const collection = await db.collection("movieon");
   // Xử lý yêu cầu API dựa trên slug tại đây
    const categoryName = getCategoryNameBySlug(slug);


    const data = await collection
    .find({ "movie.category.name": categoryName })
    .skip(skip)
    .limit(limit)
    .toArray();
    res.status(200).json(data);
  }
  
  function getCategoryNameBySlug(slug) {
    switch (slug) {
        case 'phim-co-trang':
            return 'Cổ Trang';
          case 'phim-vo-thuat':
            return 'Võ Thuật';
          case 'phim-gia-dinh':
            return 'Gia Đình';
          case 'phim-kinh-di':
            return 'Kinh Dị';
          case 'phim-am-nhac':
            return 'Âm Nhạc';
          case 'phim-vien-tuong':
            return 'Viễn Tưởng';
          case 'phim-hinh-su':
            return 'Hình Sự';
          case 'phim-chien-tranh':
            return 'Chiến Tranh';
          case 'phim-hai-huoc':
            return 'Hài Hước';
          case 'phim-tai-lieu':
            return 'Tài Liệu';
          case 'phim-kinh-dien':
            return 'Kinh Điển';
          case 'phim-khoa-hoc':
            return 'Khoa Học';
          case 'phim-hoc-duong':
            return 'Học Đường';
          case 'phim-the-thao':
            return 'Thể Thao';
          case 'phim-bi-an':
            return 'Bí Ẩn';
          case 'phim-phieu-luu':
            return 'Phiêu Lưu';
          case 'phim-xxx':
            return 'Phim 18+';
          case 'phim-chinh-kich':
            return 'Chính Kịch';
          case 'phim-than-thoai':
            return 'Thần Thoại';
          case 'phim-tam-ly':
            return 'Tâm Lý';
          case 'phim-hanh-dong':
            return 'Hành Động';
          case 'phim-tinh-cam':
            return 'Tình Cảm';
            case 'phim-tinh-cam':
            return 'Tình Cảm';
      // Thêm các trường hợp cho các slug khác
      default:
        return 'Không tìm thấy danh mục';
    }
  }