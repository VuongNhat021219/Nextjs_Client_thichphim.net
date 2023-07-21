import React, { useState } from "react";
import "../styles/_comment.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCommentDots } from "react-icons/fa";
import { FiBarChart, FiChevronDown } from "react-icons/fi";
import { SiIconify } from "react-icons/si";
import { BiLike, BiDislike } from "react-icons/bi";
import Image from "next/image";

export default function Comments() {
  const [bigComment, setBigComment] = useState(false);
  const onClickBigComment = (e) => {
    setBigComment(!bigComment);
  };
  const [comment, setComment] = useState(false);
  const onClickComment = () => {
    setComment(!comment);
  };
  const [comment1, setComment1] = useState(false);
  const onClickComment1 = () => {
    setComment1(!comment1);
  };
  const [commentchid, setCommentchid] = useState(false);
  const onClickCommentChid = () => {
    setCommentchid(!commentchid);
  };
  return (
    <>
      <div className="comment">
        <Row>
          <Col xs={7}>
            <h3 className="text__format">
              <FaCommentDots className="icon__sz" />
              Bình luận
            </h3>
          </Col>
          <Col>
            <h3 className="title-review-comments" onClick={onClickBigComment}>
              <FiBarChart className="icon__sz" />
              Sắp xếp theo
            </h3>
            <div
              className={`title-review-comments-list ${
                bigComment === false ? "hidden" : "show--flex"
              }`}
            >
              <ul>
                <li>Bình luận mới nhất</li>
                <li>Tất cả bình luận</li>
                <li>Bình luận được yêu thích nhất</li>
                <li>Bình luận liên quan</li>
              </ul>
            </div>
          </Col>
        </Row>

        <div className="comment__content">
          <Row>
            <Col>
              <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                <div className="comment-user" style={{ height: "100px" }}>
                  <div className="comment-user-image">
                    <Image
                      width={300}
                      height={300}
                      className="img-circle"
                      src="../images/user.jpeg"
                      alt="Ảnh Đại Diện"
                      style={{ height: "50px", width: "50px" }}
                    />
                  </div>
                  <div className="comment-user-list">
                    <form action="" method="POST">
                      <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Viết bình luận..."
                          />
                        </div>
                      </div>
                      <Row>
                        <Col>
                          <div className="comment-icon-user">
                            <SiIconify className="icon__sz" />
                          </div>
                        </Col>
                        <Col>
                          <div className="comment-btn">
                            <button type="reset" className="btn btn-primary ">
                              Huỷ
                            </button>
                            <button type="submit" className="btn btn-primary">
                              Bình Luận
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                <div className="comment-user">
                  <div className="comment-user-image--child">
                    <Image
                      width={300}
                      height={300}
                      className="img-circle"
                      src="../images/user.jpeg"
                      alt="Ảnh Đại Diện"
                    />
                  </div>
                  <div className="blog-comments inner-bottom-xs">
                    <div className="comment-title">
                      <h4>Jone doe</h4>
                      <span className="review-action pull-right">
                        03 Day ago /<a href=""> Repost</a> /
                        <a href=""> Reply</a>
                      </span>
                    </div>
                    <div className="comment_center_content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                    </div>
                    <div className="comment-icon">
                      <span>
                        <BiLike className="comment-icon-like" />
                        12
                      </span>{" "}
                      <span>
                        <BiDislike className="comment-icon-like" /> 0
                      </span>
                      <span className="comment-repo" onClick={onClickComment}>
                        Trả lời
                      </span>
                    </div>
                    <div
                      className={`comment-reply ${
                        comment === false ? "hidden" : "show--flex"
                      }`}
                    >
                      <div className="comment-user">
                        <div className="comment-user-image">
                          <Image
                            width={300}
                            height={300}
                            style={{ width: "40px" }}
                            className="img-circle"
                            src="../images/user.jpeg"
                            alt="Ảnh Đại Diện"
                          />
                        </div>
                        <div className="comment-user-list">
                          <form action="" method="POST" role="form">
                            <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Viết bình luận..."
                                />
                              </div>
                            </div>
                            <Row>
                              <Col>
                                <div className="comment-icon-user">
                                  <SiIconify className="icon__sz" />
                                </div>
                              </Col>
                              <Col>
                                <div className="comment-btn">
                                  <button
                                    type="reset"
                                    className="btn btn-primary "
                                  >
                                    Huỷ
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    Bình Luận
                                  </button>
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="comment--list-user-chid">
                      <button
                        onClick={onClickCommentChid}
                        className="comment--list-user-chid-button"
                      >
                        <FiChevronDown /> 2 phản hồi
                      </button>
                    </div>
                    <div
                      className={`comment-user ${
                        commentchid === false ? "hidden" : "show--flex"
                      } `}
                    >
                      <div className="comment-user-image--child">
                        <Image
                          width={300}
                          height={300}
                          className="img-circle"
                          src="../images/user.jpeg"
                          alt="Ảnh Đại Diện"
                        />
                      </div>
                      <div className="blog-comments inner-bottom-xs">
                        <div className="comment-title">
                          <h4>Jone doe</h4>
                          <span className="review-action pull-right">
                            03 Day ago /<a href=""> Repost</a> /
                            <a href=""> Reply</a>
                          </span>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div className="comment-icon">
                          <span>
                            <BiLike className="comment-icon-like" />
                            12
                          </span>{" "}
                          <span>
                            <BiDislike className="comment-icon-like" /> 0
                          </span>
                          <span
                            className="comment-repo"
                            onClick={onClickComment1}
                          >
                            Trả lời
                          </span>
                        </div>
                        <div
                          className={`comment-reply ${
                            comment1 === false ? "hidden" : "show--flex"
                          }`}
                        >
                          <div className="comment-user">
                            <div className="comment-user-image">
                              <Image
                                width={300}
                                height={300}
                                style={{ width: "40px" }}
                                className="img-circle"
                                src="../images/user.jpeg"
                                alt="Ảnh Đại Diện"
                              />
                            </div>
                            <div className="comment-user-list">
                              <form action="" method="POST" role="form">
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Viết bình luận..."
                                    />
                                  </div>
                                </div>
                                <Row>
                                  <Col>
                                    <div className="comment-icon-user">
                                      <SiIconify className="icon__sz" />
                                    </div>
                                  </Col>
                                  <Col>
                                    <div className="comment-btn">
                                      <button
                                        type="reset"
                                        className="btn btn-primary "
                                      >
                                        Huỷ
                                      </button>
                                      <button
                                        type="submit"
                                        className="btn btn-primary"
                                      >
                                        Bình Luận
                                      </button>
                                    </div>
                                  </Col>
                                </Row>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
