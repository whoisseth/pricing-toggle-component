/** @format */
"use client";
import Image from "next/image";

import bgTop from "@/images/bg-top.svg";
import bgBottom from "@/images/bg-bottom.svg";
import ToggleBtn from "./components/ToggleBtn";

import { useState } from "react";
import PricingCard from "./components/PricingCard";

const subscriptionPlans = [
  {
    name: "Basic",
    monthlyPrice: 19.99,
    annuallyPrice: 199.99,
    storage: "500 GB",
    usersAllowed: 2,
    sendLimit: "3 GB"
  },
  {
    name: "Professional",
    monthlyPrice: 24.99,
    annuallyPrice: 249.99,
    storage: "1 TB",
    usersAllowed: 5,
    sendLimit: "10 GB"
  },
  {
    name: "Master",
    monthlyPrice: 39.99,
    annuallyPrice: 399.99,
    storage: "2 TB",
    usersAllowed: 10,
    sendLimit: "20 GB"
  }
];

// Accessing data example:
console.log(subscriptionPlans[0].name); // Output: Basic
console.log(subscriptionPlans[1].monthlyPrice); // Output: 24.99

export default function Home() {
  const [currentPricing, setCurrentPricing] = useState<"annually" | "monthly">(
    "annually"
  );

  function handleToggle() {
    if (currentPricing === "annually") {
      setCurrentPricing("monthly");
    }
    if (currentPricing === "monthly") {
      setCurrentPricing("annually");
    }
  }

  return (
    <div className="bg-very-Light-Grayish-Blue min-h-screen w-full flex justify-center items-center relative p-4">
      {/* bg images */}
      <BgImages />
      {/* main */}
      <main className="flex flex-col items-center gap-8 z-10 ">
        {/* heading */}
        <h2 className="font-bold text-grayish-Blue  text-2xl"> Our Pricing</h2>
        {/* toggle container */}
        <div className="flex gap-6 text-light-Grayish-Blue font-semibold text-sm">
          <p className="">Annually</p>
          <ToggleBtn onClick={handleToggle} pricing={currentPricing} />
          <p>Monthly</p>
        </div>
        {/* cards  */}
        <section className="flex gap-5 md:gap-0 transition-all flex-col md:flex-row ">
          {subscriptionPlans.map((d, i) => (
            <PricingCard
              annuallyPrice={
                currentPricing === "annually" ? d.annuallyPrice : null
              }
              monthlyPrice={
                currentPricing === "monthly" ? d.monthlyPrice : null
              }
              name={d.name}
              sendLimit={d.sendLimit}
              storage={d.storage}
              usersAllowed={d.usersAllowed}
              key={i}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

// ​subscriptionType
function BgImages() {
  return (
    <div className=" ">
      {/* <div> */}
      <Image
        src={bgTop}
        className="absolute  h-full max-h-[400px]  w-auto top-0 right-0"
        alt="bg-top"
      />
      <Image
        className="absolute h-full max-h-[200px] w-auto bottom-0 left-0"
        src={bgBottom}
        alt="bg-bottom"
      />
    </div>
  );
}
