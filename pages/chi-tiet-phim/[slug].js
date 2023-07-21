import Layout from "@/components/Layout";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "@/components/Loader";
import { getOneMovieSlug } from "@/pages/api/getData";
import { useRouter } from "next/router";
import url from "url";
import slugDetailCSS from "@/styles/_slug_detail.module.scss";
import detailCSS from "@/styles/_detail.module.scss";
import { LiaStarHalfAltSolid, LiaStarSolid } from "react-icons/lia";
import { AiFillPlayCircle } from "react-icons/ai";
import Breadcrumb from "@/components/Breadcrumb";

export default function SlugDetail() {
  const [movie, setMovie] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  const textDesCription = (text) => {
    const shortenedText = isExpanded ? text : text.slice(0, 300) + "...";
    return shortenedText;
  };
  const router = useRouter();
  const { asPath } = router;
  const removeParagraphTags = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  };
  // Phân tích đường dẫn
  const { pathname, query } = url.parse(asPath, true);
  const pathParts = pathname.split("/");
  const slug = pathParts[pathParts.length - 1];
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        if (slug !== "[slug]" && slug !== undefined) {
          const response = await getOneMovieSlug(slug);
          return setMovie(response.data);
        }
      } catch (error) {
        // router.push("/not-found");
        console.log("lỗi", error);
      }
    };
    fetchMovie();
  }, [slug]);

  return (
    <Layout>
      <div className={slugDetailCSS.detail}>
        <Container fluid>
          <div
            className={`${slugDetailCSS.detail__content} ${
              movie === null ? "height__400" : ""
            } `}
          >
            <Row style={{ borderTop: "1px solid #3e3d3d" }}>
              {movie === null ? (
                <Loader />
              ) : (
                <Col>
                  <Breadcrumb
                    category={
                      movie.movie?.category !== undefined
                        ? movie.movie?.category[0].name
                        : "Phim Mới"
                    }
                    name={movie.movie?.name}
                  />
                </Col>
              )}
            </Row>
            <div className={slugDetailCSS.detail__content___list}>
              <Row>
                {movie === null ? (
                  <Loader />
                ) : (
                  <Col xs={4}>
                    <div className={detailCSS.detail__content___list___left}>
                      <div
                        className={
                          detailCSS.detail__content___list___left___image
                        }
                      >
                        <Image
                          width={300}
                          height={300}
                          src={`${movie.movie?.thumb_url}`}
                          alt={movie.movie?.name}
                        />
                      </div>
                      <div className={detailCSS.detail__list___ribbon}>
                        <div
                          className={detailCSS.detail__list___ribbon___action}
                        >
                          {" "}
                          {movie.movie?.quality}
                        </div>
                        <div
                          className={detailCSS.detail__list___ribbon___action1}
                        >
                          {" "}
                          {movie.movie?.lang}
                        </div>
                      </div>
                    </div>
                  </Col>
                )}
                {movie === null ? (
                  <Loader />
                ) : (
                  <Col className={detailCSS.mobile__col___right}>
                    <div className={detailCSS.detail__content___list___right}>
                      <div className={detailCSS.detail__right___list}>
                        <Row>
                          <Col xs={9}>
                            <div
                              className={detailCSS.detail__right___list___title}
                            >
                              <h1>{movie.movie?.name}</h1>
                            </div>
                          </Col>
                          <Col>
                            <div
                              className={detailCSS.detail__right___list___vote}
                            >
                              <div
                                className={
                                  detailCSS.detail__right___list___vote___icon
                                }
                              >
                                <LiaStarSolid className="icon__sz" />
                                <LiaStarSolid className="icon__sz" />
                                <LiaStarSolid className="icon__sz" />
                                <LiaStarSolid className="icon__sz" />
                                <LiaStarHalfAltSolid className="icon__sz" />
                              </div>
                              <p>(1.029 lượt đánh giá)</p>
                            </div>
                          </Col>
                        </Row>
                        <div
                          className={
                            detailCSS.detail__right___list___description
                          }
                        >
                          {textDesCription(
                            `${removeParagraphTags(movie.movie?.content)}`
                          )}
                          <button
                            className={
                              detailCSS.detail__right___list___description___button
                            }
                            onClick={toggleContent}
                          >
                            {isExpanded ? "Ẩn bớt" : "Xem thêm"}
                          </button>
                        </div>
                        <div
                          className={
                            detailCSS.detail__right___list___information
                          }
                        >
                          <Row>
                            <Col>
                              <ul>
                                <li>
                                  Quốc gia sản xuất:{" "}
                                  <span>{movie.movie?.country[0].name}</span>
                                </li>
                                <li>
                                  Diễn viên:{" "}
                                  <span>
                                    {movie.movie?.actor.map((item, index) => (
                                      <span key={index}>{item}, </span>
                                    ))}
                                  </span>
                                </li>
                                <li>
                                  Thời gian chiếu:{" "}
                                  <span>{movie.movie?.time}</span>
                                </li>
                                <li>
                                  Chiếu rạp:{" "}
                                  <span>
                                    {movie.movie?.chieurap === true
                                      ? "Có chiếu"
                                      : "Không chiếu"}
                                  </span>
                                </li>
                                <li>
                                  Ngày tạo:{" "}
                                  <span>{movie.movie?.created.time}</span>
                                </li>
                              </ul>
                            </Col>
                            <Col>
                              <ul>
                                <li>
                                  Năm: <span>{movie.movie?.year}</span>
                                </li>
                                <li>
                                  Trạng thái:{" "}
                                  <span>
                                    {movie.movie?.status === "ongoing"
                                      ? "Đang chiếu"
                                      : "Xem online"}
                                  </span>
                                </li>
                                <li>
                                  Thời gian chiếu: <span>120 phút</span>
                                </li>
                                <li>
                                  VietSub:{" "}
                                  <span>
                                    {movie.movie?.sub_docquyen === true
                                      ? "Sub tiếng Việt độc quyền"
                                      : "Có"}
                                  </span>
                                </li>
                                <li>
                                  Phim dạng: <span>{movie.movie?.type}</span>
                                </li>
                                <li>
                                  Tập phim:{" "}
                                  <span> {movie.movie?.episode_current}</span>
                                </li>
                              </ul>
                            </Col>
                          </Row>
                        </div>

                        <div
                          className={detailCSS.detail__right___list___action}
                        >
                          <Link href={`/xem-phim/${movie.movie?.slug}`}>
                            <button
                              className={
                                detailCSS.detail__right___list___action___button
                              }
                            >
                              <AiFillPlayCircle style={{ fontSize: "30px" }} />{" "}
                              Xem ngay
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                )}
              </Row>
              <div className={`${detailCSS.detail__other} hidden`}>
                <Row>
                  <Col xs={9} className={detailCSS.mobile__comment___col}>
                    {/* <Comments /> */}
                  </Col>
                  <Col className={detailCSS.mobile__trendmovie___col}>
                    {/* <TrendMovie title="Phim liên quan" />
            <TrendMovie title="Phim chiếu rap" /> */}
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
