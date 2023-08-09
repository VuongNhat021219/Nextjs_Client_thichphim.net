import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "@/components/Loader";
import { BiMoviePlay } from "react-icons/bi";
import styles from "@/styles/_home.module.scss";
import trendMovieCSS from "@/styles/_trendmovie.module.scss";
import MovieList from "@/components/MovieList";
import {
  getDataMoviesUpdate,

} from "@/pages/api/getData";

export default function Home({
  allgetDataMoviesUpdate,
  allgetDataMoviesUpdate1,
  allgetDataMoviesUpdate2,
  allgetDataMoviesUpdate3,
  allgetDataMoviesUpdate4,
  allgetDataMoviesUpdate5,
  allgetDataMoviesUpdate6,
  allgetDataMoviesUpdate7,
  allgetDataMoviesUpdate8,
  allgetDataMoviesUpdate9,
}) {
  const pathImage = allgetDataMoviesUpdate.pathImage;
 
  return (
    <Layout>
      <div
        className={`${styles.home__content} ${
          allgetDataMoviesUpdate === null ? "height__400" : ""
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

                {allgetDataMoviesUpdate4 === null
                  ? ""
                  : allgetDataMoviesUpdate4.items?.map((trendmovie, index) => (
                      <Link href={`/${trendmovie.slug}`} key={index}>
                        <div className={trendMovieCSS.trend__content}>
                          <div className={trendMovieCSS.trend__content___image}>
                            <Image
                              width={300}
                              height={300}
                              src={`${pathImage}${trendmovie.thumb_url}`}
                              alt={trendmovie.name}
                            />
                            <div
                              className={trendMovieCSS.trend__content___ribbon}
                            >
                              {/* <div
                              className={
                                trendMovieCSS.trend__content___ribbon___action
                              }
                            >
                              {trendmovie.quality}
                            </div> */}
                              <div
                                className={
                                  trendMovieCSS.trend__content___ribbon___status
                                }
                              >
                                {trendmovie.year}
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
                                {trendmovie.name}
                              </h3>
                              <div
                                className={
                                  trendMovieCSS.trend__content___list___priview
                                }
                              >
                                {trendmovie.origin_name}
                              </div>
                              <div style={{ fontSize: "11px", color: "red" }}>
                                {trendmovie.view} người xem
                              </div>
                              <div
                                style={{ fontSize: "11px", color: "red" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
              </div>
            </Col>
            <Col>
              <Row>
                {allgetDataMoviesUpdate === null ? (
                  <Loader />
                ) : (
                  <Col>
                    <MovieList
                      title="Phim mới hôm nay"
                      DataMovie={allgetDataMoviesUpdate}
                    />
                    <MovieList
                      title="Phim mới hôm qua"
                      DataMovie={allgetDataMoviesUpdate1}
                    />
                    <MovieList
                      title="Phim hot"
                      DataMovie={allgetDataMoviesUpdate5}
                    />
                    <MovieList
                      title="Phim hay"
                      DataMovie={allgetDataMoviesUpdate2}
                    />
                    <MovieList
                      title="Phim lẻ"
                      DataMovie={allgetDataMoviesUpdate3}
                    />
                    <MovieList
                      title="Phim bộ"
                      DataMovie={allgetDataMoviesUpdate6}
                    />
                    <MovieList
                      title="Phim chiếu rap"
                      DataMovie={allgetDataMoviesUpdate7}
                    />
                    <MovieList
                      title="Phim hấp dẫn"
                      DataMovie={allgetDataMoviesUpdate8}
                    />
                    <MovieList
                      title="list phim hay"
                      DataMovie={allgetDataMoviesUpdate9}
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
    const allgetDataMoviesUpdate = await getDataMoviesUpdate(1);
    const allgetDataMoviesUpdate1 = await getDataMoviesUpdate(2);
    const allgetDataMoviesUpdate2 = await getDataMoviesUpdate(6);
    const allgetDataMoviesUpdate3 = await getDataMoviesUpdate(10);
    const allgetDataMoviesUpdate4 = await getDataMoviesUpdate(15);
    const allgetDataMoviesUpdate5 = await getDataMoviesUpdate(4);
    const allgetDataMoviesUpdate6 = await getDataMoviesUpdate(17);
    const allgetDataMoviesUpdate7 = await getDataMoviesUpdate(19);
    const allgetDataMoviesUpdate8 = await getDataMoviesUpdate(21);
    const allgetDataMoviesUpdate9 = await getDataMoviesUpdate(23);

    return {
      props: {
        allgetDataMoviesUpdate,
        allgetDataMoviesUpdate1,
        allgetDataMoviesUpdate2,
        allgetDataMoviesUpdate3,
        allgetDataMoviesUpdate4,
        allgetDataMoviesUpdate5,
        allgetDataMoviesUpdate6,
        allgetDataMoviesUpdate7,
        allgetDataMoviesUpdate8,
        allgetDataMoviesUpdate9,
      },
    };
  } catch (error) {
    console.log("Error fetching data:", error);
    return {
      props: {
        allgetDataMoviesUpdate: null, // Đặt giá trị mặc định hoặc bỏ đi thuộc tính
      },
    };
  }
}
