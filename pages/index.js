import React, { useState, useRef,useEffect } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "@/components/Loader";
import { BiMoviePlay } from "react-icons/bi";
import styles from "@/styles/_home.module.scss";
import trendMovieCSS from "@/styles/_trendmovie.module.scss";
import MovieList from "@/components/MovieList";
import MovieListCSS from "@/styles/_movielist.module.scss";
import { BiCameraMovie } from "react-icons/bi";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

import {
  getSlugMovie,
  getFeaturedMovie
} from "./api/FunGetData";
export default function Home({
  MovieNoiBat,
  MovieKinhDi,
  allgetActionMovie,
  MovieVienTuong,
  MovieTinhCam,
  MovieHaiHuoc
}) {
  const [rowSide, setRowSide] = useState(0);
  const numberRow = 375;
  const onClickRowLeft = () => {
    setRowSide((prevRowSide) => prevRowSide + numberRow);
  };

  const onClickRowRight = () => {
    setRowSide((prevRowSide) => prevRowSide - numberRow);
  };
 

  return (
    <Layout>
      <div
        className={`${styles.home__content} ${
          MovieKinhDi === undefined ? "height__400" : ""
        } `}
      >
        <Container
          fluid
          className={styles.home__content___container}
          style={{ backgroundColor: "var(--header-bgr)" }}
        >
          <Row style={{ borderTop: "1px solid #3e3d3d" }}>
            <Col xs={2} className={styles.mobile__trendMovie}>
              {/* trendmove */}
              <div className={trendMovieCSS.trend}>
                <div className={trendMovieCSS.trend__title}>
                  <h3 className={trendMovieCSS.trend__title___name}>
                    <BiMoviePlay className="icon__sz" />
                    Phim nổi bật
                  </h3>
                  <div className={`${MovieListCSS.move__list___title___icon}`}>
                    <IoMdArrowDropleftCircle
                      onClick={onClickRowLeft}
                      className={MovieListCSS.move__list___title___icon___left}
                    />
                    ||
                    <IoMdArrowDroprightCircle
                      onClick={onClickRowRight}
                      className={MovieListCSS.move__list___title___icon___right}
                    />
                  </div>
                </div>

                {MovieNoiBat === undefined ? "": (
                  MovieNoiBat.map((trendmovie, index) => (
                    <Link href={`/${trendmovie.movie.slug}`} key={index}>
                      <div className={trendMovieCSS.trend__content}>
                        <div className={trendMovieCSS.trend__content___image}>
                          <Image
                            width={300}
                            height={300}
                            src={`${trendmovie.movie.thumb_url}`}
                            alt={trendmovie.movie.name}
                          />
                          <div
                            className={trendMovieCSS.trend__content___ribbon}
                          >
                            <div
                              className={
                                trendMovieCSS.trend__content___ribbon___action
                              }
                            >
                              {trendmovie.movie.quality}
                            </div>
                            <div
                              className={
                                trendMovieCSS.trend__content___ribbon___status
                              }
                            >
                              {trendmovie.movie.year}
                            </div>
                          </div>
                        </div>
                        <div className={trendMovieCSS.trend__content___list}>
                          <div
                            className={
                              trendMovieCSS.trend__content___list___title
                            }
                          >
                            <h3
                              className={
                                trendMovieCSS.trend__content___list___title___name
                              }
                            >
                              {trendmovie.movie.name}
                            </h3>
                            <div
                              className={
                                trendMovieCSS.trend__content___list___priview
                              }
                            >
                              {trendmovie.movie.origin_name}
                            </div>
                            <div style={{ fontSize: "11px", color: "red" }}>
                              {trendmovie.movie.view} người xem
                            </div>
                            <div
                              style={{ fontSize: "11px", color: "red" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </Col>
            <Col>
              <Row>
                {allgetActionMovie.length === 0 ? 
                (
                  <Loader />
                )
                 : (
                  <Col>
                    <MovieList
                      title="Phim hành động"
                      DataMovie={allgetActionMovie}
                    />
                    <MovieList
                      title="Phim kinh dị"
                      DataMovie={MovieKinhDi}
                    />
                    <MovieList
                      title="Phim viễn tưởng"
                      DataMovie={MovieVienTuong}
                    />
                    <MovieList
                      title="Phim tình cảm"
                      DataMovie={MovieTinhCam}
                    />
                    <MovieList
                      title="Phim hài hước"
                      DataMovie={MovieHaiHuoc}
                    />
                  </Col>
                )}
               
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
 
  const allgetActionMovie = await getSlugMovie(`phim-hanh-dong`,1);
  const MovieKinhDi = await getSlugMovie(`phim-kinh-di`,2);
  const MovieVienTuong = await getSlugMovie(`phim-vien-tuong`,2);
  const MovieTinhCam = await getSlugMovie(`phim-tinh-cam`,2);
  const MovieHaiHuoc = await getSlugMovie(`phim-hai-huoc`,1);
  const MovieNoiBat = await getFeaturedMovie(1);

  

  return {
    props: {
      allgetActionMovie,
      MovieKinhDi,
      MovieVienTuong,
      MovieTinhCam,
      MovieHaiHuoc,
      MovieNoiBat
    },
  };

  
}
