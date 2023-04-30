import Link from "next/link";
import style from "../styles/Home.module.css";

const Home = async () => {
  return (
    <>
      <div className={style.home_page}>
        <div className={style.container}>
          <section className={style.header}>
            <span className={style.logo_cover}></span>
          </section>
          <section className={style.body}>
            <span className={style.msg_cover}>
              <h2>{`Welcome \n to FS_chats \n world Fatest & Secure \n messaging Platform`}</h2>
            </span>
            <span className={style.btn_cover}>
              <Link href={`/signIn`} className={style.btn}>
                Sign In
              </Link>
              <Link href={`logIn`} className={style.btn}>
                Log In
              </Link>
            </span>
          </section>
        </div>
      </div>
    </>
  );
};
export default Home;
