import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledSpan = styled.span(tw` text-gray-400 hover:text-gray-200`);

type IconProps = {
  icon: string;
};

const FooterIcon = ({ icon }: IconProps) => {
  return (
    <div>
      <StyledSpan
        className="iconify"
        data-icon={icon}
        data-width="20"
        data-height="20"
      ></StyledSpan>
    </div>
  );
};

export default FooterIcon;
