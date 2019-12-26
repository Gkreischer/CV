import React from 'react';
import { Col, Row, Card, CardBody, CardTitle } from 'reactstrap';
import Reveal from 'react-reveal/Reveal';
function Formacao(props) {
    return (
        <React.Fragment>
            <Reveal>
                <Row className="justify-content-center">
                    <Col md="6" className="mt-md-5 mt-5">
                        <Card>
                            <CardBody>
                                <CardTitle><b>Formação:</b></CardTitle>
                                <Row>
                                    <Col md="6" className="text-center">
                                        <a href="http://cederj.edu.br/cederj/"><b>CEDERJ - UFF</b></a> - Tecnologia em Sistemas de Computação (cursando)
                                </Col>
                                    <Col md="6" className="text-center">
                                        <a href="https://www.coursera.org/"><b>Coursera</b></a> - Universidade de Ciência e Tecnologia de Hong Kong
                                </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col md="12" xs="12">
                                        <a href="https://www.linkedin.com/in/gkprogrammer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Reveal>
        </React.Fragment>
    );
}

export default Formacao;