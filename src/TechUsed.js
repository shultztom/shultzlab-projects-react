import React, { Component } from "react";

class TechUsed extends Component {
  render() {
    const { data } = this.props;
    return <li className="card-text">{data}</li>;
  }
}

export default TechUsed;
