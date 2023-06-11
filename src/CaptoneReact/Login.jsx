import React, { Component, useEffect } from "react";
import "./styles.css";
import userApi from "../services/userApi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import ReactFacebookLogin from "react-facebook-login";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await userApi.login(data);
      if (res.content) {
        localStorage.setItem("token", res.content.accessToken);
        localStorage.setItem("email", res.content.email);
        navigate("/info");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/info");
    }
  }, []);
  const responseFacebook = async (response) => {
    const res = await userApi.facebookLogin({
      facebookToken: response.accessToken,
    });
    console.log(res)
    localStorage.setItem("token", res.content.accessToken);
        localStorage.setItem("email", res.content.email);
        navigate("/info");
  };
  return (
    <div className="Content">
      <div className="TextContent">Login</div>
      <div className="Line"></div>
      <div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="EmailTextfield-Login">
              <div className="p-4">
                <label className="LabelEmail-Login">Email</label>
              </div>
              <input
                className="InputFieldEmail-Login"
                placeholder="email"
                {...register("email")}
              />
              <p></p>
            </div>
            <div>
              <div className="">
                <div className="Pad">
                  <label className="LabelPass-Login">Password</label>
                </div>
                <div>
                  <input
                    className="InputFieldPass-Login"
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                  />
                  <FontAwesomeIcon icon={faEye} className="PassEye-Login" />
                </div>
                <p></p>
              </div>
              <div className="TextLabel-Login">
                <Link to={"/register"}>Register now ?</Link>
                <button className="btn" type="submit">
                  <span>Get started</span>
                </button>
              </div>
              <div className="">
                <div className="ButtonLoginFacebook" type="">
                  <ReactFacebookLogin
                    appId="1422460155155913"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook}
                  />
                  {/* <FontAwesomeIcon
                    icon={faFacebook}
                    className="FacebookIcon-Login"
                  />
                  <p className="FacebookText-Login">Countinue with Facebook</p> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
