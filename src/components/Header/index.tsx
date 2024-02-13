/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ListIcon from "@mui/icons-material/List";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import TranslateIcon from "@mui/icons-material/Translate";
import Logo from "../../assets/logo.svg?react";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navbar}>
          <li className={styles.logo}>
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <li className={location.pathname === "/account" ? styles.active : ""}>
            <Link to="/account">
              <AccountBoxOutlinedIcon />
              Account
            </Link>
          </li>

          <li className={location.pathname === "/orders" ? styles.active : ""}>
            <Link to="/orders">
              <ListIcon />
              Orders
            </Link>
          </li>

          <li className={location.pathname === "/menu" ? styles.active : ""}>
            <Link to="/menu">
              <RestaurantMenuIcon />
              Menu
            </Link>
          </li>

          <li className={location.pathname === "/translate" ? styles.active : ""}>
            <Link to="/translate">
              <TranslateIcon />
              EN
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
