import React from "react";

function CategoryCard({ data }) {
  return (
    <div className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-2xl border-2 border-[#ff4d2d] shrink-0 overflow-hidden bg-white shadow-xl shadow-gray-200 hover:shadow-lg transition-shadow ">
      <img
        src={data.image}
        alt="image card"
        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
}

export default CategoryCard;
