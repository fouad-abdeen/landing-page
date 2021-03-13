import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Bar.scss";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Bar = (props) => {
  const [lang, setLang] = useState("ar");
  const [urls, setUrls] = useState([]);
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setLang(props.lang);
    setUrls(props.urls.map((x) => x.url));
    setTitle(props.info.map((x) => x.title));
    setBody(props.info.map((x) => x.body));
  }, [props]);

  return (
    <>
      <div className="bar-icons">
        <a target="_blank" rel="noopener noreferrer" href={urls[0]}>
          <FontAwesomeIcon className="fa-2x sm-icon" icon={faLinkedin} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={urls[1]}>
          <FontAwesomeIcon className="fa-2x sm-icon" icon={faTwitter} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={urls[2]}>
          <FontAwesomeIcon className="fa-2x sm-icon" icon={faFacebook} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={urls[3]}>
          <FontAwesomeIcon className="fa-2x sm-icon" icon={faInstagram} />
        </a>
      </div>
      <div className="bar-info">
        <button className="btn btn-sm info" onClick={handleShow}>
          <FontAwesomeIcon className="fa-2x" icon={faQuestionCircle} />
        </button>
      </div>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header>
          <Modal.Title>{lang === "ar" ? title[0] : title[1]}</Modal.Title>
          <button
            aria-label="close"
            style={{
              float: "right",
              backgroundColor: "Transparent",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            <FontAwesomeIcon className="fa-2x sm-icon" icon={faTimes} />
          </button>
        </Modal.Header>
        <Modal.Body>{lang === "ar" ? body[0] : body[1]}</Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-dark close-btn" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Bar;

const infoArrayShape = PropTypes.shape({
  title: PropTypes.string,
  body: PropTypes.string,
});

const urlsArrayShape = PropTypes.shape({
  id: PropTypes.string,
  url: PropTypes.string,
});

Bar.propTypes = {
  lang: PropTypes.string,
  info: PropTypes.arrayOf(infoArrayShape),
  urls: PropTypes.arrayOf(urlsArrayShape),
};

Bar.defaultProps = {
  lang: "ar",
};
