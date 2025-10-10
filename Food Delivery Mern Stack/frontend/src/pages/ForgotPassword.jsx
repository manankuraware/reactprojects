import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  return (
    <div className="flex w-full items-center justify-center min-h-screen p-4 bg-[#fff9f6]">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 ">
        <div className="flex items-center gap-4 mb-4">
          <IoIosArrowBack />
          <h1 className="text-2xl font-bold text-center text-[#ff4d2d] ">
            Forgot Password
          </h1>
        </div>
        {step == 1}
      </div>
    </div>
  );
}
