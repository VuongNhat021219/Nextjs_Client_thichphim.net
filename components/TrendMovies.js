import React from "react";
import trendMovieCSS from "@/styles/_trendmovie.module.scss";
import Image from "next/image";
import { BiMoviePlay } from "react-icons/bi";
import { Link } from "next/link";

export default function TrendMovies({ allTrendMovieDatas, isLoading }) {
  const partImage = `https://img.ophim8.cc/uploads/movies/`;
  return (
    <>
      {/* trendmovie */}
      <div className={trendMovieCSS.trend}>
        <div className={trendMovieCSS.trend__title}>
          <h3 className={trendMovieCSS.trend__title___name}>
            <BiMoviePlay className="icon__sz" />
            Phim nổi bật
          </h3>
        </div>

        {allTrendMovieDatas.map((trendmovie, index) => (
          <Link href={`/phim-moi/${trendmovie.slug}`} key={index}>
            <div className={trendMovieCSS.trend__content}>
              <div className={trendMovieCSS.trend__content___image}>
                <Image
                  width={300}
                  height={300}
                  src={`${partImage}${trendmovie.thumb_url}`}
                  alt="hinh anh"
                />
                <div className={trendMovieCSS.trend__content___ribbon}>
                  <div
                    className={trendMovieCSS.trend__content___ribbon___action}
                  >
                    HĐ
                  </div>
                  <div
                    className={trendMovieCSS.trend__content___ribbon___status}
                  >
                    tập 1
                  </div>
                </div>
              </div>
              <div className={trendMovieCSS.trend__content___list}>
                <div className={trendMovieCSS.trend__content___list___title}>
                  <h3
                    className={
                      trendMovieCSS.trend__content___list___title___name
                    }
                  >
                    {trendmovie.name}
                  </h3>
                  <div
                    className={trendMovieCSS.trend__content___list___priview}
                  >
                    {trendmovie.origin_name}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
