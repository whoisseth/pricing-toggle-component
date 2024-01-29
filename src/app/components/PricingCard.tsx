/** @format */

import { cn } from "@/utils/cn";
import React from "react";

type SubscriptionPlan = {
  name: string;
  monthlyPrice?: number | null;
  annuallyPrice?: number | null;
  storage: string;
  usersAllowed: number;
  sendLimit: string;
};

export default function PricingCard(props: SubscriptionPlan) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg flex flex-col gap-5 items-center p-4  shadow-sm ",
        {
          "bg-gradient-to-b from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] text-white md:scale-105 md:pb-8 ":
            props.name == "Professional"
        }
      )}
    >
      <p
        className={cn("font-bold text-sm text-grayish-Blue", {
          " text-white ": props.name == "Professional"
        })}
      >
        {props.name}
      </p>
      <p
        className={cn(
          "font-bold text-dark-Grayish-Blue text-4xl flex gap-2 items-center",
          {
            " text-white ": props.name == "Professional"
          }
        )}
      >
        <span className="text-xl">$</span>
        <span className="text-4xl">
          {props.annuallyPrice || props.monthlyPrice}
        </span>
      </p>

      <section
        className={cn(
          "text-grayish-Blue text-xs font-semibold flex flex-col items-center text-center",
          {
            " text-white ": props.name == "Professional"
          }
        )}
      >
        <p className="border-t-2 py-3  w-[230px]"> {props.storage} Storage </p>
        <p className="border-t-2 py-3  w-[230px]">
          {props.usersAllowed} Users Allowed
        </p>
        <p className="border-y-2 py-3  w-[230px]">
          Send up to {props.sendLimit}
        </p>
      </section>

      <button
        className={cn(
          "w-full bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] rounded-lg text-white text-xs font-semibold  py-2 hover:ring-1 hover:ring-[hsl(237,63%,64%)] hover:from-white hvoer:to-white hover:text-[hsl(237,63%,64%)]  transition-all ",
          {
            " text-[hsl(237,63%,64%)] bg-gradient-to-r from-white to-white hover:from-[hsl(236,72%,79%)] hoer:to-[hsl(237,63%,64%)] hover:text-white  ":
              props.name == "Professional"
          }
        )}
      >
        LEARN MORE
      </button>
    </div>
  );
}
