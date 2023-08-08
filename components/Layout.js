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
        {/* Chuyển đổi thẻ script sang JSX */}
        {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js" /> */}
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
