import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, } from '@fortawesome/free-solid-svg-icons'
// import { pdf } from '../../documents/downloadable_resume.pdf'

const Resume = () => {

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
      </Container>
    </section>
  );
};

export default Resume;
