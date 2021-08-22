import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, } from '@fortawesome/free-solid-svg-icons'
import { skillsData, toolsData, experienceData, awardsData } from '../../mock/data';

const Resume = () => {
  const skills = skillsData;
  const tools = toolsData;
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

        <Fade right={isDesktop} top={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="resume-title">
           <span className="text-color-main">Resume</span>
            <hr />
          </h1>
        </Fade>
        
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="resume-cta">
            <a href="/documents/resume.pdf" download>
              <span className="cta-btn cta-btn--hero">
                  <FontAwesomeIcon icon={faDownload} size="1x" />
              </span>
            </a>
          </p>
        </Fade>


        <br/>

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <Row>
            <Col lg={12}>
              <h1>Work Expereinces</h1>
            </Col>
          </Row>
        </Fade>


        {/* EXPERIENCE */}
        {experiences.map((experience) => {
          const { id, role, logo, employer, start, end, duties, description } = experience;
          return(
            <>
            <Fade right={isDesktop} bottom={isMobile} duration={3000} delay={1000} distance="30px">
              <Row key={id}>
                <Col lg={12} sm={12}>
                  <h2>{role || '[Role]'}</h2>
                  <h4>{start || '[Start Date]'} - {end || '[End Date]'}</h4>
                    <ul>
                      {duties.map((duty) => {
                        return(
                          <li>{duty}</li>
                        );
                      })}
                    </ul>
                    <p>{description || "[Description]"}</p>
                </Col>
              </Row>
              <br/>
            </Fade>
            </>
          );
        })};

        {/* SKILLS */}
        {skills.map((skill) => {
          const { id, name, logo } = skill;
          return(
            <Row key={id}>
              <Col lg={3} sm={6}>
                <p>{name || '[Skill Name]'}</p>
              </Col>
              <Col lg={9} sm={6}>
              </Col>
            </Row>
          );
        })};

        {/* TOOLS */}
        {tools.map((tool) => {
          const { id, name, logo } = tool;
          return(
            <Row key={id}>
              <Col lg={3} sm={6}>
                <p>{name || '[Skill Name]'}</p>
              </Col>
              <Col lg={9} sm={6}>
              </Col>
            </Row>
          );
        })};

        {/* {resume.map((item) => {
            const { id, title, info, info2, url, repo, img } = item;


            return (
              <Row key={id}>
                <Col lg={12} sm={12}>
                  <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>{info || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}</p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      <a target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--hero" href={url || '#!'}>See Live</a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        
                      </a>
                    </div>
                  </Fade>
                </Col>
                <br/>
                <br/>
                <br/>

              </Row>
            );
        })} */}

  

        <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px" >
          <p className="about-wrapper__info-text">
            {'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
          </p>
        </Fade>


      </Container>
    </section>
  );
};

export default Resume;
