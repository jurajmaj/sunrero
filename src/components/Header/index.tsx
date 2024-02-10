/// <reference types="vite-plugin-svgr/client" />

import React from "react";
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
            <a href="/">
              <Logo />
            </a>
          </li>
          <li>
            <a href="/account">
              <AccountBoxOutlinedIcon />
              Account
            </a>
          </li>

          <li>
            <a href="/orders">
              <ListIcon />
              Orders
            </a>
          </li>

          <li>
            <a href="/menu">
              <RestaurantMenuIcon />
              Menu
            </a>
          </li>

          <li>
            {/* TODO */}
            <a href="/language">
              <TranslateIcon />
              EN
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
