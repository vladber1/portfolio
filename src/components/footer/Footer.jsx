import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyText}>
        Copyright © 2024 Владислав Берницкий
      </div>
    </footer>
  );
};

export default Footer;
