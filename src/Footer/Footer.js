import React from "react";
import PropTypes from "prop-types";
import "./Footer.scss";
import logo from "../assets/roundtrip-logo-dark.png";

const Footer = (props) => {
  return (
    <div className="Footer">
      <div className="container-logo">
        <img alt="RoundTrip" src={logo} className="footer-logo" />
      </div>
      <div className="footer-row">
        <div className="row" />
      </div>
      <p className="text-white">
        <i>
          {props.lang === "ar"
            ? props.paragraphs.map((x) => x.ar)[5]
            : props.paragraphs.map((x) => x.en)[5]}
        </i>
      </p>
      <p className="text-white">
        <i>
          {props.lang === "ar"
            ? props.paragraphs.map((x) => x.ar)[6]
            : props.paragraphs.map((x) => x.en)[6]}
        </i>
      </p>
      <p className="text-white">
        <i>
          {props.lang === "ar" ? (
            <span>
              {props.miscellaneous.map((x) => x.paragraph)[0]}
              <a
               className="text-white"
                target="_blank"
                href={(props.miscellaneous.map((x) => x.url)[0])}
              >
                {props.miscellaneous.map((x) => x.title)[0]}
              </a>
            </span>
          ) : (
            <span>
              {props.miscellaneous.map((x) => x.paragraph)[1]}
              <a
                className="text-white"
                target="_blank"
                href={(props.miscellaneous.map((x) => x.url)[1])}
              >
                {props.miscellaneous.map((x) => x.title)[1]}
              </a>
            </span>
          )}
        </i>
      </p>
    </div>
  );
};

export default Footer;

const paraArrayShape = PropTypes.shape({
  id: PropTypes.string,
  ar: PropTypes.string,
  en: PropTypes.string,
});

const miscArrayShape = PropTypes.shape({
  paragraph: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
});

Footer.propTypes = {
  lang: PropTypes.string,
  paragraphs: PropTypes.arrayOf(paraArrayShape),
  miscellaneous: PropTypes.arrayOf(miscArrayShape),
};

Footer.defaultProps = {
  lang: "ar",
};
