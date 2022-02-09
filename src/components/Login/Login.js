import { IconButton, OutlinedInput } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useAuth from "../../hooks/useAuth";

const useFormStyle = makeStyles({
  // form header style
  main_header: {
    fontSize: "40px",
    padding: "10px 20px",
    "@media(max-width: 780px)": {
      fontSize: "30px",
      padding: "5px",
    },
    textAlign: "center",
    background: "#f2f2f2",

    margin: 0,
    boxShadow: "3px 1px 8px 1px #dddddd",
  },
  _form_header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& svg": {
      border: "1px solid #787E7C",
      color: "#737373",
      borderRadius: "50%",
      height: "18px",
      width: "18px",
    },
    "& h2": {
      color: "#181818",
    },
  },
  // form style
  _form: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    background: "#f2f2f2",
    boxShadow: "3px 1px 8px 1px #dddddd",
    padding: "30px",
    "@media(max-width: 780px)": {
      minWidth: "25px",
      padding: "15px",
    },
    rowGap: "10px",
    width: "320px",
    margin: "0 auto",
    "& input": {
      padding: "8px",
    },
    "& label": {
      fontWeight: "bold",
    },
  },

  checkbox: {
    color: "#0C82EC !important",
  },

  form_submit_btn: {
    color: "white",
    background: "#0085FF",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
  },
  form_divider: {
    margin: "15px 0px 15px 0px !important",
  },

  // Form footer style
  form_footer: {
    textAlign: "center",
    "& a": {
      textDecoration: "none",
      color: "#0085FF",
      fontWeight: "bold",
      margin: "5px 0px",
      display: "inline-block",
    },
  },
});

const Login = () => {
  const { loginUser } = useAuth();
  const classes = useFormStyle();
  const navigate = useNavigate();
  const [deviceUuid, setDeviceUuid] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    reset();
    loginUser(data, deviceUuid, navigate);
  };

  const [values, setValues] = useState(false);
  const handleShowPassword = () => {
    setValues(!values);
  };

  useEffect(() => {
    fetch("https://devapi.dhakai.com/api/v2/deviceuid")
      .then((res) => res.json())
      .then((result) => {
        setDeviceUuid(result?.result.deviceUuid);
      });
  }, []);

  return (
    <div>
      <h1 className={classes.main_header}> Dhakai Job Assignment </h1>
      <form className={classes._form} onSubmit={handleSubmit(onSubmit)}>
        <Box className={classes._form_header}>
          <h2> Log in </h2>
          <CloseIcon />
        </Box>
        <label htmlFor="email">Email</label>
        <OutlinedInput
          type="email"
          placeholder="Your email *"
          {...register("email", { required: true })}
        />
        <label htmlFor="email">Password</label>
        <OutlinedInput
          placeholder="Your email *"
          type={values ? "text" : "password"}
          {...register("password", { required: true })}
          endAdornment={
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleShowPassword}
              edge="end"
            >
              {values ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          }
        />
        <FormControlLabel
          control={<Checkbox defaultChecked className={classes.checkbox} />}
          label="Remember me"
        />

        <input
          type="submit"
          className={classes.form_submit_btn}
          value="Log in"
        />

        {/* form footer */}
        <div className={classes.form_footer}>
          <Link to="/forget"> Forget Password </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
