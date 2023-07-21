import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
