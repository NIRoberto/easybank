import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="social">
          <img className="img" src="/images/logo.svg" alt="logo" />
          <ul>
            <li>
              <a href="#facebook">
                <img src="/images/icon-facebook.svg" alt="facebook logo" />
              </a>
            </li>
            <li>
              <a href="#youtube">
                <img src="/images/icon-youtube.svg" alt="youtube logo" />
              </a>
            </li>
            <li>
              <a href="#twitter">
                <img src="/images/icon-twitter.svg" alt="twitter logo" />
              </a>
            </li>
            <li>
              <a href="#print">
                <img src="/images/icon-pinterest.svg" alt="printerest logo" />
              </a>
            </li>
            <li>
              <a href="#insta">
                <img src="/images/icon-instagram.svg" alt="instagram logo" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="#a">About Us</a>
            </li>
            <li>
              <a href="#c">Contact</a>
            </li>
            <li>
              <a href="#b">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="#c">Careers</a>
            </li>
            <li>
              <a href="#s">Support</a>
            </li>
            <li>
              <a href="#p">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content1">
        <button className="btn">Request Invite</button>
        <p>&copy; Easybank All Rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
