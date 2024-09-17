import React from "react";
import "./style.css"; // Make sure to create or link this file as needed
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, worktimeline } from "../../content_option"; // Adjust the path based on your structure

export const Experience = () => {
  return (
    <HelmetProvider>
      <Container className="Experience-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Experience | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Experience</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            {worktimeline.map((job, i) => (
              <div key={i} className="job-entry mb-4">
                <Row>
                  <Col lg="8">
                    <h4>{job.jobtitle}</h4>
                    <p className="text-demoted">{job.company}</p> {/* Company name underneath the job title */}
                  </Col>
                  <Col lg="4" className="text-right">
                    <div className="job-info">
                      <p className="text-demoted">{job.location}</p>
                      <p className="text-demoted">{job.date}</p>
                    </div>
                  </Col>
                </Row>
                <p>{job.description}</p>
                <ul>
                  {job.duties.map((duty, index) => (
                    <li key={index}>{duty}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
