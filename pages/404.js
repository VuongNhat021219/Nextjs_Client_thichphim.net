import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "@/components/Layout";
import NotFoundCSS from "@/styles/_notfound.module.scss";
export default function NotFound() {
  return (
    <Layout>
      <div
        className={NotFoundCSS.home__content}
        style={{ padding: "70px 0", backgroundColor: "var(--content-bgr)" }}
      >
        <Container
          className={NotFoundCSS.home__content___container}
          style={{ backgroundColor: "var(--header-bgr)" }}
        >
          <Row>
            <Col>
              <div id={NotFoundCSS.error___page}>
                <div className={NotFoundCSS.content___error___page}>
                  <h2
                    className={NotFoundCSS.header___error___page}
                    data-text="404"
                  >
                    404
                  </h2>
                  <h4 data-text="Không tìm thấy Phim">Không tìm thấy Phim</h4>
                  <p>
                    Xin lỗi, chúng tôi đang cố gắng khắc phục lỗi này. Cảm ơn
                    bạn đã đồng hành cùng THICHPHIM.NET
                  </p>
                  <div className={NotFoundCSS.btns}>
                    <Link href="/">Về Trang Chủ</Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
