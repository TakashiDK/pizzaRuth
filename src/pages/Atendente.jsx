import { useState, React } from 'react';
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
import axios from "axios";

function Atendente() {
return (
    <>
        <div className='bg-black tela100'>
            <Menu/>
            <div className="container mt-3 mb-3">
                <h2 className='text-color'>O que deseja fazer?</h2>
                <Col className='row flex justify-content-between larg col-12'>
                <Nav.Link href="/atendpizza" className="text-color mt-4 mb-4"><Button variant="danger">Cadastrar Pizza</Button>{' '}</Nav.Link>
                <Nav.Link href="/atenddrink" className="text-color mb-4"><Button variant="danger">Cadastrar Bebida</Button>{' '}</Nav.Link>
                <Nav.Link href="/cadastro" className="text-color mb-4"><Button variant="danger">Cadastrar Usuário</Button>{' '}</Nav.Link>
                <Nav.Link href="/" className="text-color mb-4"><Button variant="danger">Efetuar Pedido</Button>{' '}</Nav.Link>
                </Col>
            </div>
            <Footer/>
        </div>
    </>
)
}

export default Atendente;