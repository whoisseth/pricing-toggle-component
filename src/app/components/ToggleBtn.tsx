/** @format */

import clsx from "clsx";
import React from "react";

type PrcingType = {
  pricing: "annually" | "monthly";
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function ToggleBtn({ pricing, onClick }: PrcingType) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-6  rounded-full flex items-center p-1
    bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)]
    "
    >
      <div
        className={clsx("h-4 w-4 bg-white rounded-full transition-all ", {
          "translate-x-[calc(100%+6px)]": pricing === "monthly"
        })}
      />
      {/* translate-x-[calc(100%+6px)] */}
    </button>
  );
}
