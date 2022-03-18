import styled from "@emotion/styled";
import tw from "twin.macro";
/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

export const AccessBtn = ({ handleClick, text }: any) => {
  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
        tw=" inline-flex max-h-[40px] whitespace-nowrap flex-shrink-0 resize-none flex-grow-0 items-center px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm font-semibold text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {text}
      </button>
    </div>
  );
};
