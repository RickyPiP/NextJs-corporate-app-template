import React, { useContext, useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import axios from "axios";
import { AuthContext } from "../../context/auth-context";

type SupportProps = {
  children: React.ReactNode;
};

const SupportComponent = ({ children }: SupportProps) => {
  const { auth } = useContext(AuthContext);
  const [user, setUser] = useState();
  useEffect(() => {
    const search = async () => {
      await axios
        .get(
          "http://35.233.55.158:7350/v1/auth/user",

          {
            headers: {
              authorization: `bearer ${auth}`,
            },
          }
        )
        .then(res => {
          const response = res.data.email;
          const name = response.substring(0, response.lastIndexOf("@"));
          setUser(name);
        });
      // .catch(function (error) {
      //   if (error.response) {
      //     setError(error.response.data.details[0].message);
      //   }
      // });
    };
    search();
  }, [auth]);

  return (
    <div tw="flex  justify-between items-center space-x-2 ml-3 ">
      {/* <div onClick={handleSubmit}>Aici submit</div> */}
      <div tw="font-medium">{user}</div>
      <div tw=" resize-none flex-shrink-0">
        <img
          tw="inline-block h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
          alt=""
        />
      </div>
      {children}
    </div>
  );
};

export default SupportComponent;
