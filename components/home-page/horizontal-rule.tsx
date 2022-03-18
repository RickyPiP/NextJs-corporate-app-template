import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
const Hr = () => {
  return (
    <div>
      <div tw="mt-4 relative mb-2">
        <div tw="absolute inset-0 flex items-center" aria-hidden="true">
          <div tw="w-full border-t border-gray-300"></div>
        </div>
        <div tw="relative flex justify-center text-sm">
          <span tw="px-2 bg-white text-gray-500"> Or </span>
        </div>
      </div>
    </div>
  );
};

export default Hr;
