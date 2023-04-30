"use client";

import Link from "next/link";
import style from "../../styles/SignIn.module.css";
import {
  AiOutlineUser,
  AiOutlineMail,
  FaRegEye,
  FcGoogle,
  FaRegEyeSlash,
} from "react-icons/all";
import { useState } from "react";

const SignIn = () => {
  const [passwordIcon, set_passwordIcon] = useState(1);

  return (
    <>
      <div className={style.signIn_page}>
        <div className={style.container}>
          {/*  */}

          {/* Sign In page Header Part Starts */}
          <section className={style.header}>
            <span className={style.logo_cover}></span>
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
                  />
                  <AiOutlineUser className={style.input_icons} />
                </label>
                <label className={style.input_cover}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Email address"
                    required
                  />
                  <AiOutlineMail className={style.input_icons} />
                </label>
                <label className={style.input_cover}>
                  <input
                    type={passwordIcon ? "password" : "text"}
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Password"
                    required
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
                  <FcGoogle />
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
