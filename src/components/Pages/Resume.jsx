import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, } from '@fortawesome/free-solid-svg-icons'
import { skillsData, toolsData, educationData, experienceData, awardsData } from '../../mock/data';

const Resume = () => {
  const skills_list = skillsData;
  const tools = toolsData;
  const education = educationData;
  const experiences = experienceData;
  const awards = awardsData;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="resume" className="jumbotron">
      <Container>

        <Fade right={isDesktop} top={isMobile} duration={1000} delay={500} distance="150px">
          <Row>
            <Col lg={12} sm={12} className="d-flex justify-content-between">
                <h1 className="resume-title text-color-main">
                  Resume
                </h1>

                <div className="resume-cta">
                  <a href="/documents/resume.pdf" download>
                    <span className="cta-btn cta-btn--hero">
                      <FontAwesomeIcon icon={faDownload} size="1x" className=""/>
                    </span>
                  </a>
                </div>
            </Col>
          </Row>
          {/* <div className="d-flex">

            <h1 className="resume-title">
              <span className="text-color-main">Resume</span>
            </h1>
            <p className="resume-cta mb-0">
              <a href="/documents/resume.pdf" download>
                <span className="cta-btn cta-btn--hero">
                    <FontAwesomeIcon icon={faDownload} size="1x" />
                </span>
              </a>
            </p>
          </div> */}
        </Fade>
        

        {/* EDUCATION START */}
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="150px">
            <Row className="mb-2">
              <Col lg={12}>
                <h1><span className="text-color-secondary">Education</span></h1>
              </Col>
            </Row>
          </Fade>

          {education.map((entry) => {
            const { id, school, degree, date } = entry;
            return(
              <>
                <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="150px">
                    <Row key={id}>
                      <Col lg={12} sm={12}>
                        <div className="d-flex justify-content-between">
                          <h2>{school || '[School]'}</h2>
                          <h4 className="align-self-center">{date || '[Date]'}</h4>
                        </div>
                        <hr/>
                          <p>{degree || '[Degree]'}</p>
                      </Col>
                    </Row>
                    <br/>
                </Fade>
              </>
            );

          })};

        {/* EDUCATION END */}

        {/* SKILLS START */}
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="150px">
            <Row className="mb-2">
              <Col lg={12}>
                <h1><span className="text-color-secondary">Skills</span></h1>
              </Col>
            </Row>
          </Fade>

          <Container>
            <Row xs={1} sm={1} md={2} lg={4}  fluid className="h-100 justify-content-center">
              {skills_list.map((skill) => {
                const { id, type, skills } = skill;
                return(
                  <>
                    <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="150px">
                      <Col className="h-100 p-2">
                        <Card className="h-100">
                          <Card.Body>
                            <Card.Title><h3>{type || '[Type]'}</h3></Card.Title>
                            <Card.Text>
                              <ul>
                                {skills.map((unique_skill) =>{
                                  const { id, name, logo } = unique_skill;
                                  return(
                                    <>
                                      <li>{name || '[Skill Name]'}</li>
                                    </>
                                  );
                                })}
                              </ul>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                  </Fade>
                  </>
                );
              })};
            </Row>
          </Container>
        {/* SKILLS END */}

        {/* TOOLS START */}
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="150px">
            <Row className="mb-2">
              <Col lg={12}>
                <h1><span className="text-color-secondary">Development Tools</span></h1>
              </Col>
            </Row>
          </Fade>

          <Container>
            <ul>
              {tools.map((tool) => {
                const { id, name, logo } = tool;
                return(
                  <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="150px">
                    <li>{name || '[Skill Name]'}</li>
                  </Fade>
                );
              })}
            </ul>
          </Container>
        {/* TOOLS END */}

        {/* WORK EXPEREINCES START */}
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="150px">
            <Row className="mb-2">
              <Col lg={12}>
                <h1><span className="text-color-secondary">Work Experiences</span></h1>
              </Col>
            </Row>
          </Fade>



          {experiences.map((experience) => {
            const { id, employer, location, roles } = experience;
            return(
              <>
                <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="150px">
                  <Row key={id}>
                    <Col lg={12} sm={12}>
                      <div className="d-flex justify-content-between">
                        <h2>{employer || '[Employer]'}</h2>
                        <h4 className="align-self-center">{location || '[Location]'}</h4>
                      </div>
                      <hr/>
                      {roles.map((role) => {
                        const { id, title, logo, employer, start, end, duties, description } = role;
                        return(
                          <>
                            <Row key={id}>
                              <Col lg={12} sm={12} className="pl-5">
                                <h3>{title || '[Role]'}</h3>
                                <h4>{start || '[Start Date]'} - {end || '[End Date]'}</h4>
                                <ul>
                                  {duties.map((duty) => {
                                    return(
                                      <li>{duty}</li>
                                    );
                                  })}
                                </ul>
                                <p>{description}</p>
                              </Col>
                            </Row>
                            <br/>
                          </>
                        );
                      })}
                    </Col>
                  </Row>
                  <br/>
                </Fade>
              </>
            );
          })};

        {/* WORK EXPEREINCES END */}

        

        {/* AWARDS START */}
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="150px">
            <Row className="mb-2">
              <Col lg={12}>
                <h1><span className="text-color-secondary">Awards</span></h1>
              </Col>
            </Row>
          </Fade>

          <Container>
            {awards.map((award) => {
              const {id, type, awards} = award;
              return(
                <>
                  <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="150px">
                    <Row key={id}>
                      <Col lg={12} sm={12}>
                        <div className="d-flex justify-content-between">
                          <h2>{type || '[Type]'}</h2>
                        </div>
                        <hr/>
                        {awards.map((award) => {
                          const { id, name, year } = award;
                          return(
                            <>
                              <Row key={id}>
                                <Col lg={12} sm={12} className="pl-5">
                                  <div className="d-flex justify-content-between">
                                    <h3>{name || '[Award Name]'}</h3>
                                    <h4 className="align-self-center">{year|| '[Year]'}</h4>
                                  </div>
                                </Col>
                              </Row>
                              <br/>
                            </>
                          );
                        })}
                      </Col>
                    </Row>
                    <br/>
                  </Fade>
                </>
              );
            })};
          </Container>
        {/* AWARDS END */}
      </Container>
    </section>
  );
};

export default Resume;
