import { Link } from "react-router-dom";
import classes from "./LinkEl.module.css";
const LinkEl = ({ text, path }) => {
  return (
    <div className={classes.link}>
      <Link to={path}>{text}</Link>
    </div>
  );
};
export default LinkEl;
