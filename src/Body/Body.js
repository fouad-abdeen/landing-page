import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Body.scss";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faReadme } from "@fortawesome/free-brands-svg-icons";

const Body = (props) => {
  const [lang, setLang] = useState("ar");
  const [articles, setArticles] = useState([]);
  const [titles, setTitles] = useState([]);
  const [paragraphs, setParagraphs] = useState([]);
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    setLang(props.lang);
    setArticles(props.articles);
    setTitles(props.titles);
    setParagraphs(props.paragraphs);
    setUrls(props.urls);
  }, [props]);

  return (
    <div>
      <h3 className="text-white body-title">
        {props.lang === "ar"
          ? titles.map((x) => x.ar)[0]
          : titles.map((x) => x.en)[0]}
      </h3>
      <h4 className="text-white body-title">
        {lang === "ar"
          ? titles.map((x) => x.ar)[1]
          : titles.map((x) => x.en)[1]}
      </h4>
      <div className="body-row">
        <div className="_row" />
      </div>
      <h4 className="message text-white">
        <i>
          {lang === "ar"
            ? paragraphs.map((x) => x.ar)[0]
            : paragraphs.map((x) => x.en)[0]}
        </i>
      </h4>
      {articles.map((x) => {
        return (
          <div key={x.id.toString()} className="body-buttons">
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={
                <Popover>
                  <Popover.Title as="h3">
                    {lang === "ar"
                      ? paragraphs.map((x) => x.ar)[1]
                      : paragraphs.map((x) => x.en)[1]}
                  </Popover.Title>
                  <Popover.Content>
                    {lang === "ar" ? x.preview_ar : x.preview_en}
                  </Popover.Content>
                </Popover>
              }
            >
              <button className="me-2 btn btn-sm btn-light btnInfo">
                <FontAwesomeIcon className="fa-2x" icon={faReadme} />
              </button>
            </OverlayTrigger>
            <div className="d-grid main-buttons">
              <button className="btn btn-light btn-lg body-btn" type="button">
                <a
                  className="body-links"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={x.link}
                >
                  <strong>{lang === "ar" ? x.title_ar : x.title_en}</strong>
                </a>
              </button>
            </div>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={
                <Popover>
                  <Popover.Content>
                    <p>
                      {lang === "ar"
                        ? titles.map((x) => x.ar)[6] + ": " + x.writer_ar
                        : titles.map((x) => x.en)[6] + ": " + x.writer_en}
                    </p>
                    {x.editor_ar && x.editor_en ? (
                      <p>
                        {lang === "ar"
                          ? titles.map((x) => x.ar)[7] + ": " + x.editor_ar
                          : titles.map((x) => x.en)[7] + ": " + x.editor_en}
                      </p>
                    ) : (
                      <span />
                    )}
                  </Popover.Content>
                </Popover>
              }
            >
              <button className="ms-2 btn btn-sm btn-light btnInfo">
                <FontAwesomeIcon className="fa-2x" icon={faUserEdit} />
              </button>
            </OverlayTrigger>
          </div>
        );
      })}
      <div className="fb-videos">
        <h3 className="text-white body-title">
          {lang === "ar"
            ? titles.map((x) => x.ar)[2]
            : titles.map((x) => x.en)[2]}
        </h3>
        <div className="body-row">
          <div className="_row" />
        </div>
        <div className="body-videos">
          <div
            id="fb-video-1"
            className="fb-video"
            data-href={urls.map((x) => x.url)[4]}
            data-width="300"
            data-show-text={false}
            data-lazy={true}
            data-allowfullscreen={true}
          >
            <blockquote
              cite={
                "https://developers.facebook.com/" +
                urls.map((x) => x.url.slice(25))[4]
              }
              className="fb-xfbml-parse-ignore"
            >
              <a
                href={
                  "https://developers.facebook.com/" +
                  urls.map((x) => x.url.slice(25))[4]
                }
              >
                {lang === "ar"
                  ? titles.map((x) => x.ar)[4]
                  : titles.map((x) => x.en)[4]}
              </a>
              <p>
                {lang === "ar"
                  ? paragraphs.map((x) => x.ar)[2]
                  : paragraphs.map((x) => x.en)[2]}
              </p>
            </blockquote>
          </div>
        </div>
        <h3 className="text-white body-title">
          {lang === "ar"
            ? titles.map((x) => x.ar)[3]
            : titles.map((x) => x.en)[3]}
        </h3>
        <div className="body-row">
          <div className="_row" />
        </div>
        <div className="body-videos">
          <div
            id="fb-video-2"
            className="fb-video"
            data-href={urls.map((x) => x.url)[5]}
            data-width="300"
            data-show-text="false"
            data-lazy={true}
            data-allowfullscreen={true}
          >
            <blockquote
              cite={
                "https://developers.facebook.com/" +
                urls.map((x) => x.url.slice(25))[5]
              }
              className="fb-xfbml-parse-ignore"
            >
              <a
                href={
                  "https://developers.facebook.com/" +
                  urls.map((x) => x.url.slice(25))[5]
                }
              >
                {lang === "ar"
                  ? titles.map((x) => x.ar)[5]
                  : titles.map((x) => x.en)[5]}
              </a>
              <p>
                {lang === "ar"
                  ? paragraphs.map((x) => x.ar)[3]
                  : paragraphs.map((x) => x.en)[3]}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="body-subscribe">
        <div className="d-grid button-subscribe">
          <button className="btn btn-light btn-lg body-btn" type="button">
            <a
              className="body-links"
              target="_blank"
              rel="noopener noreferrer"
              href={urls.map((x) => x.url)[6]}
            >
              <strong>
                {lang === "ar"
                  ? paragraphs.map((x) => x.ar)[4]
                  : paragraphs.map((x) => x.en)[4]}
              </strong>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;

const articlesArrayShape = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  link: PropTypes.string,
  preview: PropTypes.string,
  writor: PropTypes.string,
  editor: PropTypes.string,
});

const urlsArrayShape = PropTypes.shape({
  id: PropTypes.string,
  url: PropTypes.string,
});

const titparaArrayShape = PropTypes.shape({
  id: PropTypes.string,
  ar: PropTypes.string,
  en: PropTypes.string,
});

Body.propTypes = {
  lang: PropTypes.string,
  articles: PropTypes.arrayOf(articlesArrayShape),
  urls: PropTypes.arrayOf(urlsArrayShape),
  titles: PropTypes.arrayOf(titparaArrayShape),
  paragraphs: PropTypes.arrayOf(titparaArrayShape),
};

Body.defaultProps = {
  lang: "ar",
};
