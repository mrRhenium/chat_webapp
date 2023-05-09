import style from "../../../styles/Setting.module.css";

const Setting = () => {
  return (
    <>
      <section className={style.header}>
        <h1>{`Setting & Privacy`}</h1>
      </section>
      <section className={style.body}>
        <div className={style.settingItem_cover}></div>
      </section>
    </>
  );
};

export default Setting;
