/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ListIcon from "@mui/icons-material/List";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import TranslateIcon from "@mui/icons-material/Translate";
import Logo from "../../assets/logo.svg?react";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navbar}>
          <li>
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <li>
            <Link to="/account">
              <AccountBoxOutlinedIcon />
              Account
            </Link>
          </li>

          <li>
            <Link to="/orders">
              <ListIcon />
              Orders
            </Link>
          </li>

          <li>
            <Link to="/menu">
              <RestaurantMenuIcon />
              Menu
            </Link>
          </li>

          <li>
            {/* TODO */}
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
