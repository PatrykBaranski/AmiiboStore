import { NavLink } from "react-router-dom";
import { FaCartPlus, FaUserAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import classes from "./Navbar.module.css";
import SearchBar from "./SearchBar";
import SignInDropdown from "./SignInDropdown";
const NavBar = () => {
  return (
    <nav className={classes["main-nav-container"]}>
      <ul className={classes["main-nav"]}>
        <li className="logo">
          <NavLink to="/">
            <img src="https://store.nintendo.co.uk/images/logo-nintendo.svg" />
          </NavLink>
        </li>
        <SearchBar />
        <li className={classes["main-nav-user"]}>
          <IconContext.Provider value={{ color: "#FFF" }}>
            <button className={classes["login-button"]}>
              <FaUserAlt />
            </button>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes["cart-link--active"] : classes["cart-link"]
              }
              to="/cart"
            >
              <FaCartPlus />
            </NavLink>
          </IconContext.Provider>
          <SignInDropdown />
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
