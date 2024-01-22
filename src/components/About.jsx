import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Container, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Fade from "react-reveal";
import Header from "./Header";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: "column",
    whiteSpace: "pre-wrap",
    textAlign: "left",
    fontSize: "1.2em",
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
};

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  const parseIntro = (text) => <ReactMarkdown children={text} />;

  useEffect(() => {
    fetch(endpoints.about, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data ? (
            <Fade>
              <Row style={{flexWrap:'wrap'}}>
                <Col style={styles.introTextContainer}>
                  {parseIntro(data.about)}
                  <ul>
                    <h3 style={{ textAlign: "start" }}>Personal Details</h3>
                    <li>Qualification : Bachelors (IT)</li>
                    <li>Phone: +91-7676633059</li>
                    <li>Languages : English </li>
                    <li>Email : nagendrax02@gmail.com</li>
                    <li>Open to Work : Available</li>
                    <li>Hometown : Guptakashi, Kedarnath, Uttrakhand India</li>
                    <li>Work Address : Bengaluru, Karnataka, India</li>
                  </ul>
                </Col>
                <Col style={styles.introImageContainer}>
                  <img  style={{ borderRadius: '250px', height: '20rem' }} src={data?.imageSource} alt="profile" />
                </Col>
              </Row>
              <Row>
                <Col style={styles.introTextContainer}>
                  {parseIntro(data.aboutSecond)}
                </Col>
              </Row>
              <Row style={{flexWrap:'wrap'}}>
                <Col style={styles.introTextContainer}>
                  <ul>
                    <h3 style={{ textAlign: "start" }}>Professional Summary</h3>
                    <li>
                      Experienced Developer : Proven track record with 2 years
                      of hands-on experience in both frontend and backend
                      development.
                    </li>
                    <li>
                      Skilled React.js Developer : Proficient in React.js,
                      leveraging its capabilities to create dynamic and
                      responsive user interfaces.
                    </li>
                    <li>
                      Full Stack Web Development : Expertise: Successfully
                      completed an intensive 10-month Full Stack Web Development
                      course at Masai School, specializing in the MERN (MongoDB,
                      Express.js, React.js, Node.js) stack.
                    </li>
                    <li>
                      Practical Application : Applied theoretical knowledge
                      through hands-on experience, actively contributing to 4-5
                      learning projects during the course.
                    </li>
                    <li>
                      AI Model Training: Specialized in developing applications
                      dedicated to training AI models, demonstrating expertise
                      in the intersection of software development and artificial
                      intelligence.
                    </li>
                    <li>
                      Collaborative Team Player: Proven track record of
                      collaborating with Research and Development (R&D) teams,
                      contributing innovative solutions, and actively
                      participating in cross-functional projects.
                    </li>
                  </ul>
                </Col>
              </Row>
            </Fade>
          ) : (
            <FallbackSpinner />
          )}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
