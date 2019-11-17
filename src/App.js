import React, { Component } from "react";

import Header from "./Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
import Card from "./Card/Card";
import Footer from "./Footer/Footer";

import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

require("es6-promise").polyfill();
require("isomorphic-fetch");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: false
    };
  }

  componentDidMount() {
    fetch("https://api.shultzlab.com/all")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            data: result
          });
        },
        error => {
          this.setState({
            error: true
          });
        }
      );
  }

  render() {
    if (!this.state.error) {
      return (
        <div>
          <Header />
          <main role="main">
            <Jumbotron />
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row">
                  {this.state.data.map(data => (
                    <Card key={data.id} data={data} />
                  ))}
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <main role="main">
            <Jumbotron />
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-4" />
                  <div className="col-md-4">
                    <p>Error loading list of projects from the API</p>
                  </div>
                  <div className="col-md-4" />
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
