import React, { useState, useRef } from "react";
import "./App.scss";
import jsonData from "../links";
import Bar from "../Bar/Bar";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { Dropdown } from "react-bootstrap";
import useFetch from "../useFetch";

const App = () => {
  const isComponentMounted = useRef(true);
  const [lang, setLang] = useState("ar");

  const info = useFetch(jsonData.info, isComponentMounted, []);
  const urls = useFetch(jsonData.urls, isComponentMounted, []);
  const titles = useFetch(jsonData.titles, isComponentMounted, []);
  const paragraphs = useFetch(jsonData.paragraphs, isComponentMounted, []);
  const articles = useFetch(jsonData.articles, isComponentMounted, []);
  const miscellaneous = useFetch(
    jsonData.miscellaneous,
    isComponentMounted,
    []
  );

  const switchToEn = () => {
    setLang("en");
  };

  const switchToAr = () => {
    setLang("ar");
  };

  return (
    <>
      <div className="App">
        <div className="App-bar">
          <Bar lang={lang} info={[...info.data]} urls={[...urls.data]} />
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
                {lang === "ar" ? (
                  <Dropdown.Item onClick={switchToEn}>
                    <strong> English </strong>
                  </Dropdown.Item>
                ) : (
                  <Dropdown.Item onClick={switchToAr}>
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
            lang={lang}
            articles={[...articles.data]}
            titles={[...titles.data]}
            paragraphs={[...paragraphs.data]}
            urls={[...urls.data]}
          />
        </div>
        <div className="App-footer">
          <Footer
            lang={lang}
            paragraphs={[...paragraphs.data]}
            miscellaneous={[...miscellaneous.data]}
          />
        </div>
      </div>
    </>
  );
};

export default App;
