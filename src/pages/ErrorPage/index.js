import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function ErrorPage() {
  useEffect(() => {
    document.title = "Not Found";
  }, []);
  return (
    <div className="container-error">
      <div className="content-error">
        <h1>This page does not exist!</h1>
        <p>Something went wrong in this route :(</p>
        <Link className="redirect-button" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}
