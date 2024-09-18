import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaPython, FaRust, FaJsSquare, FaExternalLinkAlt, FaHtml5, FaUnity, FaCss3, FaMarkdown } from "react-icons/fa";
import { SiJupyter, SiCplusplus } from "react-icons/si";
import { meta, dataportfolio } from "../../content_option";

// Map icon names to react-icons components
const iconMapping = {
  github: <FaGithub />,
  python: <FaPython />,
  rust: <FaRust />,
  javascript: <FaJsSquare />,
  html: <FaHtml5 />,
  unity: <FaUnity />,
  css: <FaCss3 />,
  cplusplus: <SiCplusplus />,
  markdown: <FaMarkdown />,
  jupyter: < SiJupyter/>,
};

export const Projects = () => {
  return (
    <HelmetProvider>
      <Container className="Projects-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projects | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Projects</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          {dataportfolio.map((project, i) => (
            <Col lg="12" key={i} className="mb-4">
              <div className="project-box">
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  <h3>
                    {project.title}
                    {/* Render the icons dynamically based on content_option.js */}
                    <span className="icon-group">
                      {project.icons.map((icon, index) => (
                        <span key={index} className="project-icon">
                          {iconMapping[icon]}
                        </span>
                      ))}
                    </span>
                    <FaExternalLinkAlt className="project-arrow-icon" />
                  </h3>
                  <p className="project-description">{project.description}</p>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
