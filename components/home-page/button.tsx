/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

const HomepageBtn = () => {
  return (
    <div tw="text-center md:text-left flex-shrink-0 flex-grow-0 resize-none">
      <div tw="inline-flex  items-center text-white bg-gray-900 mb-5 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
        <span tw="px-3 py-0.5 whitespace-nowrap text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
          We're hiring
        </span>
        <span tw="ml-4 text-sm whitespace-nowrap">
          Visit our collegues page
        </span>
        <div tw="flex items-center">
          <svg
            tw="ml-2 w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomepageBtn;
