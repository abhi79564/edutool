import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import web2 from './images/Appd.avif'
import web3 from './images/DataS.avif'
import web4 from './images/Webd.avif'
import web5 from './images/blockchain.png'
import web6 from './images/programming-languages-1.avif'
const Bintro = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Introduction</h1>
          <p className="text-justify">
          App Development: App development refers to creating mobile and desktop applications for various platforms. Developers use programming languages like Java, Swift, or Python to build native apps, or they use frameworks like React Native to develop cross-platform apps.          </p>
          <p className="text-justify">
          App development is essential for smartphones, tablets, and computers, enabling users to access services, games, and tools on their devices.          </p>
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
                  src={web2}
                />
                <Card.Body>
                  <Card.Title>What is App Development?</Card.Title>
                  <Card.Text>
                    Watch this introductory video to understand this.
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
                  src={web2}
                />
                <Card.Body>
                  <Card.Title>Prerequisites for App Development</Card.Title>
                  <Card.Text>
                    Explore the world of App Dev in this video.
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
                  src={web2}
                />
                <Card.Body>
                  <Card.Title>Tools Required</Card.Title>
                  <Card.Text>
                    Dive into the world of App Development.
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

export default Bintro;
