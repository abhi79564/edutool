import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Container, Row, Col, Image } from 'react-bootstrap';
import web1 from './images/image1.webp'; 
import web2 from './images/image2.jpg'; 
import web3 from './images/image3.jpg'; 

const About = () => {
  return (
    
    <Container className="my-5">
    <h1 className='text-center my-4'>ABOUT US</h1>
      <Row className='my-4'>
        <Col  md={4}>
          <Image src={web1} alt="Mission" fluid />
        </Col>
        <Col md={8}>
          <div className="about-us-section">
            <h2>Mission</h2>
            <p>
              At Edutool, our mission is to empower
              learners worldwide by providing accessible, high-quality
              education that fosters personal growth, professional development,
              and lifelong learning. We are committed to breaking down barriers
              to education and creating a global community of learners who can
              thrive in a rapidly changing world.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={4}>
          <Image src={web2} alt="Goals" fluid />
        </Col>
        <Col md={8}>
          <div className="about-us-section">
            <h2>Goals</h2>
            <ul>
              <li>
                <strong>Accessibility:</strong> Our primary goal is to make
                education accessible to all, regardless of geographical
                location, socioeconomic status, or physical abilities.
              </li>
              <li>
                <strong>Quality Content:</strong> We are dedicated to delivering
                top-notch educational content.
              </li>
              <li>
                <strong>Flexibility:</strong> We aim to provide flexible
                learning options.
              </li>
              <li>
                <strong>Community Building:</strong> Building a strong and
                supportive learning community is essential to us.
              </li>
              <li>
                <strong>Continuous Improvement:</strong> We are committed to
                continuous improvement.
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={4}>
          <Image src={web3} alt="Objectives" fluid />
        </Col>
        <Col md={8}>
          <div className="about-us-section">
            <h2>Objectives</h2>
            <ul>
              <li>
                <strong>Expand Course Offerings:</strong> Within the next year,
                we plan to expand our course catalog to include at least 500
                new courses covering a wide range of subjects.
              </li>
              <li>
                <strong>Increase Accessibility:</strong> Over the next two
                years, we aim to improve accessibility by offering our platform
                in multiple languages and optimizing it for mobile devices.
              </li>
              <li>
                <strong>Enhance User Experience:</strong> Within six months, we
                will launch a redesigned user interface with improved
                navigation, personalization features, and a more intuitive
                learning experience.
              </li>
              <li>
                <strong>Learner Engagement:</strong> To foster learner
                engagement, we will introduce discussion forums, live Q&A
                sessions with instructors, and peer-to-peer collaboration tools.
              </li>
              <li>
                <strong>Quality Assurance:</strong> Our goal is to maintain a
                high course completion rate.
              </li>
              <li>
                <strong>Community Growth:</strong> We aim to grow our online
                learning community by 30% in the next year through targeted
                marketing campaigns and referral programs.
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
