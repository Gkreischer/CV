import React, { Component } from 'react';
import{ Row, Col, Container } from 'reactstrap';
import avatar from './../shared/images/gustavo.jpg';
import About from './AboutComponent';
import Formacao from './FormacaoComponent';
import Contato from './ContatoComponent';


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
                        <Col md="12" className="text-center mt-3">
                            <h3>
                               Gustavo Kreischer de Almeida 
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="text-center mt-3">
                            <img src={avatar} style={{width: 250}} className="img-fluid img-thumbnail rounded" alt="Foto Gustavo Kreischer de Almeida"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="text-center">
                            <p className="text-lead mt-1">
                                Desenvolvedor Fullstack Web Developper | Técnico em Informática<br/><a href="https://www.linkedin.com/in/gkprogrammer">LinkedIn</a><br/><a href="https://github.com/Gkreischer">GitHub</a>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4" className="mt-md-5 mt-3 text-center">
                            <h4>Linguagem principal: </h4> <span>Javascript</span>
                        </Col>
                        <Col md="4" className="mt-md-5 mt-3 text-center">
                            <h4>Frameworks: </h4> <span>ReactJS, Angular, Ionic, Nativescript, Laravel (APIRestful), Loopback, Bootstrap</span>
                        </Col>
                        <Col md="4" className="mt-md-5 mt-3 text-center">
                            <h4>Backend: </h4> <span>MySQL, MongoDB</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="text-center mt-md-5 mt-3">
                            <h4>Servidores:</h4> <span>Web, Firewall, SQL, Proxy, Roteamento</span>
                        </Col>
                    </Row>
                    <Formacao />
                    <About/>
                    <Contato />
                </Container>
            </div>
        );
    }
}

export default Main;