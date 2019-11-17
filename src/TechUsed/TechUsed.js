import React, { Component } from "react";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

class TechUsed extends Component {
  render() {
    const { data } = this.props;
    return <li className="card-text">{data}</li>;
  }
}

export default TechUsed;
