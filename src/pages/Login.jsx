import { useState, React } from 'react';
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
import axios from 'axios';


function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const logarUsuario = async (e) => {
      e.preventDefault();

      const body = {'Email': email, 'Senha': senha}
      try
      {
        const resposta = await axios.post('http://localhost/pizzaRuth/slim/logarUsuario', {body: body}, {headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}});
        console.log(resposta.data);

          if (resposta.data)
          {
            location.href = 'http://localhost:5173/';
          }
      }
      catch (error)
      {
        console.log(error);
      }
    }




    return (
      <div className='bg-black'>
        <Menu/>
        <Row className="flex justify-content-center">
          <Col className="col-12 text-center">
            <img src="/src/assets/images/android-chrome-512x512.png" alt="" />
          </Col>
          <Col className="col-12 mx-5 size">
            <Form onSubmit={(e) => logarUsuario(e)}>
              <Form.Group className="mb-3">
                <Form.Label className='text-color'>Email</Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" type="email" placeholder="Exemplo@mail.com.br" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className='text-color'>Senha</Form.Label>
                <Form.Control value={senha} onChange={(e) => setSenha(e.target.value)} name="senha" id="senha" type="password" placeholder="Insira sua senha" />
              </Form.Group>
              <Button variant="danger btn-config" type="submit" value="Entrar">
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