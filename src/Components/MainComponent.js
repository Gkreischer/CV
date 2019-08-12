import React, { Component } from 'react';

import avatar from './../shared/images/gustavo.jpg';

import{ Row, Col, Container } from 'reactstrap';
class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col md="12" className="text-center">
                            <h3 className="display-3">
                                Currículo Vitae
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="text-center mt-3">
                            <img src={avatar} style={{width: 400}} className="img-fluid img-thumbnail rounded" alt="Foto Gustavo Kreischer de Almeida"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="text-center">
                            <p className="text-lead mt-1">
                                Desenvolvedor Fullstack Web Developper
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4" className="mt-3 text-center">
                            <h4>Linguagem principal: </h4> <span className="h1">Javascript</span>
                        </Col>
                        <Col md="4" className="mt-3 text-center">
                            <h4>Frameworks: </h4> <span className="h1">ReactJS, Angular, Ionic, Nativescript, Laravel (APIRestful), Loopback</span>
                        </Col>
                        <Col md="4" className="mt-3 text-center">
                            <h4>Backend: </h4> <span className="h1">MySQL, MongoDB</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="text-center mt-3">
                            <h4>Servidores:</h4> <span className="h1">Web, Firewall, SQL</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;