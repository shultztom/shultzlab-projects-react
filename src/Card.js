import React, { Component } from "react";
import TechUsed from "./TechUsed";

class Card extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <img className="card-img-top" src={data.img} alt="img" />
          <div className="card-body">
            <p className="card-text">{data.text}</p>
            <ul>
              {data.techUsed.map(data => (
                <TechUsed key={data} data={data} />
              ))}
            </ul>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => (window.location.href = data.link)}
                >
                  View
                </button>
                {data.github.length > 0 && (
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => (window.location.href = data.github)}
                  >
                    Source Code
                  </button>
                )}
              </div>
              {data.github.length === 0 && (
                <span className="float-right">Private Repo</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
