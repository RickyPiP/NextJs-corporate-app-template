/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import tw from "twin.macro";
import "twin.macro";
import { Container } from "../container";

type FooterProps = {
  data: string[];
  title: string;
};

const List = ({ data, title }: FooterProps) => {
  const mappedData = data.map(item => {
    return (
      <li
        key={item}
        tw="text-base text-gray-300 hover:text-white hover:cursor-pointer"
      >
        {item}
      </li>
    );
  });
  return (
    <Container>
      <div tw="p-5">
        <h3 tw="text-sm font-semibold text-gray-400 tracking-wider uppercase">
          {title}
        </h3>
        <ul role="list" tw="mt-4 space-y-4">
          {mappedData}
        </ul>
      </div>
    </Container>
  );
};

export default List;
