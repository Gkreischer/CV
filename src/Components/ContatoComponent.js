import React, { Component } from 'react';
import { Row, Col, Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

class Contato extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return(
            <React.Fragment>
                <Row className="justify-content-center mt-5">
                    <Col md="6" className="text-center">
                        <h4>Tem uma oportunidade é quer que eu faça parte? Clica no botão ai embaixo</h4>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md="6" className="text-center mt-3">
                        <Button type="button" onClick={this.toggleModal} color="success">Fale comigo</Button>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            <Button color="primary" type="button" className="mr-2">Enviar</Button>
                            <Button color="danger" type="button" onClick={this.toggleModal}>Cancelar</Button>
                        </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Contato;