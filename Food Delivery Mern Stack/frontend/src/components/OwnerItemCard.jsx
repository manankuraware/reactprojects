import React from "react";
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
// import { useNavigate } from "react-router";

function OwnerItemcard({ data }) {
  // const navigate = useNavigate();
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden border border-[#ff4d2d] w-full max-w-2xl p-1">
      <div className="w-36 h-full flex-shrink-0 bg-gray-50">
        <img
          src={data.image}
          alt=""
          className="w-full h-auto object-cover block"
        />
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
        <div className="flex items-center justify-between">
          <div className="text-[#ff4d2d] font-bold">{data.price}</div>
          <div className="flex gap-2 items-center">
            <div className="p-2 rounded-full hover:bg-[#ff4d2d]/10 text-[#ff4d2d] cursor-pointer">
              <FaPen size={16} />
            </div>

            <div className="p-2 rounded-full hover:bg-[#ff4d2d]/10 text-[#ff4d2d] cursor-pointer">
              <FaTrashAlt size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerItemcard;
