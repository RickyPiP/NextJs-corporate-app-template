import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

type ContentProps = {
  title: string;
  text: string;
  primary?: boolean;
};

const Content = ({ title, text, primary }: ContentProps) => {
  return (
    <div css={[tw`py-5`, primary && tw`text-center mb-10`]}>
      <h1 tw="text-3xl font-extrabold text-white tracking-tight sm:text-4xl mb-2">
        {title}
      </h1>
      <p tw="text-xl text-gray-300">{text}</p>
    </div>
  );
};

export default Content;

// export const PricingButton = ({ primary, children }: PricingButtonProps) => {
//   return (
//     <div>
//       <button
//         css={[
//           tw`block  text-center rounded-lg  border shadow-md  border-transparent px-6 py-3 text-base font-medium text-indigo-600 w-full mx-auto hover:bg-white`,
//           primary && tw`bg-indigo-600 text-white hover:bg-indigo-700`,
//         ]}
//       >
//         {children}
//       </button>
//     </div>
//   );
// };
