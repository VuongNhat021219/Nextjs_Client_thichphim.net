import React, { useRef, useEffect } from "react";
import Image from "next/image";
import MovieCSS from "@/styles/_movie.module.scss";
import Link from "next/link";

export default function Movie(props) {
  const movie = props.movie;
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);

  useEffect(() => {
    if (headingRef1.current) {
      const headingValue = headingRef1.current.textContent;
      const scrollTextClassName = headingValue.length > 15 ? "scroll-text" : "";
      if (scrollTextClassName) {
        headingRef1.current.classList.add(scrollTextClassName);
      }
    }
    if (headingRef2.current) {
      const headingValue = headingRef2.current.textContent;
      const scrollTextClassName = headingValue.length > 15 ? "scroll-text" : "";
      if (scrollTextClassName) {
        headingRef2.current.classList.add(scrollTextClassName);
      }
    }
  }, []);

  return (
    <>
      <Link href={`/chi-tiet-phim/${movie.slug}`}>
        <div
          className={MovieCSS.bp__list}
          style={{ transform: `translateX(${props.rowSide}px)` }}
        >
          <div
            className={`${MovieCSS.bp__list___img} ${
              props.PhimMoiCSS === undefined
                ? ""
                : props.PhimMoiCSS.bp__list___img
            }`}
          >
            <Image
              src={`${movie.thumb_url}`}
              alt={movie.name}
              width={300}
              height={300}
            />
          </div>
          <div className={`${MovieCSS.bp__list___title} `}>
            <div
              className={`${MovieCSS.bp__list___title___EN} ${MovieCSS.scroll___container}`}
            >
              <h1
                className={`${
                  props.PhimMoiCSS === undefined
                    ? ""
                    : props.PhimMoiCSS.movie_bp__list___title___h1
                }`}
                ref={headingRef1}
              >
                {movie.origin_name}
              </h1>
            </div>
            <div
              className={`${MovieCSS.bp__list___title___VN} ${MovieCSS.scroll___container}`}
            >
              <h1
                className={`${
                  props.PhimMoiCSS === undefined
                    ? ""
                    : props.PhimMoiCSS.movie_bp__list___title___h1
                }`}
                ref={headingRef2}
              >
                {movie.name}
              </h1>
            </div>
          </div>
          <div className={MovieCSS.bp__list___ribbon}>
            <div className={MovieCSS.bp__list___ribbon___action}>
              {movie.quality}
            </div>
            <div className={MovieCSS.bp__list___ribbon___action}>
              {movie.lang}
            </div>
            <div className={MovieCSS.bp__list___ribbon___action}>
              {movie.year}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
