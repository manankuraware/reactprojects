import React from "react";
import { ImageSlider } from "../component/UI/ImageSlider";

const slides = [
  {
    image: "https://picsum.photos/id/1015/800/400",
    title: "Web Developer",
    description:
      "Creative and detail-oriented web developer with a passion for building user-friendly, responsive, and visually engaging digital experiences. Skilled in modern web technologies, problem-solving, and turning ideas into interactive solutions.",
  },
  {
    image: "https://picsum.photos/id/1016/800/400",
    title: "Frontend Developer",
    description:
      "Specialized in creating responsive, accessible, and user-friendly web interfaces using modern technologies. Passionate about clean design, seamless user experiences, and writing efficient code that brings ideas to life.",
  },
  {
    image: "https://picsum.photos/id/1018/800/400",
    title: "React.js Developer",
    description:
      "Versatile developer skilled in both frontend and backend development. Experienced in building scalable applications, integrating APIs, and delivering end-to-end digital solutions that are secure, reliable, and visually engaging.",
  },
  {
    image: "https://picsum.photos/id/1021/800/400",
    title: "Software Developer",
    description:
      "Versatile developer skilled in both frontend and backend development. Experienced in building scalable applications.",
  },
];

export const Blog = () => {
  return (
    <>
      <ImageSlider>
        {slides.map((image, index) => {
          return (
            <div className="cust-image-relative">
              <img key={index} src={image.image} alt={image.title} />
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
