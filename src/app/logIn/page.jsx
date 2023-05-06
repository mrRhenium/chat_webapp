"use client";

import Link from "next/link";
import Image from "next/image";

import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import img from "../../../public/LOGO (2).png";
import style from "../../styles/LogIn.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LogIn = () => {
  const router = useRouter();
  const [passwordIcon, set_passwordIcon] = useState(1);

  const submitForm = async (e) => {
    e.preventDefault();

    let final_username = username.value.trim();
    let final_password = password.value.trim();

    try {
      //

      const Formdata = {
        username: final_username,
        password: final_password,
      };

      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(Formdata);

      const result = await fetch("http://localhost:3000/api/logIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      });

      const data = await result.json();
      console.log("Successful", data);

      if (data.status === false) {
        alert(data.msg);
        //
      } else if (data.status === true) {
        document.cookie = `token=${data.token};expire;max-age=86400`;
        router.push("/chats");
        //
      }

      // console.log(result);

      //
    } catch (err) {
      console.log(err);
    }
  };

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
              {/* LogIn page Form Part Start */}
              <form onSubmit={submitForm}>
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
                    type={passwordIcon ? "password" : "text"}
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Password"
                    required
                  />
                  {passwordIcon ? (
                    <FaRegEyeSlash
                      className={style.input_icons}
                      onClick={() => {
                        set_passwordIcon(!passwordIcon);
                      }}
                    />
                  ) : (
                    <FaRegEye
                      className={style.input_icons}
                      onClick={() => {
                        set_passwordIcon(!passwordIcon);
                      }}
                    />
                  )}
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
                  <FcGoogle className={style.google_signIn_icon} />
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
