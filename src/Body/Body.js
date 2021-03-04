import React from "react";
import PropTypes from "prop-types";
import "./Body.scss";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faReadme } from "@fortawesome/free-brands-svg-icons";

const Body = (props) => {
  return (
    <div>
      <h3 className="text-white body-title">
        {props.lang === "ar"
          ? props.titles.map((x) => x.ar)[0]
          : props.titles.map((x) => x.en)[0]}
      </h3>
      <div className="body-row">
        <div className="_row" />
      </div>
      <h6 className="message text-white">
        <i>
          {props.lang === "ar"
            ? props.paragraphs.map((x) => x.ar)[0]
            : props.paragraphs.map((x) => x.en)[0]}
        </i>
      </h6>
      {props.articles.map((x) => {
        return (
          <div key={x.id.toString()} className="body-buttons">
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={
                <Popover>
                  <Popover.Title as="h3">
                    {props.lang === "ar"
                      ? props.paragraphs.map((x) => x.ar)[1]
                      : props.paragraphs.map((x) => x.en)[1]}
                  </Popover.Title>
                  <Popover.Content>
                    {props.lang === "ar" ? x.preview_ar : x.preview_en}
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
                <a className="body-links" target="_blank" href={x.link}>
                  {props.lang === "ar" ? x.title_ar : x.title_en}
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
                      {props.lang === "ar"
                        ? props.titles.map((x) => x.ar)[5] + ": " + x.writer_ar
                        : props.titles.map((x) => x.en)[5] + ": " + x.writer_en}
                    </p>
                    <p>
                      {props.lang === "ar"
                        ? props.titles.map((x) => x.ar)[6] + ": " + x.editor_ar
                        : props.titles.map((x) => x.en)[6] + ": " + x.editor_en}
                    </p>
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
          {props.lang === "ar"
            ? props.titles.map((x) => x.ar)[1]
            : props.titles.map((x) => x.en)[1]}
        </h3>
        <div className="body-row">
          <div className="_row" />
        </div>
        <div className="body-videos">
          <div
            id="fb-video-1"
            className="fb-video"
            data-href={props.urls.map((x) => x.url)[4]}
            data-width="300"
            data-show-text={false}
            data-lazy={true}
            data-allowfullscreen={true}
          >
            <blockquote
              cite={
                "https://developers.facebook.com/" +
                props.urls.map((x) => x.url.slice(25))[4]
              }
              className="fb-xfbml-parse-ignore"
            >
              <a
                href={
                  "https://developers.facebook.com/" +
                  props.urls.map((x) => x.url.slice(25))[4]
                }
              >
                {props.lang === "ar"
                  ? props.paragraphs.map((x) => x.ar)[2]
                  : props.paragraphs.map((x) => x.en)[2]}
              </a>
              <p>
                {props.lang === "ar"
                  ? props.titles.map((x) => x.ar)[3]
                  : props.paragraphs.map((x) => x.en)[3]}
              </p>
            </blockquote>
          </div>
        </div>
        <h3 className="text-white body-title">
          {props.lang === "ar"
            ? props.titles.map((x) => x.ar)[2]
            : props.titles.map((x) => x.en)[2]}
        </h3>
        <div className="body-row">
          <div className="_row" />
        </div>
        <div className="body-videos">
          <div
            id="fb-video-2"
            className="fb-video"
            data-href={props.urls.map((x) => x.url)[5]}
            data-width="300"
            data-show-text="false"
            data-lazy={true}
            data-allowfullscreen={true}
          >
            <blockquote
              cite={
                "https://developers.facebook.com/" +
                props.urls.map((x) => x.url.slice(25))[5]
              }
              className="fb-xfbml-parse-ignore"
            >
              <a
                href={
                  "https://developers.facebook.com/" +
                  props.urls.map((x) => x.url.slice(25))[5]
                }
              >
                {props.lang === "ar"
                  ? props.paragraphs.map((x) => x.ar)[3]
                  : props.paragraphs.map((x) => x.en)[3]}
              </a>
              <p>
                {props.lang === "ar"
                  ? props.titles.map((x) => x.ar)[4]
                  : props.paragraphs.map((x) => x.en)[4]}
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
              href={props.urls.map((x) => x.url)[6]}
            >
              <strong>
                {props.lang === "ar"
                  ? props.paragraphs.map((x) => x.ar)[4]
                  : props.paragraphs.map((x) => x.en)[4]}
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
