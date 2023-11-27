import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

function Carrinho() {

    const [info, setUser] = useState([]);
    function pickPizza(){
      fetch('http://localhost/pizzaRuth/slim/pizzas')
      .then((response) => response.json())
      .then((json) => setUser(json))
    }
  
    useEffect(()=> {
      pickPizza();
    }, [])
  
  
    const [bebida, setDrink] = useState([]);
    function pickBebidas(){
      fetch('http://localhost/pizzaRuth/slim/bebidas')
      .then((response) => response.json())
      .then((json) => setDrink(json))
    }
  
    useEffect(()=> {
      pickBebidas();
    }, [])
  
  
      return (
      <div className='bg-perso'>
          <Menu/>
          <Container>
          <div className='bg-perso'>
                  <h2 className='titulo'>Pizzas</h2>
          <Row className='justify-content-md-between'>
              {info.map( pizza => 
              <Col key={pizza.id}  xl={3} md={3} sm={12}>
  
                      <div className='mx-3 m-3'>
                          <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={pizza.img_pizza} />
                              <Card.Body>
                                  <Card.Title>{pizza.nm_pizza}</Card.Title>
                                  <Card.Text>
                                      R$: {pizza.vl_pizza}
                                  </Card.Text>
                                  <div className="text-center">
                                  <Button variant="danger">Adicionar</Button>
                                  </div>
                              </Card.Body>
                          </Card>
                      </div>
                  
              </Col>
              )}
              </Row>
          </div>
          <div className='bg-black'>
  
                  <h2 className='titulo'>Bebidas</h2>
          <Row>
              {bebida.map((bebida) => 
              <Col key={bebida.id} md={3} sm={1}>
  
                      <div className='m-3' >
                          <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={bebida.img_bebida} />
                              <Card.Body>
                                  <Card.Title>{bebida.nm_bebida}</Card.Title>
                                  <Card.Text>
                                      R$: {bebida.vl_bebida}
                                  </Card.Text>
                                  <div className="text-center">
                                  <Button variant="danger">Adicionar</Button>
                                  </div>
                              </Card.Body>
                          </Card>
                      </div>
                  
              </Col>
              )}
              </Row>
          </div>
          </Container>
          <Footer/>
      </div>
      )
}
export default Carrinho;