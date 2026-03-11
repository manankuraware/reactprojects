import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Header = () => {
  return (
    <div className="section-border">
      <div className="container">
        <header className="navbar">
          <div className="navbar-Wrapper">
            {/* Logo */}
            <div className="logo-shape">
              <NavLink to="/" className="logo">
                <img src="../favicon.png" alt="headerlogo" />
              </NavLink>
            </div>

            {/* Navigation */}
            <nav className="nav-links">
              <ul className="header-navitems">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink to="/shop">Shop</NavLink>
                </li>

                <li>
                  <NavLink to="/record">Record</NavLink>
                </li>

                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>

            {/* Right Icons */}
            <div className="nav-icons">
              <div className="cart">
                <AiOutlineShoppingCart size={20} />
                <span className="badge">3</span>
              </div>
              <div className="toggle-mode"></div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
