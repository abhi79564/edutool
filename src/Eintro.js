import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import web5 from './images/blockchain.png'

const Eintro = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Introduction</h1>
          <p className="text-justify">
          Blockchain is a decentralized and distributed digital ledger technology. It records transactions across a network of computers, ensuring transparency and security. 
          </p>
          <p className="text-justify">
          Each block in the chain contains a set of transactions, and once added, it cannot be altered. Blockchain is widely used for cryptocurrencies like Bitcoin but has applications beyond finance, such as supply chain management, voting systems, and more.          </p>
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
                  src={web5}
                />
                <Card.Body>
                  <Card.Title>Introduction</Card.Title>
                  <Card.Text>
                    Watch this video to understand Blockchain.
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
                  src={web5}
                />
                <Card.Body>
                  <Card.Title>Prerequisites</Card.Title>
                  <Card.Text>
                    Tools required for Blockchain Developer .
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
                  src={web5}
                />
                <Card.Body>
                  <Card.Title>Future</Card.Title>
                  <Card.Text>
                    Dive into the fascinating world of Blockchain.
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

export default Eintro;
