import React, { useEffect, useState } from "react";
import userApi from "../services/userApi";
import { useForm } from "react-hook-form";
import Layout from "../Layout";

export default function Profile() {
  const [infor, setInfor] = useState();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await userApi.getInfo();
        console.log(res.content);
        setInfor(res.content);
        reset({
          email: res.content.email,
          password: res.content.password,
          name: res.content.name,
          gender: res.content.gender,
          phone: res.content.phone,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getInfo();
  }, []);

  const gender = getValues("gender");
  const onSubmit = async (data) => {
    try {
      const res = await userApi.update(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout disableFooter>
      <div className="ContentProfile">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="TextContent-Profile">Profile</div>
          <div>
            <div className="ImportFile-img">
              <img
                src={infor?.avatar}
                alt=""
                style={{ height: "200px", width: "200px" }}
              />
            </div>
            <div className="TextfieldEmail-Profile">
              <div className="p-4">
                <label className="LabelEmail-Profile">Email</label>
              </div>
              <div>
                <input
                  className="InputFieldEmail-Profile"
                  placeholder="email"
                  {...register("email")}
                />
              </div>
              <p></p>
            </div>
            <div className="TextfieldPhone-Profile">
              <div className="p-4">
                <label className="LabelEmail-Profile">Phone</label>
              </div>
              <div>
                <input
                  className="InputFieldPhone-Profile"
                  placeholder="phone"
                  {...register("phone")}
                />
              </div>
              <p></p>
            </div>
            <div className="TextfieldName-Profile">
              <div className="p-4">
                <label className="LabelName-Profile">Name</label>
              </div>
              <div>
                <input
                  className="InputFieldName-Profile"
                  placeholder="name"
                  {...register("name")}
                />
              </div>
              <p></p>
            </div>
            <div className="TextfieldPass-Profile">
              <div className="p-4">
                <label className="LabelPass-Profile">Password</label>
              </div>
              <div>
                <input
                  className="InputFieldPass-Profile"
                  placeholder="password"
                  {...register("password")}
                />
              </div>
              <p></p>
            </div>
            <div className="TextfieldGender-Profile">
              <div className="p-4">
                <label className="LabelGender-Profile">Gender</label>
                <div className="ButtonGender-Profile">
                  <div className="radio-input">
                    <input
                      type="radio"
                      id="value-1"
                      name="value-radio"
                      value={true}
                      defaultChecked={gender}
                      {...register("gender")}
                    />
                    <label htmlFor="value-1">Male</label>
                    <input
                      type="radio"
                      id="value-2"
                      value={false}
                      defaultChecked={!gender}
                      name="value-radio"
                      {...register("gender")}
                    />
                    <label htmlFor="value-2">Femail</label>
                  </div>
                </div>
              </div>
              <div className="ButtonUpdate-Profile">
                <button className="btn" type="submit">
                  <span>Update</span>
                </button>
              </div>
            </div>
            <div className="Line-Profile"></div>
            <div>
              <div className="Line1-Profile"></div>
              <div className="Line2-Profile"></div>
              <div className="Line3-Profile"></div>
              <div className="Line4-Profile"></div>
              <div className="Line5-Profile"></div>
              <label className="Order">Order Hitory</label>
              <label className="FaVourite">FaVourite</label>
            </div>
            <div></div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
