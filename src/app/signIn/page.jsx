"use client";

import img from "../../../public/LOGO (2).png";
import style from "../../styles/SignIn.module.css";

import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const [passwordIcon, set_passwordIcon] = useState(1);
  const [MSG, set_MSG] = useState({
    usernameMSG: "",
    emailMSG: "",
    passwordMSG: "",
  });

  let checkUsernameExistance;
  const usernameChangeHandler = async () => {
    clearTimeout(checkUsernameExistance);

    //
    checkUsernameExistance = setTimeout(async () => {
      const result = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username.value.trim() }),
      });

      const data = await result.json();
      console.log(data);

      if (data.msg === "This user is not exist!") {
        set_MSG((pre) => ({
          ...pre,
          usernameMSG: "",
        }));
      } //
      else {
        set_MSG((pre) => ({
          ...pre,
          usernameMSG: "this user is arleady exist !",
        }));
      }
    }, 2000);
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

  const submitForm = async (e) => {
    e.preventDefault();

    let final_fullname = fullname.value.trim();
    let final_username = username.value.trim();
    let final_email = email.value.trim();
    let final_password = password.value.trim();
    let final_confirm_password = confirm_password.value.trim();

    // const pattern = /^[\w.+\-]+@gmail\.com$/;
    // let result = final_email.match(pattern);

    if (final_fullname === "") {
      alert("Enter valid name!");
      return;
    } else if (final_username === "" || MSG.usernameMSG != "") {
      alert("Enter valid username!");
      return;
    } else if (final_password != final_confirm_password) {
      alert("Passwords are not matching!");
      return;
    } else if (!final_email.match(/^[\w.+\-]+@gmail\.com$/)) {
      alert("Enter Valid Gmail ID!");
      return;
    }

    try {
      //

      const Formdata = {
        name: final_fullname,
        username: final_username,
        email: final_email,
        password: final_password,
      };

      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(Formdata);

      const result = await fetch("http://localhost:3000/api/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      });

      const data = await result.json();
      console.log("Successful", data);

      if (data.msg) {
        alert(data.msg);
        //
      } else if (!data.msg && result.status === 200) {
        router.push("/logIn");
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
              <form onSubmit={submitForm}>
                <label className={style.input_cover}>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
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
                  {MSG.usernameMSG === "" ? (
                    <AiOutlineUser className={style.input_icons} />
                  ) : (
                    <RiErrorWarningLine
                      className={`${style["input_icons"]} ${style["input_error_icons"]}`}
                    />
                  )}
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
                  {MSG.emailMSG === "" ? (
                    <AiOutlineMail className={style.input_icons} />
                  ) : (
                    <RiErrorWarningLine
                      className={`${style["input_icons"]} ${style["input_error_icons"]}`}
                    />
                  )}
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
