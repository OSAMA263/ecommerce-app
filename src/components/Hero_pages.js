import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { imgHeroStyle } from "../App";
import placeholder from "../imgs/placeholder.png"

export default function Hero_pages({ url, cls }) {
  return (
    <LazyLoadImage
      src={url}
      effect="blur"
      className={cls}
      style={imgHeroStyle}
    />
  );
}
