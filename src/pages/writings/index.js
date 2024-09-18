import React from "react";
import "./style.css"; // Ensure the styles are linked correctly
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { FaMedium, FaDev, FaExternalLinkAlt } from "react-icons/fa"; // Import required icons
import { SiHackernoon } from "react-icons/si"; // Import required icons
import { meta, blogposts } from "../../content_option"; // Import blog post data

// Map icon names to react-icons components
const platformIcons = {
  medium: <FaMedium />,
  hackernoon: <SiHackernoon />,
  devto: <FaDev />,
};

export const Writings = () => {
  return (
    <HelmetProvider>
      <Container className="Writings-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Writings | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Writings</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          {blogposts.map((post, i) => (
            <Col lg="12" key={i} className="mb-4">
              <div className="blog-box">
                <a href={post.link} className="blog-link" target="_blank" rel="noopener noreferrer">
                  <h3>
                    {post.title}
                    {/* Render the platform icons dynamically based on content_option.js */}
                    <span className="icon-group">
                      {post.platforms.map((platform, index) => (
                        <span key={index} className="platform-icon">
                          {platformIcons[platform]}
                        </span>
                      ))}
                    </span>
                    <span className="blog-arrow-icon">
                      <FaExternalLinkAlt />
                    </span>
                  </h3>
                  <p className="blog-date">{post.date}</p>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
