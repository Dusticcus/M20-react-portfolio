import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Projects() {
    return (
        <Container fluid>
            <Container fluid className="card-container">
                <Row>
                    <Card className="main-card">
                        <Card.Img variant="top" src="./olympiadImage.png" />
                        <Card.Body>
                            <Card.Title>Olympiad</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <div className="boxed">
                            <Button variant="primary">Go to Site</Button>
                            <Button variant="primary">Code on Github</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Container fluid className="minor-cards">
                <Row>
                    <Card className="small-card">
                        <Card.Img variant="top" src="./goatRodeoImage.png" />
                        <Card.Body>
                            <Card.Title>Goat Rodeo</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <div className="boxed">
                                <Button variant="primary">Go to Site</Button>
                                <Button variant="primary">Code on Github</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="small-card">
                     <Card.Img variant="top" src="./launchTimeImage.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <div className="boxed">
                                <Button variant="primary">Go to Site</Button>
                                <Button variant="primary">Code on Github</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card className="small-card">
                        <Card.Img variant="top" src="https://www.humanesociety.org/sites/default/files/styles/1441x612/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=MnaVHwPi" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <div className="boxed">
                                <Button variant="primary">Go to Site</Button>
                                <Button variant="primary">Code on Github</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="small-card">
                        <Card.Img variant="top" src="https://www.humanesociety.org/sites/default/files/styles/1441x612/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=MnaVHwPi" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <div className="boxed">
                                <Button variant="primary">Go to Site</Button>
                                <Button variant="primary">Code on Github</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </Container>

    );
}

export default Projects;