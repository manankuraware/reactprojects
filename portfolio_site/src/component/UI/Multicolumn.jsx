import React from "react";

const items = [
  {
    image: "https://picsum.photos/id/180/300/200",
    title: "Frontend Development",
    description:
      "Crafting beautiful and responsive user interfaces with HTML, CSS, and JavaScript.",
  },
  {
    image: "https://picsum.photos/id/1/300/200",
    title: "Backend Development",
    description:
      "Building robust APIs and handling data using Node.js, Express, and databases.",
  },
  {
    image: "https://picsum.photos/id/29/300/200",
    title: "Version Control",
    description:
      "Collaborating with Git & GitHub to manage code efficiently and track changes.",
  },
  {
    image: "https://picsum.photos/id/1005/300/200",
    title: "Problem Solving",
    description:
      "Writing efficient algorithms and solving coding challenges to improve logic.",
  },
];

export const Multicolumn = () => {
  return (
    <div className="page-width">
      <div className="four-col-container">
        {items.map((itm, index) => (
          <div className="four-col-item" key={index}>
            <img src={itm.image} alt={itm.title} className="four-col-img" />
            <h3>{itm.title}</h3>
            <p>{itm.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
