import React, { useEffect, useState, useContext } from "react";
import tw from "twin.macro";
import { PurpleButton } from "../purple-button";
import FormIcon from "./form-icon";
import Hr from "./horizontal-rule";
import Input from "./input";
/** @jsxImportSource @emotion/react */
import axios from "axios";
import AlertMessage from "../../helper-functions/alert-message";
import { AuthContext } from "../../context/auth-context";

const HomepageForm = () => {
  const { setAuth, auth } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const [errorPresent, setErrorPresent] = useState<any>();
  const [createSuccess, setCreateSuccess] = useState<any>();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const search = async () => {
      await axios
        .post("http://35.233.55.158:7350/v1/auth/signup", {
          email: user.email,
          password: user.password,
          password_confirmation: user.confirmPass,
        })
        .then(res => {
          axios
            .post("http://35.233.55.158:7350/v1/auth/verify", {
              type: "signup",
              token: res.data.confirmation_token,
            })
            .then(response => {
              setAuth(response.data.access_token);
            });
          setErrorPresent("");
          setCreateSuccess(true);

          // setAuth(res.data.confirmation_token);
        })

        //console.log(response)
        .catch(function (error) {
          if (error.response) {
            setErrorPresent(error.response.data.details[0].message);
          } else if (error.request) {
            console.log(error.request);
          }
        });
    };
    search();
  };

  return (
    <div tw="bg-white text-black relative mb-8 sm:mx-auto sm:rounded-lg sm:max-w-md  max-w-7xl flex-grow-0">
      <div tw="p-5">
        <span tw="text-sm font-medium text-gray-700"> Sign in with</span>
        <div tw="flex justify-between space-x-3">
          <FormIcon icon="bi:facebook" />
          <FormIcon icon="bi:twitter" />
          <FormIcon icon="bi:github" />
        </div>
        <Hr />
        <form onSubmit={handleSubmit}>
          <div tw="mb-4">
            <Input
              inputValue={user.email}
              type="text"
              placeholder="Email address"
              name="email"
              handleChange={(e): any => {
                setUser({ ...user, email: e.target.value });
              }}
              error={errorPresent}
            />
            <Input
              inputValue={user.password}
              name="password"
              type="password"
              placeholder="Enter your password"
              handleChange={(e): any => {
                setUser({ ...user, password: e.target.value });
              }}
              error={errorPresent}
            />
            <Input
              inputValue={user.confirmPass}
              name="password"
              type="password"
              placeholder="Re-Enter your password"
              handleChange={(e): any => {
                setUser({ ...user, confirmPass: e.target.value });
              }}
              error={errorPresent}
            />
          </div>
          <PurpleButton tw="mb-5">Create your account</PurpleButton>

          {AlertMessage(errorPresent, "Cannot create account")}
        </form>
      </div>
      <div tw="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10 sm:rounded-b-lg">
        <p tw="text-xs leading-5 text-gray-500">
          By signing up, you agree to our{" "}
          <a href="#" tw="font-medium text-gray-900 hover:underline">
            Terms
          </a>
          ,{" "}
          <a href="#" tw="font-medium text-gray-900 hover:underline">
            Data Policy
          </a>{" "}
          and{" "}
          <a href="#" tw="font-medium text-gray-900 hover:underline">
            Cookies Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default HomepageForm;
