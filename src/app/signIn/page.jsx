import style from "../../styles/SignIn.module.css";

const signIn = () => {
  return (
    <>
      <div className={style.signIn_page}>
        <div className={style.container}>
          <div className={style.logo_cover}>
            <span className={style.logo}></span>
          </div>
          <div className={style.card}>
            <section className={style.header}>
              <h1>Sign-In</h1>
            </section>
            <section className={style.body}>
              <form action=""></form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default signIn;
