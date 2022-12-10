import classes from "./HeroBaner.module.css";
const HeroBaner = () => {
  return (
    <div className={classes["hero-baner"]}>
      <div>
        <h2>amiibo</h2>
        <p>
          Power up your gameplay! Discover amiibo, a fun and unique way to
          interact with your favourite Nintendo characters and games.
        </p>
      </div>

      <img scr="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFbVe1pT_wcyclqrCqHTCuREVV6YaHgZbLCQ&usqp=CAU" />
    </div>
  );
};

export default HeroBaner;
