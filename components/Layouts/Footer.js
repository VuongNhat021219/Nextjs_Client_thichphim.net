import React from "react";
import Link from "next/link";
import FooterCSS from "@/styles/_footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { MDBCol, MDBIcon } from "mdbreact";
import { FcLike } from "react-icons/fc";
import { BiLike } from "react-icons/bi";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import ScrollToTop from "@/components/ScrollToTop";

const Footer = () => {
  return (
    <>
      <ScrollToTop />
      <div className={FooterCSS.footer}>
        <Container fluid>
          <div className={FooterCSS.footer__content}>
            <Row>
              <Col>
                <Row>
                  <Col className={FooterCSS.footer__content___col}>
                    <div className={FooterCSS.footer__content___logo}>
                      <h3>
                        Thích Phim
                        <span
                          className={FooterCSS.footer__content___logo___star}
                        >
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        .net
                      </h3>
                    </div>
                  </Col>
                  <Col>
                    <div className={FooterCSS.footer__content___page}>
                      <ul>
                        <Link href="/phim-kinh-di">
                          <li
                            className={FooterCSS.footer__content___page___list}
                          >
                            Phim Ma
                          </li>
                        </Link>

                        <Link href="/phim-hanh-dong">
                          <li
                            className={FooterCSS.footer__content___page___list}
                          >
                            Phim Hành Động
                          </li>
                        </Link>

                        <Link href="/phim-tinh-cam">
                          <li
                            className={FooterCSS.footer__content___page___list}
                          >
                            Phim Tình Cảm
                          </li>
                        </Link>

                        <Link href="/phim-gia-dinh">
                          <li
                            className={FooterCSS.footer__content___page___list}
                          >
                            Phim Gia Đình
                          </li>
                        </Link>
                        <Link href="/phim-hoc-duong">
                          <li
                            className={FooterCSS.footer__content___page___list}
                          >
                            Phim Học Đường
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col>
                <div className={FooterCSS.footer__content___list}>
                  <div className={FooterCSS.footer__content___list___search}>
                    <MDBCol md="6">
                      <form className="form-inline mt-4 mb-4">
                        <MDBIcon icon="search" />
                        <input
                          className="form-control form-control-sm ml-3 w-75"
                          type="text"
                          placeholder="Gửi phản hồi ngay cho chúng tôi nếu có lỗi..."
                          aria-label="Search"
                        />
                      </form>
                    </MDBCol>
                  </div>
                  <div className={FooterCSS.footer__content___list___text}>
                    <p className={FooterCSS.footer___textbook}>
                      <FcLike />
                      <span style={{ fontWeight: "bold" }}>Thichphim</span>.net
                      Xem bộ phim mới <BiLike />, phim lẻ <BiLike />, phim chiếu
                      rạp mới <BiLike />, miễn phí <BsFillEmojiLaughingFill />,
                      chất lượng cao với phụ đề tiếng việt <FcLike /> thuyết
                      minh <FcLike /> lồng tiếng...
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
