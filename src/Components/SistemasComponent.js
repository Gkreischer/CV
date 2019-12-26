import React, { Component } from 'react';
import { Col, Row, Card, CardBody, Button } from 'reactstrap';
import Slide from 'react-reveal/Slide';

class Sistemas extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>

                <Slide left>
                    <Row className="mt-5">
                        <Col>
                            <Card className="bg-light">
                                <CardBody>
                                    <Row>
                                        <Col md="12">
                                            <h2>Projetos Próprios</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12" className="text-center">
                                            <i className="display-1 fa fa-th" aria-hidden="true"></i>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12" className="text-center">
                                            <h3>SiMostra - Sistema de Mostruário Online</h3>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12" className="text-center mt-3">
                                            <p>O SiMostra foi desenvolvido para exibir produtos da sua loja, facilitar a comunicação e confecção de orçamentos, controle de produção.</p>
                                            <p>Com ele você controla seu estoque, usa seu site para comunicação e imprime comprovantes de aquisição de orçamentos.</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12" className="text-center">
                                            <a href="https://github.com/Gkreischer/SiMostra">
                                                <Button type="button" outline color="info">GitHub</Button>
                                            </a>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="text-center mt-3" md="12">
                                            <b>Quer testar? Clique no botão abaixo</b>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12" className="text-center mt-3">
                                            <a href="http://gkreischer.tech/simostra">
                                                <Button type="button" color="primary">SiMostra</Button>
                                            </a>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12" className="text-center">
                                            <p style={{ fontSize: 12 }} className="text-muted mt-md-1">Sistema em desenvolvimento</p>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Slide>
            </React.Fragment>
        );
    }
}

export default Sistemas;