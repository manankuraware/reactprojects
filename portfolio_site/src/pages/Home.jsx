import React from "react";
import ImageBanner from "../component/UI/ImageBanner";
import { Tabination } from "../component/UI/Tabination";
import { ImageSlider } from "../component/UI/ImageSlider";

const slides = [
  {
    image: "https://picsum.photos/id/1015/800/400",
    title: "Beautiful Mountain",
    description: "Experience the serenity of untouched nature.",
  },
  {
    image: "https://picsum.photos/id/1016/800/400",
    title: "Peaceful Lake",
    description: "Calm waters reflecting the evening sky.",
  },
  {
    image: "https://picsum.photos/id/1018/800/400",
    title: "Sunny Forest",
    description: "Walk through the lush green pathways.",
  },
  {
    image: "https://picsum.photos/id/1021/800/400",
    title: "Golden Desert",
    description: "Feel the warmth of golden sand dunes.",
  },
];

export const Home = () => {
  return (
    <>
      <ImageBanner />
      <Tabination />
      <ImageSlider>
        {slides.map((image, index) => {
          return (
            <div className="cust-image-relative">
              <img key={index} src={image.image} alt={image.title} loading="lazy" />
              <div className="page-width">
                <div className="cust-imagabs">
                  <h2>{image.title}</h2>
                  <p>{image.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </ImageSlider>
    </>
  );
};
