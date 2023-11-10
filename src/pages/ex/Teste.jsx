import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const pizzas = [
  {
    'id': 1,
    'sabor': 'Portuguesa',
    'valor' : 40
  },
  {
    'id': 2,
    'sabor': 'Paulista',
    'valor' : 30
  }
]

function Teste() {
  const [users, setUser] = useState([]);
  function data(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => setUser(json))
  }

  useEffect(()=> {
    data();
  }, [])

  return (
  <>
    <div>
      <ul>
        {users.map( user =>
          <li key={user.id}>{user.name}</li>
          )}
      </ul>
    </div>
    <div>
      {pizzas.map((pizza) => 
        <div key={pizza.id}>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{pizza.sabor}</Card.Title>
              <Card.Text>
                R$ {pizza.valor}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  </>
)
}
export default Teste
