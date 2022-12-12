import { useSelector } from "react-redux";
import classes from "./HeroBaner.module.css";
const HeroBaner = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className={classes["hero-baner"]}>
      <div>
        <h2>amiibo</h2>
        <p>
          Power up your gameplay! Discover amiibo, a fun and unique way to
          interact with your favourite Nintendo characters and games.
        </p>
      </div>

      <img
        src="https://store.nintendo.co.uk/_next/image?url=https%3A%2F%2Fassets.nintendo.eu%2Fimage%2Fupload%2Ff_auto%2Fq_auto%2Fv1617878050%2FMNS%2FContent%2520Pages%2520Assets%2FCategory-List%2520Pages%2FMerchandise%2F16.9_HeaderBanner_amiibo_NOE.jpg&w=3840&q=75"
        alt="picture of amiibo collection"
      />
    </div>
  );
};

export default HeroBaner;
