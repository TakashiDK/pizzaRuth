import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './Footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Login() {
    return (
      <div className='bg-black'>
        <Menu/>
        <Row className="flex justify-content-center">
          <Col className="col-12 text-center">
            <img src="/src/assets/images/android-chrome-512x512.png" alt="" />
          </Col>
          <Col className="col-12 mx-5 size">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-color'>Email</Form.Label>
                <Form.Control type="email" placeholder="Exemplo@mail.com.br" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text-color'>Senha</Form.Label>
                <Form.Control type="password" placeholder="Insira sua senha" />
              </Form.Group>
              <Button variant="danger btn-config" type="submit">
                Entrar
              </Button>
            </Form>
          </Col>
        </Row>
        <Footer/>
      </div>
    )
  }
  
  export default Login;