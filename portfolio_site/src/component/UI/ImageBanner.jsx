import React from "react";
import bannerImg from "../../assets/banner.jpg";

export default function ImageBanner() {
  return (
    <div className="imageBannerSection page-width">
      <div className="imagebnrflx">
        <div className="imgbnrlft">
          <div className="imgbnrtxt_container">
            <h5>WELCOME TO MY WORLD</h5>
            <h2>
              Hi, I’m <span style={{ color: "red" }}>Manan</span>
            </h2>
            <h3>A Professional Coder.</h3>
            <div className="imgbannerdescription">
              I approach web development as more than just writing code—I see it
              as designing clarity. Every line I write is aimed at reducing
              friction, guiding users naturally, and shaping experiences that
              feel effortless. I don’t build features just to add complexity,
              but to create interactions that are purposeful, intuitive, and
              meaningful.
            </div>
          </div>
        </div>
        <div className="imgbnrrght">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
}
