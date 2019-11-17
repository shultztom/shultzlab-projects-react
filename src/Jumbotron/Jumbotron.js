import React, { Component } from "react";
import "./Jumbotron.css";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

class Jumbotron extends Component {
  render() {
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading pt-1">ShultzLab Projects</h1>
          <p className="lead text-muted">Created by Tom Shultz</p>
          <p className="pb-1">
            <a href="https://github.com/shultztom">
              <i className="fab fa-github-square fa-2x gh pr-2" />
            </a>
            <a href="https://www.linkedin.com/in/tomshultz/">
              <i className="fab fa-linkedin fa-2x li" />
            </a>
          </p>
        </div>
      </section>
    );
  }
}

export default Jumbotron;
