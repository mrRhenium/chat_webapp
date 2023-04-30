import style from "../../styles/Chats.module.css";

const Chats = () => {
  return (
    <>
      <div className={style.chats_page}>
        <div className={style.container}>
          {/* Home page Header Part Starts */}
          <section className={style.header}>
            <div className={style.logo_cover}>
              <span className={style.app_logo}>
                <i className="fa fa-comments-o" aria-hidden="true"></i>
              </span>
              <span className={style.app_name}>
                <a>Savi-Chats</a>
              </span>
            </div>
            <div className={style.userProfile_cover}>
              <span className={style.user_profile}>
                <i className="fa fa-user-o" aria-hidden="true"></i>
              </span>
            </div>
          </section>
          {/* Home page Header Part Ends */}

          {/* Home page Body Part Starts */}
          <section className={style.body}>
            <div className={style.chatList_cover}>
              <div className={style.chat_list_items}>
                <span className={style.chatPic_cover}>
                  <span className={style.chat_pic}>
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </span>
                </span>
                <span className={style.chatInfo_cover}>
                  <span className={style.chat_name}>
                    <p>Savita Didi</p>
                  </span>
                  <span className={style.chat_msg_highlight}>
                    <p>
                      <i className="fa fa-check" aria-hidden="true"></i>
                      where are you Didi ? dfjkdjfklsdjfkdjf jkfdkfjds
                      fkjsdkfjkj
                    </p>
                  </span>
                </span>
                <span className={style.chatBadge_cover}>
                  <span className={style.chat_badge}>
                    <p>2</p>
                  </span>
                </span>
              </div>
              {/* demo */}

              {/* demo */}
            </div>
          </section>
          {/* Home page Body Part Ends */}

          {/* Home page Footer Part Starts */}
          <section className={style.footer}>
            <nav className={style.menu_bar}>
              <ul>
                <li>
                  <i className="fa fa-home" aria-hidden="true"></i>
                </li>
                <li>
                  <i className="fa fa-search" aria-hidden="true"></i>
                </li>
                <li>
                  <i className="fa fa-bell-o" aria-hidden="true"></i>
                </li>
                <li>
                  <i className="fa fa-sliders" aria-hidden="true"></i>
                </li>
              </ul>
            </nav>
          </section>
          {/* Home page Footer Part Ends*/}
        </div>
      </div>
    </>
  );
};

export default Chats;
