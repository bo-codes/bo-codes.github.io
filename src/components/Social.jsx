import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaAngellist,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaGithub />, link: "https://github.com/bo-codes" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/elias-rodriguez-066080155/" },
  { Social: <FaAngellist />, link: "https://angel.co/u/elias-rodriguez" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
