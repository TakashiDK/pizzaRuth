import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button } from 'react-bootstrap';


function Menu() {
    return (
    <>
      <Navbar expand="lg" className="menu-config">
        <Container>
          <Navbar.Brand href="/" className="text-color"><img
              src="/src/assets/images/Pizza-Ruth-Logo.png"
              width="120"
              className="d-inline-block align-top"
              alt="Ruth logo"
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="row flex justify-content-between larg col-12">
                <Nav className="col-6">
              <Nav.Link href="/home" className="text-color">Home</Nav.Link>
              <Nav.Link href="/pizzas" className="text-color">Cardápio</Nav.Link>
              </Nav>
              <Nav className="col-6 justify-content-end">
              
              <Nav.Link href="/cadastro" className="text-color">      <Button variant="danger">Cadastro</Button>{' '}</Nav.Link>
              <Nav.Link href="/login" className="text-color">      <Button variant="danger">Login</Button>{' '}</Nav.Link>
              <Nav.Link href="/carrinho" className="text-color">      <Button variant="danger"> Carrinho</Button>{' '}</Nav.Link>
              <Nav.Link href="/atendente" className="text-color">      <Button variant="danger"> Atendente</Button>{' '}</Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
  }
  
  export default Menu;