import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCartPlus, FaUserAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import classes from "./Navbar.module.css";
import SearchBar from "./SearchBar";
import SignInDropdown from "./SignInDropdown";
import Backdrop from "./UI/Backdrop";
import QueryHintsBar from "./QueryHintsBar";
const NavBar = () => {
  const [isDropdownaVisible, setIsDropdownVisible] = useState(false);

  const showDropdownHandler = () => setIsDropdownVisible(true);
  const hideDropdownHandler = () => {
    setIsDropdownVisible(false);
  };
  return (
    <>
      <nav
        className={classes["main-nav-container"]}
        onMouseLeave={hideDropdownHandler}
      >
        <ul className={classes["main-nav"]}>
          <li className="logo">
            <NavLink to="/">
              <img src="https://store.nintendo.co.uk/images/logo-nintendo.svg" />
            </NavLink>
          </li>
          <SearchBar onMouseEnter={hideDropdownHandler} />
          <li className={classes["main-nav-user"]}>
            <IconContext.Provider value={{ color: "#FFF" }}>
              <button
                onMouseEnter={showDropdownHandler}
                className={classes["login-button"]}
              >
                <FaUserAlt />
              </button>
              <NavLink
                onMouseEnter={hideDropdownHandler}
                className={({ isActive }) =>
                  isActive ? classes["cart-link--active"] : classes["cart-link"]
                }
                to="/cart"
              >
                <FaCartPlus />
              </NavLink>
            </IconContext.Provider>
            {isDropdownaVisible && (
              <SignInDropdown onMoseLeave={hideDropdownHandler} />
            )}
          </li>
        </ul>
      </nav>
      <QueryHintsBar />
    </>
  );
};
export default NavBar;
