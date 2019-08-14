import React, { Component } from 'react';
import { Row, Col, Button, Modal, ModalBody, ModalHeader, Form, Input, Label, FormGroup } from 'reactstrap';

class Contato extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            name: '',
            email: '',
            msg: ''
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggleModal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(JSON.stringify(this.state));
    }

    render() {
        return (
            <React.Fragment>
                <Row className="justify-content-center mt-md-5 mt-3">
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
                    <ModalHeader toggle={this.toggleModal}>Contato</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <Label htmlFor="name">Seu nome</Label>
                                        <Input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <Label htmlFor="email">Email</Label>
                                        <Input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <Label htmlFor="msg">Mensagem</Label>
                                        <Input type="textarea" value={this.state.msg} onChange={this.handleChange} name="msg" id="msg" rows="5" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button color="primary" type="submit" className="mr-2">Enviar</Button>
                            <Button color="danger" type="button" onClick={this.toggleModal}>Cancelar</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Contato;