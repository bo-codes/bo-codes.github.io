import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaAngellist,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaGithub />, link: "https://github.com/bo-codes" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/elias-rodriguez-066080155/" },
  { Social: <FaAngellist />, link: "https://angel.co/u/elias-rodriguez" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center text-center text-md-left justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
        </div>

        <div className="col-md-6 my-2 text-center text-md-right">
          <p>
            © {new Date().getFullYear()} copyright{" "}
            <a
              href="https://themeforest.net/user/ib-themes/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              bo-codes
            </a>
            {" "}
             {/* all rights reserved */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
