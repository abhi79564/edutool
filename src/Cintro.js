import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import web3 from './images/DataS.avif'

const Cintro = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Introduction</h1>
          <p className="text-justify">
          Data Science: Data science involves collecting, analyzing, and deriving insights from data. Data scientists use statistical techniques, machine learning, and data visualization tools to extract valuable information from large datasets. They apply these insights to solve problems, make predictions, and inform business decisions, across fields like healthcare, finance, and marketing.          </p>
          <p className="text-justify">
          Data science plays a crucial role in today's data-driven world, driving innovation and efficiency.          </p>
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
                  src={web3}
                />
                <Card.Body>
                  <Card.Title>Introduction</Card.Title>
                  <Card.Text>
                    WWhat is Data Science?.
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
                  src={web3}
                />
                <Card.Body>
                  <Card.Title>Future</Card.Title>
                  <Card.Text>
                    Future of Data Science.
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
                  src={web3}
                />
                <Card.Body>
                  <Card.Title>Applications</Card.Title>
                  <Card.Text>
                    uses of Data Science.
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

export default Cintro;
