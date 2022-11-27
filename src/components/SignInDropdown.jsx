import { Link } from "react-router-dom";
import LinkEl from "./UI/LinkEl";
import classes from "./SignInDropdown.module.css";
const links = [
  { text: "My acount", path: "/auth" },
  { text: "Wishlist", path: "/wishlist" },
];
const SignInDropdown = ({ onMoseLeave }) => {
  return (
    <div onMouseLeave={onMoseLeave} className={classes["sign-dropdown"]}>
      <div className={classes["sign-header"]}>
        <div className={classes["sign-btn"]}>
          <Link to="/auth">SIGN IN</Link>
        </div>
        <div>
          Not a member?
          <p>
            <Link to="auth">Join Us</Link>
          </p>
        </div>
      </div>
      <div className={classes["user-links"]}>
        {links.map((link, i) => (
          <LinkEl key={i} text={link.text} path={link.path} />
        ))}
      </div>
    </div>
  );
};
export default SignInDropdown;
