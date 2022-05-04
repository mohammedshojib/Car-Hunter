import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-dark mt-5">
      <div class="container row text-white d-flex py-5 m-auto align-items-center text-center">
        <div class="col-lg-8 text-start">
          <p>© 2022 Alov. All rights reserved</p>
          <ul className="d-block text-start">
            <li>
              <Link className="text-white" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white" to="/">
                About
              </Link>
            </li>
            <li>
              <Link className="text-white" to="/">
                Q&A
              </Link>
            </li>
            <li>
              <Link className="text-white" to="/">
                All Cars
              </Link>
            </li>
          </ul>
        </div>
        <div class="col-lg-4">
          <h4>Get the App</h4>
          <a href="https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically&hl=en&gl=US">
            <img
              src="https://w7.pngwing.com/pngs/918/845/png-transparent-google-play-logo-google-play-app-store-android-google-play-text-logo-sign.png"
              class="img-fluid mb-2 w-50"
              alt=""
            />
          </a>
          <br />
          <a href="https://apps.apple.com/us/app/tiktok/id835599320">
            <img
              src="https://www.pngkit.com/png/detail/222-2228422_apple-app-store-apple-store-svg-download.png"
              class="img-fluid w-50"
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
