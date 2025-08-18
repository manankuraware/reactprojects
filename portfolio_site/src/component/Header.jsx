import React from "react";
import styles from "./Header.module.css";
import profilePic from "../assets/ai.jpg";
import { NavLink } from "react-router";

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
              <li className={styles.navitems}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className={styles.navitems}>
                <NavLink to="/features">features</NavLink>
              </li>
              <li className={styles.navitems}>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li className={styles.navitems}>
                <NavLink to="/resume">resume</NavLink>
              </li>
              <li className={styles.navitems}>
                <NavLink to="/blog">blog</NavLink>
              </li>
              <li className={styles.navitems}>
                <NavLink to="/contact">contact</NavLink>
              </li>
            </ul>
            <div className="header-button">
              <a href="mailto:manankuraware2017@gmail.com" className="btn">
                Hire now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
