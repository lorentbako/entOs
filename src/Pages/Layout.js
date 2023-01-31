import React, { useContext } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import styles from "../Styles/Layout.module.css";
import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from "../store/Auth.js";

const Layout = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  const auth = getAuth();
  const handleLogout = () =>
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <NavLink className={styles.Link} to="/">
              Search
            </NavLink>
          </li>
          {authCtx.currentUser && (
            <li>
              <Link className={styles.Link} to="/account">
                Account
              </Link>
            </li>
          )}
          {!authCtx.currentUser && (
            <li>
              <Link className={styles.Link} to="/login">
                Login
              </Link>
            </li>
          )}
          {authCtx.currentUser && (
            <li>
              <Link className={styles.Link} to="/login" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
