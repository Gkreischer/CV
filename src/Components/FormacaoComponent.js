import React from 'react';
import { Col, Row, Card, CardBody, CardTitle } from 'reactstrap';

function Formacao(props) {
    return (
        <React.Fragment>
            <Row className="justify-content-center">
                <Col md="6" className="mt-5">
                    <Card>
                        <CardBody>
                            <CardTitle><b>Formação:</b></CardTitle>
                            <Row>
                                <Col md="6" className="text-center">
                                    <a href="http://cederj.edu.br/cederj/">CEDERJ</a> - Tecnólogo em Sistemas de Computação (cursando)
                                </Col>
                                <Col md="6" className="text-center">
                                    <a href="https://www.coursera.org/">Coursera</a> - Universidade de Ciência e Tecnologia de Hong Kong
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Formacao;