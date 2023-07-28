const axios = require("axios");

export async function getTrendMovieData() {
  try {
    const { data } = await axios.post(
      `http://localhost:3000/api/v1/view-movie?page=1`
    );
    return data;
  } catch (error) {
    console.log("lỗi rồi", error);
  }
}

export async function getOneMovieSlug(slug) {
  try {
    const movieSlug = await axios.get(
      `http://localhost:3000/api/v1/bophim/${slug}`
    );
    return movieSlug;
  } catch (error) {
    console.log("lỗi khi lấy slug", error);
  }
}

export async function getActionMovie() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-hanh-dong?page=1`
    );

    return data;
  } catch (error) {
    console.log("lỗi khi lấy phim", error);
  }
}
export async function getHorrorMovie() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-kinh-di?page=1`
    );

    return data;
  } catch (error) {
    console.log("lỗi khi lấy phim", error);
  }
}
export async function getFantasyMovie() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-vien-tuong?page=2`
    );

    return data;
  } catch (error) {
    console.log("lỗi khi lấy phim", error);
  }
}

export async function getRomanceMovie() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-tinh-cam?page=1`
    );

    return data;
  } catch (error) {
    console.log("lỗi khi lấy phim", error);
  }
}

export async function getComedyMovie() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-hai-huoc?page=1`
    );

    return data;
  } catch (error) {
    console.log("lỗi khi lấy phim", error);
  }
}

export async function getOnePhimAmNhac(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-am-nhac?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}
export async function getAllPhimAmNhac() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-am-nhac`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimBiAn(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-bi-an?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimBiAn() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-bi-an`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimChienTranh(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-chien-tranh?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimChienTranh() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-chien-tranh`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimChinhKich(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-chinh-kich?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimChinhKich() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-chinh-kich`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimCoTrang(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-co-trang?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimCoTrang() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-co-trang`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimGiaDinh(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-gia-dinh?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimGiaDinh() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-gia-dinh`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}
export async function getOnePhimHaiHuoc(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-hai-huoc?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimHaiHuoc() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-hai-huoc`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimHanhDong(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-hanh-dong?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimHanhDong() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-hanh-dong`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}
export async function getOnePhimHinhSu(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-hinh-su?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimHinhSu() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-hinh-su`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimHocDuong(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-hoc-duong?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimHocDuong() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-hoc-duong`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimKhoaHoc(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-khoa-hoc?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimKhoaHoc() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-khoa-hoc`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}
export async function getOnePhimKinhDi(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-kinh-di?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimKinhDi() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-kinh-di`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimPhieuLuu(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-phieu-luu?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimPhieuLuu() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-phieu-luu`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimKinhDien(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-kinh-dien?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimKinhDien() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-kinh-dien`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimTaiLieu(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-tai-lieu?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimTaiLieu() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-tai-lieu`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimTamLy(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-tam-ly?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimTamLy() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-tam-ly`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimThanThoai(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-than-thoai?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimThanThoai() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-than-thoai`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimTheThao(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-the-thao?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimTheThao() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-the-thao`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimTimCam(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-tinh-cam?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimTimCam() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-tinh-cam`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimVienTuong(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-vien-tuong?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimVienTuong() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-vien-tuong`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getOnePhimVoThuat(page) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/phim-vo-thuat?page=${page}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPhimVoThuat() {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/all-movie/phim-vo-thuat`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function searchMovie(search) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/tim-kiem?key=${search}`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}
