import React from "react";
import tw from "twin.macro";
import HomepageBtn from "./button";

/** @jsxImportSource @emotion/react */

const HomepageText = () => {
  return (
    <div tw="md:mt-12 z-10">
      <div tw="mb-10 sm:text-center lg:text-left flex-shrink-0 resize-none ">
        <HomepageBtn />
        <h1 tw="text-center md:text-left text-4xl tracking-tight font-extrabold text-white mb-4  sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
          <span tw="md:block">Data to enrich your </span>
          <span tw="text-indigo-400 md:block">online business</span>
        </h1>
        <p tw="text-base font-medium mb-4 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi at
          eum, molestiae aperiam cumque omnis exercitationem, magni quia id
          blanditiis pariatur esse dolore corporis debitis officiis ipsam quasi
          non doloremque.
        </p>
        <span tw="font-medium">USED BY</span>
        <div tw="mt-5 w-full ">
          <div tw="flex items-start justify-between sm:justify-center sm:space-x-12 sm:items-center sm:flex-shrink-0 lg:justify-start">
            <div tw="flex justify-center px-1">
              <img
                tw="h-9 sm:h-10 "
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div tw="flex justify-center px-1">
              <img
                tw="h-9 sm:h-10"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
            <div tw="flex justify-center px-1">
              <img
                tw="h-9 sm:h-10"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageText;
