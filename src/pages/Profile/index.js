import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

export default function Profile() {
  const [user, setUser] = useState({});

  async function loadGithub() {
    const res = await api.get("/users/carlos-jean-gawronski");
    console.log(res.data);
    setUser(res.data);
  }

  useEffect(() => {
    loadGithub();
    document.title = "Profile";
  }, []);

  return (
    <div className="container">
      <div className="content-profile">
        <div className="profile">
          <img src={user.avatar_url} alt="That's me" />
          <h1>{user.name}</h1>
          <p className="gituser">{user.login}</p>
          <p className="bio">{user.bio}</p>
        </div>
        <hr />
        <div className="description">
          <h1>About me</h1>
          <p>
            I'm a fullstack developer with JavaScript and Java, among some
            knowledge in other programming languages, such as SQL, PHP, Python,
            Shell, TypeScript, HTML, CSS, and a couple of Frameworks. I've been
            studying English for about 6 years now and programming for about 3
            years. My experience in programming is my portfolio in Github, and
            in English I have an international proficiency diploma. Currently,
            I'm a freshman in law school in the University of Contestado - UnC -
            Campus Mafra. That's pretty mush of my general description. That's
            me!
          </p>
          <p className="job">I'm also looking for a good job</p>
        </div>
        <hr />
        <div className="contact contact-profile">
          <h1>Contacts</h1>
          <ul>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/carlos.jeangawronski"
            >
              <li>
                <FaFacebookF size={20} color="#00F" />
                <p>Facebook</p>
              </li>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/CJ_Gawronski"
            >
              <li>
                <FaTwitter size={20} color="##1E90FF" />
                <p>Twitter</p>
              </li>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/cj.gawronski/"
            >
              <li>
                <FaInstagram size={20} color="#ffa64d" />
                <p>Instagram</p>
              </li>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/carlos-jean-gawronski"
            >
              <li>
                <FaGithub size={20} color="#333" />
                <p>Github</p>
              </li>
            </a>
            <li className="mail">
              <FiMail size={20} color="#ff4747" />
              <p>gawronskicarlosjean@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
