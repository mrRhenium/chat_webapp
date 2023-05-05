"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import img from "../../../public/LOGO (2).png";
import style from "../../styles/SignIn.module.css";

const SignIn = () => {
  const [passwordIcon, set_passwordIcon] = useState(1);
  const [MSG, set_MSG] = useState({
    usernameMSG: "",
    emailMSG: "",
    passwordMSG: "",
  });

  const usernameChangeHandler = () => {
    if (username.value === "nit" || username.value === "") {
      set_MSG((pre) => ({
        ...pre,
        usernameMSG: "",
      }));
    } //
    else {
      set_MSG((pre) => ({
        ...pre,
        usernameMSG: "this username is arleady exist !",
      }));
    }
  };

  const emailChangeHandler = () => {
    const pattern = /^[\w.+\-]+@gmail\.com$/;
    let result = email.value.match(pattern);

    if (result || email.value === "") {
      set_MSG((pre) => ({
        ...pre,
        emailMSG: "",
      }));
    } //
    else {
      set_MSG((pre) => ({
        ...pre,
        emailMSG: "enter valid Gmail Id !",
      }));
    }
  };

  const passwordChangeHandler = () => {
    if (
      password.value === confirm_password.value ||
      confirm_password.value === ""
    ) {
      set_MSG((pre) => ({
        ...pre,
        passwordMSG: "",
      }));
    } //
    else {
      set_MSG((pre) => ({
        ...pre,
        passwordMSG: "password should be match !",
      }));
    }
  };

  return (
    <>
      <div className={style.signIn_page}>
        <div className={style.container}>
          {/*  */}

          {/* Sign In page Header Part Starts */}
          <section className={style.header}>
            <span className={style.logo_cover}>
              <Image
                src={img}
                alt="Picture of the author"
                width={200}
                height={200}
                className={style.logo}
              />
            </span>
            <h1 className={style.heading}>Sign In</h1>
          </section>
          {/* Sign In page Header Part Starts */}

          {/* Sign In page Body Part Starts */}
          <section className={style.body}>
            <div className={style.form}>
              {/* Sign In page Form Part Start */}
              <form action="">
                <label className={style.input_cover}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Name"
                    required
                  />
                  <AiOutlineUser className={style.input_icons} />
                </label>

                <label className={style.input_cover}>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="off"
                    placeholder="Username"
                    required
                    onChange={() => usernameChangeHandler()}
                  />
                  <AiOutlineUser className={style.input_icons} />
                </label>
                {MSG.usernameMSG === "" ? null : (
                  <strong>{MSG.usernameMSG}</strong>
                )}

                <label className={style.input_cover}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Email address"
                    required
                    onChange={() => emailChangeHandler()}
                  />
                  <AiOutlineMail className={style.input_icons} />
                </label>
                {MSG.emailMSG === "" ? null : <strong>{MSG.emailMSG}</strong>}

                <label className={style.input_cover}>
                  <input
                    type={passwordIcon ? "password" : "text"}
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Password"
                    required
                    onChange={() => passwordChangeHandler()}
                  />

                  {passwordIcon ? (
                    <FaRegEye
                      className={style.input_icons}
                      onClick={() => {
                        set_passwordIcon(!passwordIcon);
                      }}
                    />
                  ) : (
                    <FaRegEyeSlash
                      className={style.input_icons}
                      onClick={() => {
                        set_passwordIcon(!passwordIcon);
                      }}
                    />
                  )}
                </label>

                <label className={style.input_cover}>
                  <input
                    type={passwordIcon ? "password" : "text"}
                    name="confirm_password"
                    id="confirm_password"
                    autoComplete="off"
                    placeholder="Confirm password"
                    required
                    onChange={() => passwordChangeHandler()}
                  />

                  {passwordIcon ? (
                    <FaRegEye
                      className={style.input_icons}
                      onClick={() => {
                        set_passwordIcon(!passwordIcon);
                      }}
                    />
                  ) : (
                    <FaRegEyeSlash
                      className={style.input_icons}
                      onClick={() => {
                        set_passwordIcon(!passwordIcon);
                      }}
                    />
                  )}
                </label>
                {MSG.passwordMSG === "" ? null : (
                  <strong>{MSG.passwordMSG}</strong>
                )}

                <label className={style.input_cover}>
                  <button type="submit" className={style.signIn_page_btn}>
                    Sign In
                  </button>
                </label>
              </form>
              {/* Sign In page Form Part End */}

              {/* Sign In page Divider Part Start */}
              <span className={style.divider}>
                <span className={style.bar}></span>
                <span>OR</span>
                <span className={style.bar}></span>
              </span>
              {/* Sign In page Divider Part End*/}

              {/* Sign In page Google Sign In Part Start */}
              <div className={style.google_signIn_cover}>
                <button>
                  <FcGoogle className={style.google_signIn_icon} />
                  Continue with Google
                </button>
              </div>
              {/* Sign In page Google Sign In Part End */}
            </div>

            {/* Sign In page Footer Part Start */}
            <div className={style.footer}>
              <span>
                Already have an Account? <Link href={`/logIn`}>Log In</Link>
              </span>
            </div>
            {/* Sign In page Footer Part Ends */}
          </section>
          {/* Sign In page Body Part End */}

          {/*  */}
        </div>
      </div>
    </>
  );
};

export default SignIn;
