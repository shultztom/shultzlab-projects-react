import React, { Component } from "react";

import "./Footer.css";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

class Footer extends Component {
  render() {
    return (
      <footer className="text-muted">
        <div className="container">
          <p className="text-center">
            This page is based off of the 'Album' example by Bootstrap. You can
            view the example{" "}
            <a href="https://getbootstrap.com/docs/4.1/examples/album/">here</a>
            .
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
