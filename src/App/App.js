import React from "react";
import "./App.scss";
import jsonData from "../links";
import Bar from "../Bar/Bar";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { Dropdown } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "ar",
      error: null,
      isLoaded: false,
      info: [],
      urls: [],
      titles: [],
      paragraphs: [],
      articles: [],
      miscellaneous: [],
    };
  }

  switchToEn = () => {
    this.setState({ lang: "en" });
  };

  switchToAr = () => {
    this.setState({ lang: "ar" });
  };

  componentDidMount = () => {
    // Fetching Info Data
    fetch(jsonData.mainInfo)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            info: data.info,
            urls: data.urls,
            titles: data.titles,
            paragraphs: data.paragraphs,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

    // Fetching Articles Data
    fetch(jsonData.articles)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({ isLoaded: true, articles: data });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

    // Fetching Misc Data
    fetch(jsonData.miscellaneous)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            miscellaneous: data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  render() {
    return (
      <>
        <div className="App">
          <div className="App-bar">
            <Bar
              lang={this.state.lang}
              info={this.state.info}
              urls={this.state.urls}
            />
            <div className="bar-lang">
              <Dropdown>
                <Dropdown.Toggle
                  variant="dark"
                  id="dropdown-basic"
                  size="sm"
                  style={{ color: "#fcac18" }}
                >
                  Language
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {this.state.lang === "ar" ? (
                    <Dropdown.Item onClick={this.switchToEn}>
                      <strong> English </strong>
                    </Dropdown.Item>
                  ) : (
                    <Dropdown.Item onClick={this.switchToAr}>
                      <strong> Arabic </strong>
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="App-header">
            <Header />
          </div>
          <div className="App-body">
            <Body
              lang={this.state.lang}
              articles={this.state.articles}
              titles={this.state.titles}
              paragraphs={this.state.paragraphs}
              urls={this.state.urls}
            />
          </div>
          <div className="App-footer">
            <Footer
              lang={this.state.lang}
              paragraphs={this.state.paragraphs}
              miscellaneous={this.state.miscellaneous}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
