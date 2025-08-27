import React, { useEffect, useState } from "react";

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

export const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  //   autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  });

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };
  return (
    <div className="custom-slider-wrapper">
      <div className="cust-slider-imagefull">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="cust-slider-img"
        />
        <div className="page-width">
          <div className="cust-slider-txt">
            <h2>{slides[current].title}</h2>
            <p>{slides[current].description}</p>
          </div>
          <div className="cust-sliderbtns">
            <button onClick={prevSlide} className="cust-slider-btn">
              Prev
            </button>
            <button onClick={nextSlide} className="cust-slider-btn">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
