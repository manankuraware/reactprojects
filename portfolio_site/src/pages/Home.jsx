import React from "react";
import ImageBanner from "../component/UI/ImageBanner";
import { Multicolumn } from "../component/UI/Multicolumn";
import { CenterImageWithText } from "../component/UI/ImageWithText";

export const Home = () => {
  return (
    <>
      <ImageBanner />
      <Multicolumn />
      <CenterImageWithText />
    </>
  );
};
