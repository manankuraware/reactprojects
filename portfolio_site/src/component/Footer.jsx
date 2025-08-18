import React from "react";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { NavLink } from "react-router";
import profilePic from "../assets/ai.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Logo */}
      <div className="footer-logo">
        <img
          src={profilePic}
          alt="profilePic"
          width="50"
          height="50"
          style={{ borderRadius: "50%" }}
        />
      </div>

      {/* Description */}
      <p className="footer-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
        consectetur, nisi nulla quis rerum reprehenderit eligendi. Similique
        veniam quae quidem magni, labore minima consequatur laudantium dolore
        eos excepturi, quos officia.
      </p>

      {/* Social Icons */}
      <div className="footer-socials">
        <a href="#">
          <FaYoutube />
        </a>
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaGithub />
        </a>
      </div>

      {/* Menu Links */}
      <ul className="footer-menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>

      {/* Copyright */}
      <div className="footer-bottom">
        © 2025 MananKuraware | All Rights Reserved
      </div>
    </footer>
  );
}
