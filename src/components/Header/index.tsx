/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ListIcon from "@mui/icons-material/List";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import TranslateIcon from "@mui/icons-material/Translate";
import Logo from "../../assets/logo.svg?react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Header: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();

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
              {t('account')}
            </Link>
          </li>

          <li className={location.pathname === "/orders" ? styles.active : ""}>
            <Link to="/orders">
              <ListIcon />
              {t('orders')}
            </Link>
          </li>

          <li className={location.pathname === "/menu" ? styles.active : ""}>
            <Link to="/menu">
              <RestaurantMenuIcon />
              {t('menu')}
            </Link>
          </li>

          <li>
          <a href="#" onClick={(e) => {e.preventDefault(); i18next.changeLanguage(i18next.language === 'en' ? 'sk' : 'en');}}>
              <TranslateIcon />
              {t('translate')}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
