import React, { useEffect, useRef } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

export const Resume = () => {
  const iframeRef = useRef(null);

  // Adjust iframe height based on content
  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        const windowHeight = window.innerHeight;
        iframeRef.current.style.height = `${windowHeight - 150}px`; // Adjust 150px based on your layout
      }
    };

    handleResize(); // Set initial height
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HelmetProvider>
      <Container className="Resume-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Resume | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Resume</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="12">
            {/* Embed Google Drive PDF with dynamic height */}
            <iframe
              ref={iframeRef}
              src="https://drive.google.com/file/d/1QRGcvkVKlRvRL8j39tfDIJj1X25mtsF5/preview"
              width="100%"
              frameBorder="0"
              style={{ border: "none", overflow: "hidden" }} // Hide scrollbars
              allow="autoplay"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
