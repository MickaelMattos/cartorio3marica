import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import logo from "../assets/images/logo.png";
import "../styles/header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">

        <Link to="/" className="header-brand">
          <img
            src={logo}
            alt="Cartório do 3º Distrito de Maricá-RJ"
            className="header-logo"
          />
          <span className="header-title">
            Cartório do 3º Distrito de Maricá-RJ
          </span>
        </Link>

        <Menu />

      </div>
    </header>
  );
}
