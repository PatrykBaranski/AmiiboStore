import HeroBaner from "./HeroBaner";
import classes from "./MainPage.module.css";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
const MainPage = () => {
  return (
    <div className={classes["page-container"]}>
      <HeroBaner />
      <section className={classes["main-section"]}>
        <div className={classes["side-bar"]}>
          <SideBar />
        </div>
        <MainContent />
      </section>
    </div>
  );
};
export default MainPage;
