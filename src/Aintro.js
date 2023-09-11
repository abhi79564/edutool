import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import web1 from './images/AI.webp'

const Aintro = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Introduction</h1>
          <p className="text-justify">
            Artificial Intelligence (AI) is a fascinating field that focuses on creating intelligent machines capable of performing tasks that typically require human intelligence. These tasks include problem-solving, decision-making, understanding natural language, and more.
          </p>
          <p className="text-justify">
            AI systems are designed to learn from data, adapt to new information, and improve their performance over time. They are used in various applications, from virtual assistants like Siri and Alexa to self-driving cars, healthcare diagnostics, and recommendation systems.
          </p>
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
                  src={web1}
                />
                <Card.Body>
                  <Card.Title>What is AI?</Card.Title>
                  <Card.Text>
                    Watch this introductory video to understand AI.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://youtu.be/ad79nYk2keg?feature=shared"
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
                  src={web1}
                />
                <Card.Body>
                  <Card.Title>Application of AI</Card.Title>
                  <Card.Text>
                    Explore the world of AI in this informative video.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://youtu.be/ad79nYk2keg?feature=shared"
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
                  src={web1}
                />
                <Card.Body>
                  <Card.Title>Future of AI</Card.Title>
                  <Card.Text>
                    Dive into the fascinating world of AI technology.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://youtu.be/ad79nYk2keg?feature=shared"
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

export default Aintro;
