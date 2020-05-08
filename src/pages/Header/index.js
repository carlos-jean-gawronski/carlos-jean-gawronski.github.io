import React, { useState } from "react";
import { AiOutlineCode } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Header() {
  const [show, setShow] = useState(true);
  function handleClick() {
    const bars = document.querySelector(".bars");

    document.body.style.overflow = show ? "hidden" : "initial";

    bars.classList.toggle("on", show);
    setShow(!show);
  }
  return (
    <header>
      <div className="menu-icon">
        <AiOutlineCode size={40} color="#00fa9e" />
        <Link className="brand" to="/">
          Home
        </Link>
      </div>
      <div className="bars" onClick={() => handleClick()}>
        <div className="menu-toggle">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
