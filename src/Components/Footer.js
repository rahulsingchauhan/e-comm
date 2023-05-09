import React from "react";
import "./Footer.css"; // import footer styles

function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>We are a company that specializes in creating amazing web experiences.</p>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <ul>
          <li><a href="mailto:rahul542554@gmail.com">E-mail : rahul542554@gmail.com</a></li>
          <li><a href="tel:+918602399308">+91-8602399308</a></li>
          <li>Address: 123 Main Street, Anytown USA</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Connect With Us</h3>
        <ul>
          <li><a href="https://github.com/rahul542554">Github</a></li>
          <li><a href="https://facebook.com/rahul542554">Facebook</a></li>
          <li><a href="https://www.linkedin.com/in/rahul542554/">LinkedIn</a></li>
        </ul>
      </div>
     
    </footer>
  
    </>
  );
}

export default Footer;
