import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// const bebidas = [
//   {
//     'id': 1,
//     'sabor': 'Cerveja Budweiser',
//     'img': '/src/assets/images/budweiser.png',
//     'valor' : 6
//   },
//   {
//     'id': 2,
//     'sabor': 'Cerveja Corona',
//     'img': '/src/assets/images/corona.png',
//     'valor' : 10
//   },
//   {
//     'id': 3,
//     'sabor': 'Cerveja Heineken',
//     'img': '/src/assets/images/heineken.png',
//     'valor' : 6
//   },
//   {
//     'id': 4,
//     'sabor': 'Cerveja Skol',
//     'img': '/src/assets/images/skol.png',
//     'valor' : 4
//   },
//   {
//     'id': 5,
//     'sabor': 'Coca-Cola ',
//     'img': '/src/assets/images/coca.png',
//     'valor' : 5
//   },
//   {
//     'id': 6,
//     'sabor': 'Fanta Laranja',
//     'img': '/src/assets/images/fanta.png',
//     'valor' : 5
//   },
//   {
//     'id': 7,
//     'sabor': 'Guaraná Antártica',
//     'img': '/src/assets/images/guarana.png',
//     'valor' : 5
//   },
//   {
//     'id': 8,
//     'sabor': 'Schweppes',
//     'img': '/src/assets/images/schweppes.png',
//     'valor' : 5
//   },
//   {
//     'id': 9,
//     'sabor': 'H2O Limoneto',
//     'img': '/src/assets/images/h2o.png',
//     'valor' : 7
//   },
//   {
//     'id': 10,
//     'sabor': 'Del Valle Sabores',
//     'img': '/src/assets/images/delvalle.png',
//     'valor' : 6
//   },
//   {
//     'id': 11,
//     'sabor': 'Chá Feelgood',
//     'img': '/src/assets/images/feelgood.png',
//     'valor' : 6
//   },
//   {
//     'id': 12,
//     'sabor': 'Vinho Casillero Del Diablo',
//     'img': '/src/assets/images/casillero.png',
//     'valor' : 50
//   },
// ]

// const pizzas = [
//     {
//       'id': 1,
//       'sabor': 'Pizza DD',
//       'img': '/src/assets/images/pdd.png',
//       'valor' : 40
//     },
//     {
//       'id': 2,
//       'sabor': 'Pizza DS',
//       'img': '/src/assets/images/pds.png',
//       'valor' : 50
//     },
//     {
//       'id': 3,
//       'sabor': 'Pizza DTCC',
//       'img': '/src/assets/images/pdtcc.png',
//       'valor' : 50
//     },
//     {
//       'id': 4,
//       'sabor': 'Pizza Ética',
//       'img': '/src/assets/images/petica.png',
//       'valor' : 40
//     },
//     {
//       'id': 5,
//       'sabor': 'Pizza LTT ',
//       'img': '/src/assets/images/pltt.png',
//       'valor' : 40
//     },
//     {
//       'id': 6,
//       'sabor': 'Pizza OSA',
//       'img': '/src/assets/images/posa.png',
//       'valor' : 40
//     },
//     {
//       'id': 7,
//       'sabor': 'Pizza PA',
//       'img': '/src/assets/images/ppa.png',
//       'valor' : 50
//     },
//     {
//       'id': 8,
//       'sabor': 'Pizza PAM I',
//       'img': '/src/assets/images/ppaml.png',
//       'valor' : 50
//     },
//     {
//       'id': 9,
//       'sabor': 'Pizza PAM II',
//       'img': '/src/assets/images/ppamll.png',
//       'valor' : 1
//     },
//     {
//       'id': 10,
//       'sabor': 'Pizza PTCC',
//       'img': '/src/assets/images/pptcc.png',
//       'valor' : 50
//     },
//     {
//       'id': 11,
//       'sabor': 'Pizza SSI',
//       'img': '/src/assets/images/pssi.png',
//       'valor' : 40
//     },
//     {
//       'id': 12,
//       'sabor': 'Pizza Web',
//       'img': '/src/assets/images/pweb.png',
//       'valor' : 50
//     },
//   ]


function Pizzas() {

  const [info, setUser] = useState([]);
  function pickPizza(){
    fetch('https://localhost/slim/produtos')
    .then((response) => response.json())
    .then((json) => setUser(json))
  }

  useEffect(()=> {
    pickPizza();
  }, [])
    return (
    <div className='bg-perso'>
        <Menu/>
        <Container>
        <div className='bg-perso'>
                <h2 className='titulo'>Pizzas</h2>
        <Row className='justify-content-md-between'>
            {info.map((pizza) => 
            <Col key={pizza.id}  xl={3} md={3} sm={12}>

                    <div className='mx-3 m-3'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pizza.img_pizza} />
                            <Card.Body>
                                <Card.Title>{pizza.nm_pizza}</Card.Title>
                                <Card.Text>
                                    R$: {pizza.vl_pizza},00
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
            {bebidas.map((bebida) => 
            <Col key={bebida.id} md={3} sm={1}>

                    <div className='m-3' >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={bebida.img} />
                            <Card.Body>
                                <Card.Title>{bebida.sabor}</Card.Title>
                                <Card.Text>
                                    R$: {bebida.valor},00
                                </Card.Text>
                                <Button variant="danger">Adicionar</Button>
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
  
  export default Pizzas;