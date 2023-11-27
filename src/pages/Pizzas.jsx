import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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

  const [pizzas, setPizzas] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [cart, setCart] = useState([]);

  function pickPizza() {
    fetch('http://localhost/pizzaRuth/slim/pizzas')
      .then((response) => response.json())
      .then((json) => {
        // Converte os valores do preço para números
        const pizzasWithNumberPrices = json.map((pizza) => ({
          ...pizza,
          price: parseFloat(pizza.price),
        }));

        setPizzas(pizzasWithNumberPrices);
      });
  }

  // Função para buscar bebidas do servidor
  function pickBebidas() {
    fetch('http://localhost/pizzaRuth/slim/bebidas')
      .then((response) => response.json())
      .then((json) => setBebidas(json));
  }

  // Efeito para buscar pizzas ao montar o componente
  useEffect(() => {
    pickPizza();
  }, []);

  // Efeito para buscar bebidas ao montar o componente
  useEffect(() => {
    pickBebidas();
  }, []);

  // Função para adicionar um produto ao carrinho
  function addToCart(product) {
    // Verifica se o produto já está no carrinho
    const existingItem = cart.find((item) => item.id === product.id_pizza || item.id === product.id_bebida);

    // Se o produto já estiver no carrinho, aumenta a quantidade
    if (existingItem) {
      const updatedCart = cart.map((item) => {
        if (item.id === existingItem.id) {
          return {
            ...item,
            quantidade: item.quantidade + 1,
          };
        }
        return item;
      });

      setCart(updatedCart);
    } else {
      // Se o produto não estiver no carrinho, adiciona como um novo item
      const newItem = {
        id: product.id_pizza || product.id_bebida,
        nome: product.nm_pizza || product.nm_bebida,
        preco: product.vl_pizza || product.vl_bebida,
        img: product.img_pizza || product.img_bebida,
        quantidade: 1,
      };

      setCart([...cart, newItem]);
    }
  }

  // Função para remover um produto do carrinho
  function removeFromCart(productId) {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantidade: item.quantidade - 1,
        };
      }
      return item;
    }).filter((item) => item.quantidade > 0);

    setCart(updatedCart);
  }
  // Função para calcular o total do carrinho
  function calcularTotal() {
    const total = cart.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    return total;
  }

  // Função para efetuar o pedido
  function placeOrder() {
    // Verifica se o carrinho está vazio
    if (cart.length === 0) {
      alert('Não é possível efetuar um pedido sem itens no carrinho.');
      return;
    }
    alert('Pedido efetuado com sucesso!');

    setCart([]);
  }
  //   const [info, setUser] = useState([]);

  // function pickPizza(){
  //   fetch('http://localhost/pizzaRuth/slim/pizzas')
  //   .then((response) => response.json())
  //   .then((json) => setUser(json))
  // }

  // useEffect(()=> {
  //   pickPizza();
  // }, [])


  // const [bebida, setDrink] = useState([]);
  // function pickBebidas(){
  //   fetch('http://localhost/pizzaRuth/slim/bebidas')
  //   .then((response) => response.json())
  //   .then((json) => setDrink(json))
  // }

  // useEffect(()=> {
  //   pickBebidas();
  // }, [])

  return (
    <div className='bg-perso'>
      <Menu />
      <Container>
        <div className='bg-perso'>
          <h2 className='titulo'>Pizzas</h2>
          <Row className='justify-content-md-between'>
            {pizzas.map(pizza =>
              <Col key={pizza.id_pizza} xl={3} md={6} sm={12}>

                <div className='mx-3 m-3'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pizza.img_pizza} />
                    <Card.Body>
                      <Card.Title>{pizza.nm_pizza}</Card.Title>
                      <Card.Text>
                        R$: {pizza.vl_pizza}
                      </Card.Text>
                      <div className="text-center">
                        <Button variant="danger" className='mx-1' onClick={() => addToCart(pizza)}>Adicionar</Button>
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
              <Col key={bebida.id_bebida} xl={3} md={6} sm={12}>

                <div className='m-3' >
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={bebida.img_bebida} />
                    <Card.Body>
                      <Card.Title>{bebida.nm_bebida}</Card.Title>
                      <Card.Text>
                        R$: {bebida.vl_bebida}
                      </Card.Text>
                      <div className="text-center">
                        <Button variant="danger" className='mx-1' onClick={() => addToCart(bebida)}>Adicionar</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            )}
          </Row>
          <h2 className='titulo'>Carrinho</h2>
          <Row className='justify-content-md-center'>
            {cart.map((item) =>
              <Col key={item.id} xl={3} md={6} sm={12}>

                <div className='m-3' >
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.nome}</Card.Title>
                      <Card.Text>
                        R$: {item.preco} - Quantidade: {item.quantidade}
                      </Card.Text>
                      <div className="text-center">
                        <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remover</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

            )}
          </Row>
          <Row>
            <h3 className='text-colorw m-3'>Total: ${calcularTotal()}</h3>
          </Row>
          
          <Row className='justify-content-md-center'>
            <Button variant="danger" className='mx-1 bt-eft-pedido' onClick={placeOrder}>Efetuar Pedido</Button>
          </Row>
        </div>
      </Container >
      <Footer />
    </div >
  )
}

export default Pizzas;