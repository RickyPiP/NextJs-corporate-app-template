import React from "react";
import tw from "twin.macro";
/** @jsxImportSource @emotion/react */

const HomepagePattern = () => {
  return (
    <div>
      <div tw="hidden sm:block sm:absolute sm:inset-0 pointer-events-none">
        <svg
          tw="absolute sm:bottom-0 sm:-mb-14 bottom-0 right-0 transform translate-x-1/2 md:mb-60 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
          width="364"
          height="384"
          viewBox="0 0 364 384"
          fill="none"
        >
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width="364"
            height="384"
            fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
          />
        </svg>
      </div>
    </div>
  );
};

export default HomepagePattern;
