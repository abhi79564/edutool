import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import web4 from './images/Webd.avif'
const Dintro = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Introduction</h1>
          <p className="text-justify">
          Web Development: Web development involves creating websites and web applications. It includes front-end development (designing the user interface and user experience) and back-end development (server-side logic and database management).          </p>
          <p className="text-justify">
          Web developers use languages like HTML, CSS, JavaScript, and frameworks like React and Angular to build responsive, interactive, and user-friendly web solutions          </p>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h2 className="text-center mb-4">Introductory Videos</h2>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src={web4}
                />
                <Card.Body>
                  <Card.Title>Introduction</Card.Title>
                  <Card.Text>
                    Watch this video to understand web development.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://www.youtube.com/watch?v=VIDEO_ID_1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Video
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src={web4}
                />
                <Card.Body>
                  <Card.Title>Tools</Card.Title>
                  <Card.Text>
                    Prerequisites required.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://www.youtube.com/watch?v=VIDEO_ID_2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Video
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src={web4}
                />
                <Card.Body>
                  <Card.Title>Future</Card.Title>
                  <Card.Text>
                    Future of Web Development.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://www.youtube.com/watch?v=VIDEO_ID_3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Video
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Col>
      </Row>
    </Container>
  );
};

export default Dintro;
