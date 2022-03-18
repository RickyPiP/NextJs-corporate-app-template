import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { Container } from "../container";
import Input from "../home-page/input";
import { PaddingWrapper } from "../padding-wrapper";
import { PurpleButton } from "../purple-button";
import axios from "axios";
import AlertMessage from "../../helper-functions/alert-message";

const Recovery = () => {
  const [email, setEmail] = useState();
  const [token, setToken] = useState<any>();
  const [error, setError] = useState<any>();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const search = async () => {
      await axios
        .post("http://35.233.55.158:7350/v1/auth/recover", {
          email: email,
        })
        .then(res => {
          axios.post("http://35.233.55.158:7350/v1/auth/verify", {
            type: "recovery",
            token: res.data.recovery_token,
          });
          setToken(res.data.recovery_token);
          setError("");
        })
        // aici o sa bagi ce-o zis popa
        .catch(function (error) {
          if (error.response) {
            setError(error.response.data.details[0].message);
            setToken(null);
          }
        });
    };
    search();
  };

  return (
    <div tw="bg-gray-100 text-black text-center mb-10">
      <div tw="p-10">
        <Container>
          <PaddingWrapper>
            <div tw="bg-white max-w-sm px-2 mx-auto p-10 rounded-lg">
              <h1 tw="font-bold text-4xl mb-3">Find your account</h1>
              <p>Please enter your email address for password recovery.</p>
              <div tw="max-w-sm mx-auto">
                <form onSubmit={handleSubmit}>
                  <Input
                    error={error}
                    inputValue={email}
                    handleChange={(e): any => {
                      setEmail(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                  ></Input>
                  <PurpleButton>Send recovery email</PurpleButton>
                  <div tw="mt-3">
                    {AlertMessage(
                      error,
                      "Cannot send recovery email",
                      token,
                      "Recovery email sent. Check your email."
                    )}
                    {token && (
                      <Link
                        to="/"
                        tw="text-white rounded-md p-1.5 hover:bg-indigo-500 bg-indigo-300 font-bold"
                      >
                        Go to homepage
                      </Link>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </PaddingWrapper>
        </Container>
      </div>
    </div>
  );
};

export default Recovery;
