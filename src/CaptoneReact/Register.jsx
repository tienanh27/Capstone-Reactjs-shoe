import React, { useEffect } from "react";
import "./styles.css";
import userApi from "../services/userApi";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await userApi.register(data);
      console.log(res);
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
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Content">
        <div className="TextContent">Register</div>
        <div className="Line"></div>
        <div className="">
          <div className="">
            <div className="TextfieldEmail-Register">
              <div className="p-4">
                <label className="LabelEmail-Register">Email</label>
              </div>
              <input
                className="InputFieldEmail-Register"
                placeholder="email"
                {...register("email")}
              />
              <p></p>
            </div>
            <div>
              <div className="Pad">
                <label className="LabelPass-Register">Password</label>
              </div>
              <div>
                <input
                  className="InputFieldPass-Register"
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                />
                <FontAwesomeIcon icon={faEye} className="PassEye-icon" />
              </div>
              <p></p>
            </div>

            <div className="TextfieldName-Register">
              <div className="p-4">
                <label className="LabelName-Register">Name</label>
              </div>
              <div>
                <input
                  className="InputFieldName-Register"
                  placeholder="name"
                  {...register("name")}
                />
              </div>
              <p></p>
            </div>
            <div className="TextfieldPhone-Register">
              <div className="Pad">
                <label className="LabelPhone-Register">Phone</label>
              </div>
              <div>
                <input
                  className="InputFieldPhone-Register"
                  placeholder="phone"
                  {...register("phone")}
                />
              </div>
              <p></p>
            </div>
            <div className="TextfieldGender-Register">
              <div className="p-4">
                <label className="LabelGender-Register">Gender</label>
                <div className="Button-Gender">
                  <div className="radio-input">
                    <input
                      type="radio"
                      id="value-1"
                      value={true}
                      name="value-radio"
                      defaultValue="value-1"
                      {...register("gender")}
                    />
                    <label htmlFor="value-1">Male</label>
                    <input
                      type="radio"
                      id="value-2"
                      value={false}
                      name="value-radio"
                      defaultValue="value-2"
                      {...register("gender")}
                    />
                    <label htmlFor="value-2">Femail</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="TextfieldButton-Submit">
              <div className="submit-button">
                <button class="comic-button" type="submit">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
