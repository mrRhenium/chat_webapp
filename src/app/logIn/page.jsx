"use client";

import Link from "next/link";
import Image from "next/image";

// import { FcGoogle } from "react-icons/fc";
// import { AiOutlineUser } from "react-icons/ai";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { useState } from "react";
import img from "../../../public/LOGO (2).png";
import style from "../../styles/LogIn.module.css";

const LogIn = async () => {
  const [passwordIcon, set_passwordIcon] = useState(1);

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <>
      <div className={style.logIn_page}>
        <div className={style.container}>
          {/*  */}

          {/* LogIn page Header Part Start */}
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
            <main>
              <p>
                {`Welcome Back !! \n to \n World Fastest & Secure \n Messaging Platform`}
              </p>
            </main>
            <h1 className={style.heading}>Log In</h1>
          </section>
          {/* LogIn page Header Part End */}

          {/* LogIn page Body Part Start */}
          <section className={style.body}>
            <div className={style.form}>
              {/* Sign In page Form Part Start */}
              <form action="">
                <label className={style.input_cover}>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="off"
                    placeholder="Username"
                    required
                  />
                  {/* <AiOutlineUser className={style.input_icons} /> */}
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
                  {/* {passwordIcon ? (
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
                  )} */}
                </label>
                <label className={style.input_cover}>
                  <button type="submit" className={style.signIn_page_btn}>
                    Log In
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
                  {/* <FcGoogle /> */}
                  Continue with Google
                </button>
              </div>
              {/* Sign In page Google Sign In Part End */}
            </div>

            {/* LogIn page Footer Part Start */}
            <div className={style.footer}>
              <span>
                Don't have an Account? <Link href={`/signIn`}>SignIn</Link>
              </span>
            </div>
          </section>
          {/* LogIn page Body Part End */}
        </div>
      </div>
    </>
  );
};

export default LogIn;
