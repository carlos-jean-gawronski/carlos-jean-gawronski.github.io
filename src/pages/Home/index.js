import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";

import "./styles.css";
import api from "../../services/api";

export default function Home() {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  async function loadGithub() {
    const res = await api.get("/users/carlos-jean-gawronski");
    setUser(res.data);
  }

  async function loadRepos() {
    const res = await api.get("/users/carlos-jean-gawronski/repos");
    setRepos(res.data);
  }
  useEffect(() => {
    loadGithub();
    loadRepos();
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
              <p>Good with SQL databases</p>
            </li>
            <li>
              <p>Learning Angular</p>
            </li>
            <li>
              <p>Good HTML 5 and CSS skills</p>
            </li>
          </ul>
        </section>
      </div>
      <br />
      <hr />
      <br />

      <div className="repos">
        <section>
          <h1>Take a look at my repositories</h1>
        </section>
        <div className="repos-content">
          {repos.map((repo) => (
            <div className="repo-item" key={repo.id}>
              <h1>{repo.name}</h1>
              <div className="desc">
                <p className="language">{repo.language}</p>
                <p className="description">{repo.description}</p>
              </div>
              <div className="button">
                <FiGithub size={20} color="#00ff1e" />
                <a target="_blank" href={repo.svn_url} rel="noopener noreferrer">
                  Go to Github
                </a>
              </div>
            </div>
          ))}
        </div>
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
