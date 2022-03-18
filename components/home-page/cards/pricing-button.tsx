import styled from "@emotion/styled";
import { Children } from "react";
import tw from "twin.macro";
/** @jsxImportSource @emotion/react */

// const StyledButton = styled.button<{ primary?: boolean }>`
//   ${tw`block  text-center rounded-lg  border shadow-md  border-transparent px-6 py-3 text-base font-medium text-indigo-600 w-full mx-auto hover:bg-white`} && {
//     ${({ primary }) =>
//       primary && tw`bg-indigo-600 text-white hover:bg-indigo-700`}
//   }
// `;

type PricingButtonProps = {
  children: React.ReactNode;
  primary?: boolean;
};

// export const PricingButton = ({ children, primary }: PricingButtonProps) => {
//   return (
//     <div>
//       <StyledButton primary={primary}>{children}</StyledButton>
//     </div>
//   );
// };

export const PricingButton = ({ primary, children }: PricingButtonProps) => {
  return (
    <div>
      <button
        css={[
          tw`block  text-center rounded-lg  border shadow-md  border-transparent px-6 py-3 text-base font-medium text-indigo-600 w-full mx-auto hover:bg-white`,
          primary && tw`bg-indigo-600 text-white hover:bg-indigo-700`,
        ]}
      >
        {children}
      </button>
    </div>
  );
};
