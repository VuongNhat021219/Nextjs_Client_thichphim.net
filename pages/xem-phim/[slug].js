import React, { useEffect, useState, useRef } from "react";
import Layout from "@/components/Layout";
import { BsArrowsFullscreen } from "react-icons/bs";
import WatchMovieCSS from "@/styles/_watchmovie.module.scss";
import WatchTVCSS from "@/styles/_watchtv.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "@/components/Breadcrumb";
import { getOneMovieSlug } from "@/pages/api/FunGetData";
import { useRouter } from "next/router";
import url from "url";

export default function WatchTV() {
  const [movie, setMovie] = useState([]);
  const [PageValue, setPageValue] = useState(1);
  const router = useRouter();
  const { asPath } = router;
  // Phân tích đường dẫn
  const { pathname, query } = url.parse(asPath, true);
  const pathParts = pathname.split("/");
  const slug = pathParts[pathParts.length - 1];
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        if (slug !== undefined && slug !== "[slug]") {
          const response = await getOneMovieSlug(slug);
          return setMovie(response);
        }
      } catch (error) {
        console.log("lỗi", error);
        // router.push("/not-found");
      }
    };
    fetchMovie();
  }, [slug]);
  // useEffect(() => {
  //   // Sử dụng jQuery trong useEffect để thực hiện các thao tác cần thiết
  //   // Ví dụ: thêm sự kiện click cho một phần tử HTML
  //   $(".art-control-pip").hide();
  // }, []);

  const iframeRef = useRef(null);

  const handleFullscreenClick = () => {
    const iframe = iframeRef.current;

    if (iframe && iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe && iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe && iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe && iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  };
  return (
    <Layout>
      <div className={WatchMovieCSS.detail}>
        <Container fluid>
          <div className={WatchMovieCSS.detail__content}>
            <Row>
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
            </Row>
            <div className={WatchTVCSS.detail__content___list}>
              {/* movie detail */}
              <div className={WatchTVCSS.watchtv}>
                <Container>
                  <Row>
                    <Col>
                      <div className={WatchTVCSS.video__movie}>
                        <div>
                          <button
                            onClick={handleFullscreenClick}
                            className={WatchTVCSS.button__show___full}
                          >
                            <BsArrowsFullscreen />
                          </button>
                          <iframe
                            ref={iframeRef}
                            src={`${
                              movie.episodes?.[0].server_data[
                                `${PageValue - 1}`
                              ].link_embed
                            }`}
                            width="100%"
                            height="600"
                          ></iframe>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className={WatchTVCSS.server__video}>
                        <div className={WatchTVCSS.server__video___title}>
                          Tập phim / {movie.movie?.episode_current}
                        </div>
                        <div className={WatchTVCSS.server__video___list}>
                          {movie.episodes?.[0].server_data.map(
                            (item, index) => (
                              <p key={index}>
                                <span
                                  onClick={() => setPageValue(item.name)}
                                  className={`${
                                    WatchTVCSS.server__video___list___page
                                  } ${
                                    PageValue === item.name
                                      ? WatchTVCSS.server__video___list___page___active
                                      : ""
                                  }`}
                                >
                                  tập {item.name}
                                </span>
                              </p>
                            )
                          )}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className={`${WatchMovieCSS.detail__other} hidden`}>
                <Row>
                  <Col xs={9} className={WatchMovieCSS.mobile__comment___col}>
                    {/* <Comments /> */}
                  </Col>
                  {/* <Col className="mobile__trendmovie___col">
                    <TrendMovie title="Phim liên quan" />
                    <TrendMovie title="Phim chiếu rap" />
                  </Col> */}
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
