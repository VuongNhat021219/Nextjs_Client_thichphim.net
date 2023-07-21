import React, { useState, useRef } from "react";
import Movie from "./Movie";
import Row from "react-bootstrap/Row";

import MovieListCSS from "@/styles/_movielist.module.scss";
import { BiCameraMovie } from "react-icons/bi";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

export default function MovieList(props) {

  const movies = props.DataMovie;
  const title = props.title;
  const [rowSide, setRowSide] = useState(0);
  const numberRow = 375;

  const onClickRowLeft = () => {
    setRowSide((prevRowSide) => prevRowSide + numberRow);
  };

  const onClickRowRight = () => {
    setRowSide((prevRowSide) => prevRowSide - numberRow);
  };

  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  const handleMouseDown = (e) => {
    setIsDown(true);
    sliderRef.current.classList.add("active");
    const x = e.pageX || e.touches[0].pageX - sliderRef.current.offsetLeft;
    setStartX(x);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;

    const x = e.pageX || e.touches[0].pageX - sliderRef.current.offsetLeft;
    const dist = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - dist;
  };

  const handleMouseUp = () => {
    setIsDown(false);
    sliderRef.current.classList.remove("active");
  };
  return (
    <div className={MovieListCSS.move__list}>
      <div className={MovieListCSS.movie__list___top}>
        <div className={MovieListCSS.move__list___title}>
          <h3 className={MovieListCSS.move__list___title___name}>
            {" "}
            <BiCameraMovie className="icon__sz" />
            {title}
          </h3>
        </div>
        <div
          className={`${MovieListCSS.move__list___title___icon} ${
            props.PhimMoiCSS === undefined
              ? ""
              : props.PhimMoiCSS.move__list___title___icon
          }`}
        >
          <IoMdArrowDropleftCircle
            onClick={onClickRowLeft}
            className={MovieListCSS.move__list___title___icon___left}
          />
          ||
          <IoMdArrowDroprightCircle
            onClick={onClickRowRight}
            className={MovieListCSS.move__list___title___icon___right}
          />
        </div>
      </div>
      {/* movies */}
      <Row
        className={`${MovieListCSS.movie___row} ${
          props.PhimMoiCSS === undefined ? "" : props.PhimMoiCSS.movie___row
        }`}
      >
        <div
          ref={sliderRef}
          className={`${MovieListCSS.items} ${
            props.PhimMoiCSS === undefined ? "" : props.PhimMoiCSS.items
          } `}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleMouseUp}
        >
          {movies.map((movie, index) => (
            <div
              className={`${MovieListCSS.item} ${
                props.PhimMoiCSS === undefined ? "" : props.PhimMoiCSS.item
              } `}
              key={index}
            >
              <Movie
                PhimMoiCSS={props.PhimMoiCSS}
                rowSide={rowSide}
                movie={movie.movie}
                
              />
            </div>
          ))}
        </div>
      </Row>
    </div>
  );
}
