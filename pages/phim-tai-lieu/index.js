import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import Image from 'next/image';
import { getOnePhimTaiLieu } from "@/pages/api/getData";

import { Container, Row, Col } from "react-bootstrap";
import { BiMoviePlay } from "react-icons/bi";
import styles from "@/styles/_home.module.scss";
import trendMovieCSS from "@/styles/_trendmovie.module.scss";
import MovieList from "@/components/MovieList";
import { getTrendMovieData } from "../api/getData";
import PhimMoiCSS from "@/styles/StylePage/_phimhanhdong.module.scss";
import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
const PaginationComponent = dynamic(
  () => import("@/components/PaginationComponent"),
  { ssr: false }
);

export default function PhimTaiLieuIndex({ data, allTrendMovieDatas }) {
  return (
    <div className={`app`}>
      <Layout>
        {data === undefined ? <Loader /> : ""}
        <div
          className={`${styles.home__content} ${
            data === undefined ? "height__400" : ""
          }`}
        >
          <Container
            fluid
            className={styles.home__content___container}
            style={{ backgroundColor: "var(--header-bgr)" }}
          >
            <Row style={{ borderTop: "1px solid #3e3d3d" }}>
              <Col
                xs={2}
                className={`${styles.mobile__trendMovie} ${
                  PhimMoiCSS === undefined ? "" : PhimMoiCSS.mobile__trendMovie
                }`}
              >
                {/* trendmove */}
                <div className={trendMovieCSS.trend}>
                  <div className={trendMovieCSS.trend__title}>
                    <h3 className={trendMovieCSS.trend__title___name}>
                      <BiMoviePlay className="icon__sz" />
                      Phim nổi bật
                    </h3>
                  </div>

                  {allTrendMovieDatas === undefined
                    ? ""
                    : allTrendMovieDatas.documents.map((trendmovie, index) => (
                        <Link
                          href={`/phim-moi/${trendmovie.movie.slug}`}
                          key={index}
                        >
                          <div className={trendMovieCSS.trend__content}>
                            <div
                              className={trendMovieCSS.trend__content___image}
                            >
                              <Image
                                width={300}
                                height={300}
                                src={`${trendmovie.movie.thumb_url}`}
                                alt={trendmovie.movie.name}
                              />
                              <div
                                className={
                                  trendMovieCSS.trend__content___ribbon
                                }
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
                            <div
                              className={trendMovieCSS.trend__content___list}
                            >
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
                      ))}
                </div>
              </Col>
              <Col>
                <Row>
                  <Col>
                    {data === undefined ? (
                      ""
                    ) : (
                      <MovieList
                        title="Danh Sách Phim Tài Liệu"
                        PhimMoiCSS={PhimMoiCSS}
                        DataMovie={data}
                      />
                    )}
                  </Col>
                </Row>
                <div className={`${PhimMoiCSS.nav__page}`}>
                  {data === undefined ? (
                    ""
                  ) : (
                    <PaginationComponent
                      visiblePages={20}
                      totalPages={100}
                      hrefPage={`/phim-tai-lieu/`}
                    />
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const page = 1;

  const data = await getOnePhimTaiLieu(page);

  const allTrendMovieDatas = await getTrendMovieData();

  return {
    props: {
      data,
      allTrendMovieDatas,
    },
  };
}

