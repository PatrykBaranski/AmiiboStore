import HeroBaner from "./HeroBaner";
import classes from "./MainPage.module.css";
const MainPage = () => {
  return (
    <div className={classes["page-container"]}>
      <HeroBaner />
    </div>
  );
};
export default MainPage;
