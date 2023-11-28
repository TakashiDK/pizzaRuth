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

function AtendPizza() {

    const [nomePizza, setNomePizza] = useState("");
    const [valorPizza, setValorPizza] = useState("");
    const [pathImgPizza, setPathImgPizza] = useState("");

    const cadastrarPizza = async (e) => {
        e.preventDefault();

        const title = "Cadastro Pizza";
        const body = { 'NomePizza': nomePizza, 'ValorPizza': valorPizza, 'PathImgPizza': pathImgPizza };
        try {
            const response = await axios.post('http://localhost/pizzaruth/slim/cadastrarPizza', {body: body,}, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } });
            alert("Pizza Cadastrada");
            location.href = 'http://localhost:5173/atendpizza';
        }
        catch (error){
            console.log(error);
        }
    }
return (
    <>
        <div className='bg-black tela100'>
            <Menu/>
            <div className="">
            <h2 className='text-colorw text-center'>Cadastre uma Pizza</h2>
            <Form onSubmit={(e) => cadastrarPizza(e)}>
                <Row>
                    <Col>
                    <Form.Group className="mb-3 col-4">
                        <Form.Label className='text-colorw'>Nome da Pizza</Form.Label>
                        <Form.Control type="text" name="nmpizza" id="nmpizza" placeholder="Pizza Inglesa" value={nomePizza} onChange={(e) => setNomePizza(e.target.value)} />
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group className="mb-3 col-4">
                        <Form.Label className='text-colorw'>Valor da Pizza</Form.Label>
                        <Form.Control type="number" name="vlpizza" id="vlpizza" placeholder="40,00" value={valorPizza} onChange={(e) => setValorPizza(e.target.value)} />
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group className="mb-3 col-4">
                        <Form.Label className='text-colorw'>Imagem</Form.Label>
                        <Form.Control type="file" onChange={(e) => setPathImgPizza(e.target.value)}/>
                    </Form.Group>
                    </Col>
                </Row>
                <Button variant="danger" type="submit" value="Cadastrar">
                    Cadastrar
                </Button>
            </Form>
            </div>
            <Footer/>
        </div>
    </>
)
}

export default AtendPizza;