"use client";

import Image from "next/image";
import starIcon from "@/assets/images/icon-star.svg";
import { overpass } from "@/utils/fonts";
import thanksIcon from "@/assets/images/illustration-thank-you.svg";
import { useState } from "react";

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
      className={`bg-very-dark-blue min-h-screen ${overpass.className} flex items-center justify-center`}
    >
      <div className="px-7 py-8 rounded-3xl bg-dark-blue bg-opacity-65 whitespace-normal">
        {!showSecondCard && (
          <>
            <div className="w-full max-w-xs">
              <div className="flex items-center justify-center w-11 h-11 bg-medium-grey bg-opacity-20 rounded-full mb-8">
                <Image src={starIcon} alt="star-icon" />
              </div>
              <h2 className="font-bold text-2xl text-white mb-2">
                How did we do?
              </h2>
              <p className=" text-sm text-light-grey leading-5 mb-6">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
              <div className="grid grid-cols-5 gap-3">
                {[1, 2, 3, 4, 5].map((value) => (
                  <div
                    key={value}
                    className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-all text-xs ${
                      value === rateValue
                        ? "bg-orange text-white"
                        : "bg-medium-grey bg-opacity-15 text-light-grey hover:bg-light-grey hover:bg-opacity-70 hover:text-white"
                    }`}
                    onClick={() => setRateValue(value)}
                  >
                    {value}
                  </div>
                ))}
              </div>
              <div
                className="text-center mt-6 rounded-3xl bg-orange text-white hover:bg-white hover:text-orange "
                onClick={handleSubmit}
              >
                <button className="uppercase text-xs px-4 py-3 transition-all">
                  Submit
                </button>
              </div>
            </div>
          </>
        )}
        {showSecondCard && (
          <div className="w-full max-w-xs mb-4">
            <div className="flex flex-col items-center gap-6 mt-3">
              <Image className="w-28" src={thanksIcon} alt="thankyou-icon" />
              <p className="bg-medium-grey bg-opacity-15 px-3 py-1 rounded-2xl text-orange text-opacity-75 text-sm mt-2">
                You selected {rateValue} out of 5
              </p>
            </div>
            <div className="flex flex-col gap-2 text-center mt-7">
              <h2 className="text-white font-bold text-2xl">Thank you!</h2>
              <p className="text-light-grey text-sm leading-6">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
