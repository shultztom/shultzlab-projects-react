import React, { Component } from "react";
import Card from "./Card";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          img: "/images/golfhandicapcalculator.PNG",
          text: "Golf Handicap Calculator",
          link: "https://golfhandicapcalculator.herokuapp.com/",
          github: ""
        },
        {
          id: 2,
          img: "/images/xkcdviewer.PNG",
          text: "XKCD Comic Viewer",
          link: "https://shultztom.github.io/xkcd-viewer-react/",
          github: "https://github.com/shultztom/xkcd-viewer-react"
        },
        {
          id: 3,
          img: "/images/xkcdapi.PNG",
          text: "XKCD CORS API",
          link: "https://xkcd-cors-api.herokuapp.com/",
          github: "https://github.com/shultztom/xkcd-cors-api"
        },
        {
          id: 4,
          img: "/images/randomdoggeneratorreact.PNG",
          text: "Random Dog Generator",
          link: "https://shultztom.github.io/dog-generator-react/",
          github: "https://github.com/shultztom/dog-generator-react"
        },
        {
          id: 5,
          img: "/images/dinofacts.PNG",
          text: "Dinosaur Facts!",
          link: "https://shultztom.github.io/dinosaur-fact-react/",
          github: "https://github.com/shultztom/dinosaur-fact-react"
        },
        {
          id: 6,
          img: "/images/dinofactsapi.PNG",
          text: "Dinosaur Facts! API",
          link: "https://github.com/shultztom/dinosaur-fact-api",
          github: "https://dinosaur-facts-api.herokuapp.com/"
        }
      ]
    };
  }

  render() {
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

        <footer className="text-muted">
          <div className="container">
            <p>
              This page is based off of the 'Album' example by Bootstrap. You
              can view the example
              <a href="https://getbootstrap.com/docs/4.1/examples/album/">
                here
              </a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
