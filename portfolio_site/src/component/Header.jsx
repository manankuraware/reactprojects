import React from "react";
import styles from "./Header.module.css";
import profilePic from "../assets/ai.jpg";

export default function Header() {
  return (
    <header className="headersection">
      <nav className="header-container page-width">
        <div className={styles["header-wrapper"]}>
          <div className="header-col1">
            <a href="/" className={styles.headerIcons}>
              <img
                src={profilePic}
                alt="profilePic"
                width="50"
                height="50"
                style={{ borderRadius: "50%" }}
              />
              <span className="textlogo">Manan</span>
            </a>
          </div>
          <div className={styles["header-col2"]}>
            <ul className={styles.navlist}>
              <li className={styles.navitems}>Home</li>
              <li className={styles.navitems}>features</li>
              <li className={styles.navitems}>Portfolio</li>
              <li className={styles.navitems}>resume</li>
              <li className={styles.navitems}>blog</li>
              <li className={styles.navitems}>contact</li>
            </ul>
            <div className="header-button">
              <a href="#" className="btn">
                Hire now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
