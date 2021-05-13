import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1>
        <span className={styles.title}>WebDev News</span>
      </h1>
      <p className={styles.description}>
        Someting about web deving and other stuff!
      </p>
    </div>
  );
};

export default Header;
