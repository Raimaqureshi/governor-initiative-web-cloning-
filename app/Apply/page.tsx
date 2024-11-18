"use client";

import React, { useState } from "react";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaCheck } from "react-icons/fa";
import Link from "next/link";

export default function Apply() {
  const [step, setStep] = useState(1); 
  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Before continuing to the application, please subscribe on these social media platforms.
      </h1>

      <div className="flex flex-col items-center space-y-4">
      
        {step === 1 && (
          <button
            onClick={() => {
              window.open("https://www.facebook.com/search/top?q=kamran%20tessori", "_blank"); 
              handleNextStep();
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            <FaFacebook size={24} />
            <span>Subscribe on Facebook</span>
          </button>
        )}

       
        {step === 2 && (
          <button
            onClick={() => {
              window.open("https://www.youtube.com/@KamranTessorikk", "_blank");
              handleNextStep(); 
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
          >
            <FaYoutube size={24} />
            <span>Subscribe on YouTube</span>
          </button>
        )}

       
        {step === 3 && (
          <button
            onClick={() => {
              window.open("https://x.com/KamranTessoriPk?t=56TDQcydKd2hThzjGoS-pA&s=08", "_blank"); 
              handleNextStep();
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-500"
          >
            <FaTwitter size={24} />
            <span>Subscribe on Twitter</span>
          </button>
        )}

        {step === 4 && (
          <button
            onClick={() => {
              window.open("https://www.instagram.com/kamrantessoripk/?hl=en", "_blank"); 
              handleNextStep(); 
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600"
          >
            <FaInstagram size={24} />
            <span>Subscribe on Instagram</span>
          </button>
        )}
      </div>


      {step > 4 && (
        <div className="mt-6 flex flex-col items-center">
          <FaCheck size={40} className="text-green-500 mb-4" />
          <Link href="/Apply/form">
          <button
            className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700"
          >
            Continue
          </button>
          </Link>
         
        </div>
      )}
      <p className="mt-3 text-sm">Already applied? <span className="cursor-pointer text-blue-600 underline">Get Admit Card</span></p>
    </div>
  );
}
