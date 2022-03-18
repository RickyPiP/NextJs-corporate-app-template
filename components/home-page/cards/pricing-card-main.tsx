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
    <div tw="max-w-sm sm:max-w-md mx-auto mb-5  border-indigo-500 border-2 lg:border-4 rounded-lg relative flex-shrink-0 resize-none lg:z-10">
      <div tw="absolute inset-x-0 top-0 transform translate-y-px z-20">
        <div tw="flex justify-center transform -translate-y-1/2">
          <span tw="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
            {" "}
            Most popular{" "}
          </span>
        </div>
      </div>
      <div tw="bg-white rounded-md relative">
        <div tw="mb-5 pb-10 py-8 z-0">
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
            <PricingCardListItem text="Lorem ipsum contecteur vasis" />
            <PricingCardListItem text="Dolor sit emet adipisicing " />
            <PricingButton primary>Start your trial</PricingButton>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
