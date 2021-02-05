import React, { useEffect, useState } from "react";
import Button from "../custom-btn/Button";
import "./Header.css";

function Header() {
  const [show, handleshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        handleshow(true);
      } else {
        handleshow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`header ${show && " header-scrolled"}`}>
      <div className="header__left">
        <h1 className="header__left--title">
          eWR<br></br>
        </h1>
      </div>

      <div className="header__right">
        <p>HOME</p>
        <p>ABOUT US</p>
        <p>LEADERBOARD</p>
        <p>RECORD TICKET</p>
        <p>BLOG</p>
        <p>
          <Button colorclass="pink" displaytext="CONTACT US" />
        </p>
      </div>
    </div>
  );
}

export default Header;
