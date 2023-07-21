import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "@/components/Loader";
import { BiMoviePlay } from "react-icons/bi";
import styles from "@/styles/_home.module.scss";
import trendMovieCSS from "@/styles/_trendmovie.module.scss";
import MovieList from "@/components/MovieList";
import {
  getTrendMovieData,
  getHorrorMovie,
  getActionMovie,
  getFantasyMovie,
  getRomanceMovie,
  getComedyMovie,
} from "./api/getData";

export default function Home({
  allTrendMovieDatas,
  allgetHorrorMovie,
  allgetActionMovie,
  allgetFantasyMovie,
  allgetRomanceMovie,
  allgetComedyMovie,
}) {
  return (
    <Layout>
      <div
        className={`${styles.home__content} ${
          allgetHorrorMovie === undefined ? "height__400" : ""
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
                </div>

                {allTrendMovieDatas === undefined ? (
                  <Loader />
                ) : (
                  allTrendMovieDatas.map((trendmovie, index) => (
                    <Link
                      href={`/chi-tiet-phim/${trendmovie.movie.slug}`}
                      key={index}
                    >
                      <div className={trendMovieCSS.trend__content}>
                        <div className={trendMovieCSS.trend__content___image}>
                          <img
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
                {allgetActionMovie === undefined ? (
                  <Loader />
                ) : (
                  <Col>
                    <MovieList
                      title="Phim hành động"
                      DataMovie={allgetActionMovie}
                    />
                    <MovieList
                      title="Phim kinh dị"
                      DataMovie={allgetHorrorMovie}
                    />
                    <MovieList
                      title="Phim viễn tưởng"
                      DataMovie={allgetFantasyMovie}
                    />
                    <MovieList
                      title="Phim tình cảm"
                      DataMovie={allgetRomanceMovie}
                    />
                    <MovieList
                      title="Phim hài hước"
                      DataMovie={allgetComedyMovie}
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
  try {
    const allTrendMovieDatas = await getTrendMovieData();
    const allgetActionMovie = await getActionMovie();
    const allgetHorrorMovie = await getHorrorMovie();
    const allgetFantasyMovie = await getFantasyMovie();
    const allgetRomanceMovie = await getRomanceMovie();
    const allgetComedyMovie = await getComedyMovie();

    return {
      props: {
        allTrendMovieDatas,
        allgetHorrorMovie,
        allgetActionMovie,
        allgetFantasyMovie,
        allgetRomanceMovie,
        allgetComedyMovie,
      },
    };
  } catch (error) {
    console.log("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
}
