import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className="headersection">
      <nav className="header-container page-width">
        <div className="header-wrapper">
          <div className="header-col1">
            <a href="">
              <div className="header-icon">
                <img src="" alt="" />
              </div>
              <span className="textlogo">Manan</span>
            </a>
          </div>
          <div className="header-col2">
            <ul className="navlist">
              <li className="navitems">item 1</li>
              <li className="navitems">item 2</li>
              <li className="navitems">item 3</li>
              <li className="navitems">item 4</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
