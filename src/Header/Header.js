import React, { Component } from "react";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            <a href="/" className="navbar-brand d-flex align-items-center">
              <strong>ShultzLab</strong>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
