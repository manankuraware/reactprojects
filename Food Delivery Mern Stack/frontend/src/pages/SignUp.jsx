import React from "react";

export const SignUp = () => {
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-[1px]`}
        style={{ borderColor: borderColor }}
      >
        <h1 className="font-bold mb-2 text-3xl p-1 hover:text-[#e64323] transition duration-200 text-[#ff4d2d]">
          Vingo
        </h1>
        <p className="text-gray-600 mb-8 mt-2">
          Sign up today and enjoy quick, easy, and reliable food delivery right
          at your fingertips. Explore a wide variety of restaurants and
          cuisines, place your order in seconds, and track it in real time.
        </p>
        {/* full name  */}
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-1"
          >
            Full Name :
          </label>
          <input
            id="fullName"
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-amber-500"
            placeholder="Enter Your Full Name"
            style={{ border: `1px solid ${borderColor}` }}
          />
        </div>
        {/* email  */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Email :
          </label>
          <input
            id="email"
            type="email"
            className="w-full border rounded-lg px-3 py-2 focus:outline-amber-500"
            placeholder="Enter Your Email"
            style={{ border: `1px solid ${borderColor}` }}
          />
        </div>
        {/* mobile number */}
      </div>
    </div>
  );
};
