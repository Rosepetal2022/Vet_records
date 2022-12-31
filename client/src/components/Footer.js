import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="text-center footer-div">
        &copy;{new Date().getFullYear()} Rachel Spears
        </div>
    </footer>
  );
};

export default Footer;