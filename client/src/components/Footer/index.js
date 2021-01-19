import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
{/* <span> <Link to="/ContactUs" className="alignLeft">Contact Us </Link> ' A D F J 2021</span> */}
<span><Link to="/ContactUs" className="alignRight">Contact Us </Link> - A D F J  2021</span>

    </footer>
  );
}
  
export default Footer;
