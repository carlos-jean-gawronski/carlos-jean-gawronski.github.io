import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import "./styles.css";
import api from "../../services/api";

export default function Home() {
  const [user, setUser] = useState({});

  async function loadGithub() {
    const res = await api.get("/users/carlos-jean-gawronski");
    setUser(res.data);
  }

  useEffect(() => {
    loadGithub();
  }, []);

  return (
    <div className="content">
      <div className="about">
        <section className="profile">
          <img src={user.avatar_url} alt="That's me" />
          <h1>Carlos Jean Gawronski</h1>
          <p className="gituser">{user.login}</p>
          <p>{user.bio}</p>
          <Link className="link" to="/profile">
            Go to my profile
          </Link>
        </section>
        <section className="skills">
          <h1>Take a look at my skills</h1>
          <ul>
            <li>
              <p>Advanced English and native Portuguese</p>
            </li>
            <li>
              <p>Starting to have some juridic knowledge</p>
            </li>
            <li>
              <p>Junior Java skill</p>
            </li>
            <li>
              <p>Node</p>
            </li>
            <li>
              <p>ReactJS and React Native</p>
            </li>
            <li>
              <p>Good with SQL and NoSQL databases</p>
            </li>
            <li>
              <p>Learning Angular</p>
            </li>
            <li>
              <p>Good HTML 5 and CSS skills</p>
            </li>
          </ul>
	<Link className="link" to="/projects">
		Go to my repositories
	</Link>
        </section>
      </div>
      <br />
      <hr />
      <br />

      <div className="contact">
        <h1>How to get in contact with me</h1>
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
      <br />
      <hr />
      <br />

      <section>
        <div className="intention">
          <h1>Description of me</h1>
          <p className="description">
            Freshman at law school in the University of Contestado. Studying
            Java since end of 2017 and in love with programming and law as well.
            Also studying JavaScript and some related frameworks, such as
            ReactJS, React Native, NodeJS, Angular etc. Looking for a job right
            now.
          </p>
          <h2>
            This site was build with the intention to be a portfolio for the
            developer Carlos Jean Gawronski
          </h2>
        </div>
      </section>
    </div>
  );
}
