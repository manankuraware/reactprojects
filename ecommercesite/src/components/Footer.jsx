import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footerwrapper">
          <div className="footerlogo">
            <NavLink to="/" className="logo">
              <img src="../favicon.png" alt="footer logo" width={100} />
            </NavLink>
          </div>
          <div className="copyrighttext">
            © 2026 Manan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
