import styled from "@emotion/styled";
import tw from "twin.macro";
/** @jsxImportSource @emotion/react */

type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  handleChange?: (e: any) => void;
  inputValue?: string;
  error?: any;
};

const Input = ({
  name,
  type,
  placeholder,
  handleChange,
  inputValue,
  error,
}: InputProps) => {
  return (
    <input
      css={[
        tw`py-2 px-3 rounded-md my-3 border border-gray-300 shadow-sm mb-3 w-full`,
        error && tw`border-red-500`,
      ]}
      value={inputValue}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
    ></input>
  );
};

export default Input;
