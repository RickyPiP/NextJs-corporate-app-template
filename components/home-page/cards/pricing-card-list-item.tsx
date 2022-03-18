import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

type PricingCardProps = {
  text: string;
};

const PricingCardListItem = ({ text }: PricingCardProps) => {
  return (
    <li tw="flex items-start">
      <div tw="flex-shrink-0">
        <svg
          tw="flex-shrink-0 h-6 w-6 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <p tw="ml-3 text-base font-medium text-gray-500">{text}</p>
    </li>
  );
};

export default PricingCardListItem;
