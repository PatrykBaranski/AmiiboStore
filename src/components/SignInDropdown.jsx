import { Link } from "react-router-dom";
import LinkEl from "./UI/LinkEl";
import classes from "./SignInDropdown.module.css";
const links = [
  { text: "My acount", path: "/auth" },
  { text: "Wishlist", path: "/wishlist" },
];
const SignInDropdown = () => {
  return (
    <div className={classes["sign-dropdown"]}>
      <div className={classes["sign-header"]}>
        <div className={classes["sign-btn"]}>
          <Link to="/auth">SIGN IN</Link>
        </div>
        <p>
          Not a member?
          <p>
            <Link to="auth">Join Us</Link>
          </p>
        </p>
      </div>
      <div>
        {links.map((link) => (
          <LinkEl text={link.text} path={link.path} />
        ))}
      </div>
    </div>
  );
};
export default SignInDropdown;
