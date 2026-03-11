import heroImg from "../../assets/hero.jpg";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import "./HeroBanner.css";
import { NavLink } from "react-router-dom";
function HeroBanner() {
  return (
    <section className="hero container">
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <span className="hero-tag">Hi, new friend!</span>

          <h1>
            We do not cook,
            <br />
            we create your
            <br />
            emotions!
          </h1>

          <p>
            Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
          </p>

          <div className="hero-buttons">
            <NavLink to="/shop" className="menu-btn">
              <IoFastFoodOutline />
              Our menu
            </NavLink>

            <NavLink to="/contact" className="about-btn">
              <MdArrowOutward />
              About us
            </NavLink>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="circle-bg"></div>
          <img src={heroImg} alt="food" />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
