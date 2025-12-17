import React from "react";

function OwnerItemcard({ data }) {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden border border-[#ff4d2d] w-full max-w-2xl p-1">
      <div className="w-36 h-full flex-shrink-0 bg-gray-50">
        <img src={data.image} alt="" className="w-full h-auto object-cover block" />
      </div>

      <div className="flex flex-col justify-between flex-1 pl-3">
        <div>
          <h2 className="text-base font-semibold text-[#ff4d2d]">
            {data.name}
          </h2>
          <p>
            <span className="font-medium text-gray-700">Category:</span>
            {data.category}
          </p>
          <p>
            <span className="font-medium text-gray-700">Food Type:</span>
            {data.foodType}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OwnerItemcard;
