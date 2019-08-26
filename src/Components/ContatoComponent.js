import React, { Component } from 'react';
import { Row, Col, Button, Modal, ModalBody, ModalHeader, Form, Input, Label, FormGroup } from 'reactstrap';
import fetch from 'cross-fetch';
import { baseUrl } from './../shared/baseUrl';

function ShowLoader(props) {
    if(props){
        return(
            <React.Fragment>
                <Col md="7" className="text-right">
                    <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                    <span className="sr-only">Loading...</span>                  
                </Col>
            </React.Fragment>
        );
    } else {
        return(
            <React.Fragment></React.Fragment>
        );
    }
}

class Contato extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            name: '',
            email: '',
            msg: '',
            loading: false,
            successMsg: ''
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeStateToShowLoader = this.changeStateToShowLoader.bind(this);
        this.resetForm = this.resetForm.bind(this);
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

    resetForm() {
        this.setState({name: '', email: '', msg: ''});
    }

    changeStateToShowLoader(){
        this.setState(prevState => ({
            loading: !prevState.loading
        }));
    }

    handleSubmit(event) {
        event.preventDefault();

        this.changeStateToShowLoader();
        
        let formData = {name: this.state.name, email: this.state.email, msg: this.state.msg};

        console.log(formData);

        return fetch(baseUrl + '/contacts', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            credentials: 'same-origin'
        }).then((response) => {
            if(response.ok){
                this.resetForm();
                this.setState({successMsg: 'Contato realizado com sucesso. Retornarei em breve! Obrigado'});
                return response;
            } else {
                var error = new Error(`Error: ${response.status} : ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            }
        )
        .then((response) => response.json())
        .then((response) => {
            this.changeStateToShowLoader();
            console.log(response);
        })
        .catch((error) => {
            this.changeStateToShowLoader();
            console.log(error);
        });

        
    }

    render() {
        const showLoader = ShowLoader(this.state.loading);
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
                            <Row>
                                <Col md="5">
                                    <Button disabled={!this.state.name || !this.state.email || !this.state.msg} color="primary" type="submit" className="mr-2">Enviar</Button>
                                    <Button color="danger" type="button" onClick={this.toggleModal}>Cancelar</Button>
                                </Col>
                                <Col md="7">
                                    {showLoader}
                                    <span className="small-text">{this.state.successMsg}</span>
                                </Col>
                            </Row>
                            
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Contato;