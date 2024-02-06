"use client";

import Image from "next/image";
import starIcon from "@/assets/images/icon-star.svg";
import { overpass } from "@/utils/fonts";
import thanksIcon from "@/assets/images/illustration-thank-you.svg";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [rateValue, setRateValue] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [showSecondCard, setShowSecondCard] = useState(false);

  const handleSubmit = () => {
    if (rateValue) {
      setIsSubmit(true);
      setShowSecondCard(true);
    }
  };

  return (
    <section
      className={`bg-very-dark-blue min-h-screen ${overpass.className} whitespace-nowrap overflow-hidden transition-all flex items-center justify-center `}
    >
      <div
        className={`bg-dark-blue bg-opacity-65 w-[20%] px-5 py-6 rounded-2xl inline-block whitespace-normal transition-all ${
          showSecondCard ? "hidden" : ""
        }`}
      >
        <div
          className="bg-medium-grey bg-opacity-20 rounded-full"
          style={{ width: "2.3rem", padding: "0.6875rem" }}
        >
          <Image src={starIcon} alt="star-icon" />
        </div>
        <div className="flex flex-col  pt-6 gap-2">
          <h2 className="font-bold text-xl text-white">How did we do?</h2>
          <div className="flex flex-col gap-5">
            <p className=" text-xs text-light-grey leading-4">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="grid grid-cols-5 gap-3">
              {[1, 2, 3, 4, 5].map((value) => {
                return (
                  <div
                    key={value}
                    className={`grid place-content-center h-10 w-10 rounded-full cursor-pointer
                      transition-all text-xs ${
                        value === rateValue
                          ? "bg-orange text-white"
                          : "bg-medium-grey bg-opacity-15  text-light-grey hover:bg-light-grey hover:bg-opacity-70 hover:text-white"
                      }`}
                    onClick={() => setRateValue(value)}
                  >
                    {value}
                  </div>
                );
              })}
            </div>
            <div
              className=" text-center bg-orange rounded-2xl py-1 hover:bg-white  text-white
            hover:text-orange z-100 cursor-pointer transition-all"
              onClick={handleSubmit}
            >
              <button className=" uppercase z-1000 text-xs ">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`bg-dark-blue bg-opacity-65 w-[20%] px-5 py-9 rounded-2xl text-center gap-10 inline-block whitespace-normal transition-all ${
          showSecondCard ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-7">
          <div className="flex flex-col gap-6 items-center">
            <Image className="w-28" src={thanksIcon} alt="thankyou-icon" />
            <p
              className=" bg-medium-grey bg-opacity-15 px-3 py-1 rounded-2xl text-orange
            text-opacity-65 text-xs my-auto"
            >
              You selected {rateValue} out of 5
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className=" text-white text-xl">Thank you!</h2>
            <p className="text-light-grey text-xs">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
