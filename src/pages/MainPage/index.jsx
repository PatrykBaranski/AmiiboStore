import HeroBaner from "./HeroBaner";
import classes from "./MainPage.module.css";
import SideBar from "./SideBar";
const MainPage = () => {
  return (
    <div className={classes["page-container"]}>
      <HeroBaner />
      <section className={classes["main-section"]}>
        <div className={classes["side-bar"]}>
          <SideBar />
        </div>
        <div
          className={classes["main-content"]}
          style={{ backgroundColor: "blue" }}
        >
          adasdadas
        </div>
      </section>
    </div>
  );
};
export default MainPage;
