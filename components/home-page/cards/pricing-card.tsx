import React from "react";
import tw from "twin.macro";
import { PricingButton } from "./pricing-button";
import PricingCardListItem from "./pricing-card-list-item";

/** @jsxImportSource @emotion/react */

type PricingCardProps = {
  title: string;
  price: string;
};

const PricingCard = ({ title, price }: PricingCardProps) => {
  return (
    <div tw="mx-12 lg:mx-0 mb-5  max-w-sm mx-auto resize-none  flex-shrink-0 lg:-mx-6 ">
      <div tw="bg-white rounded-lg relative lg:w-[340px]">
        <div tw="mb-5 pb-10 py-4">
          <h3
            tw="text-center text-2xl font-medium text-gray-900"
            id="tier-hobby"
          >
            {title}
          </h3>
          <div tw="mt-4 flex items-center justify-center">
            <span tw="px-3 flex items-start text-6xl tracking-tight text-gray-900">
              <span tw="mt-2 mr-2 text-4xl font-medium"> $ </span>
              <span tw="font-extrabold"> {price} </span>
            </span>
            <span tw="text-xl font-medium text-gray-500"> /month </span>
          </div>
        </div>
        <div tw="bottom-0 w-full rounded-b-lg">
          <ul tw="space-y-4 px-5 border-t-2 border-gray-100 p-6 bg-gray-50 p-8 sm:p-12 lg:p-6 xl:p-10 rounded-b-lg">
            <PricingCardListItem text="Lorem ipsum dolor sit amet consectetur " />
            <PricingCardListItem text="Consectur dolor sit emet dolor amet" />
            <PricingCardListItem text="Dolor sit emet adipisicing elit" />
            <PricingButton>Start your trial</PricingButton>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
