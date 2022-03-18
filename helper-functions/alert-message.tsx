import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

const AlertMessage = (
  error: string,
  errorMsg: string,
  success?: string,
  successMsg?: string
) => {
  if (error) {
    return (
      <div tw="text-center text-red-500  font-bold mb-3">
        {errorMsg} : {error}
      </div>
    );
  } else if (success) {
    return (
      <div tw="text-center mb-3 text-indigo-500 font-bold">{successMsg}</div>
    );
  }
  return;
};

export default AlertMessage;
