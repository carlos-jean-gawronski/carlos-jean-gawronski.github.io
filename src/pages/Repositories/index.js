import React, { useState, useEffect } from "react";
import { FiGithub } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

export default function Repositories() {
  const [repos, setRepos] = useState([]);

  async function loadRepos() {
    const res = await api.get("/users/carlos-jean-gawronski/repos");
    setRepos(res.data);
  }

  useEffect(() => {
    loadRepos();
  }, []);

  return (
    <div className="content">
      <h1>My Repositories</h1>
      <div className="repos">
        <div className="repos-content">
          {repos.map((repo) => (
            <div className="repo-item" key={repo.id}>
              <h2>{repo.name}</h2>
              <p className="language">{repo.language}</p>
              <p className="description">{repo.description}</p>
              <div className="button">
                <a
                  target="_blank"
                  href={repo.svn_url}
                  rel="noopener noreferrer"
                >
                  <FiGithub size={20} color="#333" />
                  <p>Go to Github</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
