import { useState } from "react";
import Swal from "sweetalert2";

const useUser = () => {
  const [error, setError] = useState("");
  const loginUser = (data, deviceUuid, navigate) => {
    fetch("https://devapi.dhakai.com/api/v2/login-buyer", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        auth: {
          email: data.email,
          deviceUuid: deviceUuid,
        },
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("token", result?.result.token);
        if (result.statusCode === 200) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login successfully",
          });
          navigate("/");
          setError("");
        } else {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "User Not Authorized",
          });
        }
      });
  };

  return { loginUser, error };
};

export default useUser;
