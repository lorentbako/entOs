import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthProvider } from "../Auth/Auth.js";
import styles from "../Styles/Layout.module.css";

const Layout = () => {
  return (
    <AuthProvider>
      <div className={styles.container}>
        <nav>
          <ul>
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link className={styles.Link} to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </AuthProvider>
  );
};

export default Layout;
