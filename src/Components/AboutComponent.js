import React from 'react';

import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

function About(props) {
    return (
        <React.Fragment>
            <Row>
                <Col md="12" className="mt-5">
                    <Card>
                        <CardBody>
                            <CardTitle><b>Sobre:</b></CardTitle>
                            <Row>
                                <Col md="12">
                                    Atuo na informática desde os 11 anos. Por intermédio de uma grande pessoa, me aprofundei mais no mundo tecnológico: comecei com servidores Linux (minha paixão), redes de maneira geral...
                                    progredi para reparos eletrônicos e a medida que fui estudando me aprofundei em programação. Comecei com C, C++ e cai no mundo dos sistemas Web. Amo UX, luto pela UI
                                    perfeita mas é em desenvolvimento que foco. Javascript é minha paixão, me rendo ao PHP em alguns momentos mas o importante é oferer boas soluções. Gosto de simplicidade,
                                    no código e na vida.
                                        <br />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </React.Fragment>
    );
}

export default About;