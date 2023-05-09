import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  { name: "T-shirt", url: "/tshirt" },
  { name: "Goggle", url: "/goggle" },
  { name: "Shoes", url: "/shoes" },
  { name: "Slipper", url: "/slipper" },
];

const Navbar = () => {
  return (
    <>
      <div className="container">
        <Link to="/" className="left">
          Coder Wear
        </Link>
        <nav className="center">
          <Link to="/">Home</Link>
          {links.map((link) => (
            <Link key={link.url} to={link.url}>
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="right">
          <i className="fa-sharp fa-solid fa-cart-plus"></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
