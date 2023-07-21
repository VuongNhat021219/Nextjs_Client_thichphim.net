import React, { useState } from "react";
import styles from "@/styles/_header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faStar,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  AiFillSetting,
  AiOutlineMenuUnfold,
  AiFillCloseCircle,
} from "react-icons/ai";
import dynamic from "next/dynamic";
const CurrentTime = dynamic(
  () => import("@/components/Containers/CurrentTime"),
  { ssr: false }
);
import SliderCSS from "@/styles/_navbar.module.scss";

import { RiLockPasswordFill } from "react-icons/ri";
import { BiSolidDiscount, BiLogOut, BiSearchAlt } from "react-icons/bi";
import axios from "axios";

const Header = () => {
  const [searchResult, setSearchResult] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const MobileSearchClick = () => {
    setMobileSearch(!mobileSearch);
  };
  const MobileMenuClick = () => {
    setMobileMenu(!mobileMenu);
  };
  const PcSearchChange = (event) => {
    setInputValue(event.target.value);
    handleSearch();
  };
  const PcSearchCloseClick = () => {
    setInputValue("");
    setMobileSearch(!mobileSearch);
  };
  const handleBlur = () => {
    setMobileSearch(!mobileSearch);
  };

  async function handleSearch() {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/tim-kiem?key=${inputValue}`
      );
      setSearchResult(response.data);
    } catch (error) {
      console.log("Error searching:", error);
    }
  }

  return (
    <header className={styles.header}>
      <Container className={styles.header__content} fluid>
        <Row style={{ height: "100%" }}>
          <Col xs={3} className={styles.mobile__menu}>
            <AiOutlineMenuUnfold onClick={() => MobileMenuClick()} />
          </Col>
          <Col>
            <Link href="/">
              <div className={styles.header__logo} style={{ float: "left" }}>
                <h3>
                  Thích Phim
                  <span className={styles.header__logo___star}>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  .net
                </h3>
              </div>
            </Link>
          </Col>
          <Col xs={3} className={styles.mobile__search}>
            <BiSearchAlt onClick={() => MobileSearchClick()} />
            <div
              className={`${styles.mobile__input___search} ${
                mobileSearch !== false
                  ? styles.mobile__input___search___open
                  : ""
              } `}
            >
              <div className={styles.header__search}>
                <div className={styles.header__search___form}>
                  <input
                    style={{ float: "left" }}
                    type="text"
                    name="search_header"
                    placeholder="Nhập từ khóa...."
                    onChange={PcSearchChange}
                    value={inputValue}
                    onBlur={handleBlur}
                  />
                  <button className={styles.header__search___button}>
                    <BiSearchAlt />
                  </button>
                </div>
              </div>

              <button className={styles.header__close___button}>
                <AiFillCloseCircle onClick={() => PcSearchCloseClick()} />
              </button>
            </div>
            <div
              className={`${styles.mobile__result___search} ${
                inputValue !== "" ? "show" : "hidden"
              }`}
            >
              <div className={styles.mobile__result___search___top}>
                <h3>Kết quả:</h3>
                <span>{inputValue}</span>
              </div>
              {searchResult.map((item, index) => (
                <div
                  className={styles.mobile__result___search___content}
                  key={index}
                >
                  <div
                    className={styles.mobile__result___search___content___image}
                  >
                    <Image
                      width={300}
                      height={300}
                      src={item.movie.thumb_url}
                      alt={item.movie.name}
                    />
                  </div>
                  <div
                    className={styles.mobile__result___search___content___list}
                  >
                    <div
                      className={
                        styles.mobile__result___search___content___list___title___VN
                      }
                    >
                      {item.movie.name}
                    </div>
                    <div
                      className={
                        styles.mobile__result___search___content___list___title___english
                      }
                    >
                      {item.movie.origin_name}
                    </div>
                    <div style={{ fontSize: "3vw" }}>{item.movie.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col md={6} className={styles.pc_search}>
            <div className={styles.header__search}>
              <div className={styles.header__search___form}>
                <input
                  type="text"
                  name="search_header"
                  placeholder="Tìm kiếm phim...."
                  onChange={PcSearchChange}
                  value={inputValue}
                />
                <button className={styles.header__search___button}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <button
                  className={styles.header__close___button}
                  onClick={() => PcSearchCloseClick()}
                >
                  <AiFillCloseCircle />
                </button>
              </div>
            </div>
            <div
              className={`${styles.pc__result___search} ${
                inputValue !== "" ? "show" : "hidden"
              } `}
            >
              <div className={styles.pc__result___search___top}>
                <h3>Kết quả:</h3>
                <span>{inputValue}</span>
              </div>
              {searchResult.map((item, index) => (
                <div
                  className={styles.pc__result___search___content}
                  key={index}
                >
                  <div className={styles.pc__result___search___content___image}>
                    <Image
                      width={300}
                      height={300}
                      src={item.movie.thumb_url}
                      alt={item.movie.name}
                    />
                  </div>
                  <div className={styles.pc__result___search___content___list}>
                    <div
                      className={
                        styles.pc__result___search___content___list___title___VN
                      }
                    >
                      {item.movie.name}
                    </div>
                    <div
                      className={
                        styles.pc__result___search___content___list___title___english
                      }
                    >
                      {item.movie.origin_name}
                    </div>
                    <div style={{ fontSize: "0.6vw" }}>{item.movie.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col md={2} sm={2} className={styles.pc__action}>
            <div className={styles.header__user}>
              <div className={styles.header__user___dangnhap}>
                <NavDropdown
                  title="Tài khoản"
                  id="basic-nav-dropdown"
                  style={{ fontWeight: "600", color: "yellow" }}
                >
                  <NavDropdown.Item href="#action/3.1">
                    <FontAwesomeIcon icon={faUser} /> Thông tin tài khoản
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <AiFillSetting /> Cài đặt
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <RiLockPasswordFill /> Đổi mật khẩu
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <BiSolidDiscount /> Nạp Coin
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    <BiLogOut /> Đăng Xuất
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* slider */}
      <>
        <div
          className={`${SliderCSS.menu__header___mobile} ${
            mobileMenu === false ? "" : SliderCSS.menu__header___mobile___open
          }`}
        >
          <ul>
            <div className={SliderCSS.menu__header___mobile___top}>
              <Row>
                <Col>
                  <div className={SliderCSS.menu__header___mobile___top___logo}>
                    <div className={SliderCSS.header__logo}>
                      <h3>
                        Thích Phim
                        <span className={SliderCSS.header__logo___star}>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        .net
                      </h3>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className={SliderCSS.menu__header___mobile___top___icon}>
              <AiFillCloseCircle onClick={() => MobileMenuClick()} />
            </div>
            <Link href="/">
              <li>Trang Chủ</li>
            </Link>
            <Link href="/phim-tinh-cam">
              <li>Phim tình cảm</li>
            </Link>
            <Link href="/phim-vien-tuong">
              <li>Phim viễn tưởng</li>
            </Link>
            <Link href="/phim-hanh-dong">
              <li>Phim hành động</li>
            </Link>
            <Link href="/phim-vo-thuat">
              <li>Phim võ thuật</li>
            </Link>
            <Link href="/phim-kinh-di">
              <li>Phim Ma</li>
            </Link>
            <Link href="/phim-gia-dinh">
              <li>Phim gia đình</li>
            </Link>
            <Link href="/phim-co-trang">
              <li>Phim cổ trang</li>
            </Link>
            <Link href="/phim-khoa-hoc">
              <li>Phim khoa học</li>
            </Link>
            <Link href="/phim">
              <li>Thể Loại</li>
            </Link>
            <Link href="/phim">
              <li>Quốc gia</li>
            </Link>
            <Link href="/Thong-tin-tai-khoan">
              <li>Thông tin tài khoản</li>
            </Link>
          </ul>
        </div>
        <div className={SliderCSS.nav__backgroud}>
          <Navbar expand="lg">
            <Container fluid>
              <div className={SliderCSS.menu__header___container}>
                <ul className={SliderCSS.menunav__header___pc}>
                  <Link href="/">
                    <li>Trang chủ</li>
                  </Link>
                  <Link href="/phim-tinh-cam">
                    <li>Phim tình cảm</li>
                  </Link>
                  <Link href="/phim-vien-tuong">
                    <li>Phim viễn tưởng</li>
                  </Link>
                  <Link href="/phim-hanh-dong">
                    <li>Phim hành động</li>
                  </Link>
                  <Link href="/phim-vo-thuat">
                    <li>Phim võ thuật</li>
                  </Link>
                  <Link href="/phim-kinh-di">
                    <li>Phim Ma</li>
                  </Link>
                  <Link href="/phim-gia-dinh">
                    <li>Phim gia đình</li>
                  </Link>
                  <Link href="/phim-co-trang">
                    <li>Phim cổ trang</li>
                  </Link>
                  <Link href="/phim-khoa-hoc">
                    <li>Phim khoa học</li>
                  </Link>
                  {/* <Link href="#">
                    <li>Thể Loại</li>
                  </Link>
                  <Link href="#">
                    <li>Quốc gia</li>
                  </Link> */}
                </ul>
              </div>

              <Nav>
                <Nav.Link>
                  <CurrentTime />
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </>
    </header>
  );
};

export default Header;
