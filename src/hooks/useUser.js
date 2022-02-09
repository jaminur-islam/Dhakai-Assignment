import { useState } from "react";

const useUser = () => {
  const loginUser = (data, navigate) => {
    fetch("https://devapi.dhakai.com/api/v2/login-buyer", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        auth: {
          email: data.email,
          deviceUuid: "f8bc7070-8979-11ec-8752-6b2d782166ad",
        },
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("token", result.result.token);
        if (result.statusCode === 200) {
          navigate("/");
        }
      });
  };

  return { loginUser };
};

export default useUser;
