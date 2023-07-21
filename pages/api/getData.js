import axios from "axios";


export async function getTrendMovieData() {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/v1/view`);
    return data;
  } catch (error) {
    console.log("lỗi rồi", error);
  }
}

export async function getOneMovieSlug(slug) {
  try {
    const movieSlug = await axios.get(`http://localhost:3000/api/v1/bophim/${slug}`);
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

// export async function getMovieDataSlug() {
//   const movie = await getActionMovie();
//   return movie.map((movie) => ({
//     params: {
//       slug: `${movie.movie.slug}`,
//     },
//   }));
// }

// export const getMovieBySlug = async (slug) => {
//   try {
//     const response = await axios.get(
//       `http://localhost:3000/api/v1/bophim/${slug}`
//     );
//     return response.data
//   } catch (error) {
//     console.log(error);
//   }
// };
