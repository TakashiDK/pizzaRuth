import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './Footer';
import { Card } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Cadastro() {
    return (
      <div className='bg-black'>
        <Menu/>
        <div className="row">
          <div className="col-6 text-center">
            <img src="/src/assets/images/android-chrome-512x512.png" alt="" />
          </div>
          <div className="col-5 flex mx-5 size">
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-color'>Nome Completo</Form.Label>
                    <Form.Control type="text" placeholder="João da SIlva Sauro" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-color'>Email</Form.Label>
                    <Form.Control type="email" placeholder="Exemplo@mail.com.br" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-color'>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Insira sua senha" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-color'>Digite Novamente a Senha</Form.Label>
                    <Form.Control type="password" placeholder="Digite novamente sua senha" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicCEP">
                    <Form.Label className='text-color'>CEP</Form.Label>
                    <Form.Control type="text" placeholder="12345-678" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label className='text-color'>Endereço</Form.Label>
                    <Form.Control type="text" placeholder="" readOnly />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicBairro">
                    <Form.Label className='text-color'>Bairro</Form.Label>
                    <Form.Control type="text" placeholder="" readOnly />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label className='text-color'>Cidade</Form.Label>
                    <Form.Control type="text" placeholder="" readOnly />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicNumero">
                    <Form.Label className='text-color'>Número</Form.Label>
                    <Form.Control type="text" placeholder="116"/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicComplemento">
                    <Form.Label className='text-color'>Complemento</Form.Label>
                    <Form.Control type="text" placeholder="Próximo ao mercado bilu bilu" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className='text-color' type="checkbox" label="Concordo com os termos" />
              </Form.Group>
              <Button variant="danger" type="submit">
                Cadastrar
              </Button>
            </Form>
          </div>

        </div>
        <Footer/>
      </div>
    )
  }
  
  export default Cadastro;