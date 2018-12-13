import React, { Component } from "react";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Footer from "./Footer";

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
          <header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
              <div className="container d-flex justify-content-between">
                <a href="/" className="navbar-brand d-flex align-items-center">
                  <strong>ShultzLab</strong>
                </a>
              </div>
            </div>
          </header>

          <main role="main">
            <section className="jumbotron text-center">
              <div className="container">
                <h1 className="jumbotron-heading pt-1">ShultzLab Projects</h1>
                <p className="lead text-muted">
                  Projects created by Tom Shultz. Some are hosted on my own
                  servers, while others are hosted on Heroku.
                </p>
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
          <header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
              <div className="container d-flex justify-content-between">
                <a href="/" className="navbar-brand d-flex align-items-center">
                  <strong>ShultzLab</strong>
                </a>
              </div>
            </div>
          </header>

          <main role="main">
            <section className="jumbotron text-center">
              <div className="container">
                <h1 className="jumbotron-heading pt-1">ShultzLab Projects</h1>
                <p className="lead text-muted">
                  Projects created by Tom Shultz. Some are hosted on my own
                  servers, while others are hosted on Heroku.
                </p>
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
