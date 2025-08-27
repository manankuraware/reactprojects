import React from "react";
import ImageBanner from "../component/UI/ImageBanner";
import { Tabination } from "../component/UI/Tabination";
import { ImageSlider } from "../component/UI/ImageSlider";

export const Home = () => {
  return (
    <>
      <ImageBanner />
      <Tabination />
      <ImageSlider />
    </>
  );
};
