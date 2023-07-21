import React from "react";
import { FaHome } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbCSS from "@/styles/_breadcrumb.module.scss";

export default function Breadcrumb(props) {
  const isLoading = props.isLoading;
  return (
    <>
      {isLoading === true ? (
        <div className={breadcrumbCSS.detail__content___breadcrumb}>
          {" "}
          <FaHome className="icon__sz" style={{ marginTop: "1px" }} />
          <span>Home</span>
          <FiChevronRight style={{ marginTop: "6px" }} />{" "}
          <span>{props.category}</span>
          <FiChevronRight style={{ marginTop: "6px" }} />
          <span className={breadcrumbCSS.detail__content___breadcrumb___span}>
            {props.name}
          </span>
        </div>
      ) : (
        <div className={breadcrumbCSS.detail__content___breadcrumb}>
          {" "}
          <FaHome className="icon__sz" style={{ marginTop: "1px" }} />
          <span>Home</span>
          <FiChevronRight style={{ marginTop: "6px" }} />{" "}
          <span>{props.category}</span>
          <FiChevronRight style={{ marginTop: "6px" }} />
          <span className={breadcrumbCSS.detail__content___breadcrumb___span}>
            {props.name}
          </span>
        </div>
      )}
    </>
  );
}
