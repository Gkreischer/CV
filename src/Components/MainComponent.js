import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron } from 'reactstrap';
import avatar from './../shared/images/gustavo.jpg';
import About from './AboutComponent';
import Formacao from './FormacaoComponent';
import Contato from './ContatoComponent';
import Sistema from './SistemasComponent';
import Reveal from 'react-reveal/Reveal';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="12" xs="12">
                            <Jumbotron fluid className="mt-5 bg-light">
                                <Container fluid className="px-md-5">
                                    <Row>
                                        <Col md="3" xs="3">
                                            <Reveal>
                                                <img src={require('./../shared/images/gustavo.jpg')} className="logo_position img-fluid rounded mt-md-3" />
                                            </Reveal>
                                        </Col>
                                        <Col md="8" xs="12">
                                            <Reveal>
                                                <h1 className="display-4">Gustavo Kreischer de Almeida</h1>

                                                <p className="lead">Desenvolvedor Full Stack MEAN e React</p>
                                                <br />
                                                <p><b>Main language:</b> Javascript</p>
                                                <p><b>Tecnologias utilizadas:</b>React, React Native, NodeJs, Loopback, Laravel, Express, MongoDB, Servidores Linux, Ionic, Nativescript</p>
                                            </Reveal>
                                        </Col>
                                    </Row>
                                </Container>
                                <Container>
                                    <Row>
                                        <Col md="12">
                                            <Formacao />
                                        </Col>
                                    </Row>
                                </Container>
                                <Container>
                                    <Row>
                                        <Col md="12">
                                            <Sistema />
                                        </Col>
                                    </Row>
                                </Container>

                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;