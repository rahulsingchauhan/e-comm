import React from "react";
import "./Navbar.css";

const links = [
  { name: "T-shirt", url: "/tshirt" },
  { name: "Chasma", url: "/chasma" },
  { name: "Joota", url: "/joota" },
  { name: "Chappal", url: "/chappal" },
];

const Navbar = () => {
  return (
    <>
      <div className="container">
        <a href="/" className="left">
          Desi E-comm
         
        </a>
        <nav className="center">
          <a href="/">Home</a>
          {links.map((link) => (
            <a key={link.url} href={link.url}>
              {link.name}
            </a>
          ))}
        </nav>
        <div className="right"><i class="fa-sharp fa-solid fa-cart-plus"></i></div>
      </div>
    </>
  );
};

export default Navbar;
