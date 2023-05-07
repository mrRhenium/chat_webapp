import style from "../../styles/ChatsLayout.module.css";
import img from "../../../public/LOGO (2).png";

import { BiUser } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";

import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <>
      <div className={style.chats_page}>
        <div className={style.container}>
          {/*  */}

          {/* Chats page Header Part Starts */}
          <section className={style.header}>
            <div className={style.logo_cover}>
              <Image
                src={img}
                alt="app logo"
                width={200}
                height={200}
                className={style.logo}
              />
            </div>
            <div className={style.userProfile_cover}>
              <span className={style.user_profile}>
                <BiUser className={style.icons} />
              </span>
            </div>
          </section>
          {/* Chats page Header Part Ends */}

          {/* Chats page Body Part Starts */}
          <section className={style.body}>{children}</section>
          {/* Chats page Body Part Ends */}

          {/* Chats page Footer Part Starts */}
          <section className={style.footer}>
            <nav className={style.menu_bar}>
              <ul>
                <li>
                  <FaHome className={`${style["icons"]} ${style["active"]}`} />
                </li>
                <li>
                  <BiSearchAlt2 className={`${style["icons"]} `} />
                </li>
                <li>
                  <MdNotifications className={`${style["icons"]} `} />
                </li>
                <li>
                  <AiFillSetting className={`${style["icons"]} `} />
                </li>
              </ul>
            </nav>
          </section>
          {/* Chats page Footer Part Ends*/}
        </div>
      </div>
    </>
  );
};

export default Layout;
