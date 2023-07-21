import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>
          Thích Phim | Phim Mới | Phim VietSub | Phim Chiếu Rạp | Phim Lẻ
        </title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
