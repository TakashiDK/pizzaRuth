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
    const [image, setImage] = useState('');

    const uploadImage = async e => {
        e.preventDefault();
        console.log("Upload Imagem");
        console.log(image);
    }

return (
    <>
        <div className='bg-black tela100'>
            <Menu/>
            <div className="">
            <h2 className='text-colorw text-center'>Cadastre uma Pizza</h2>
            <Form onSubmit={uploadImage}>
                <Row>
                    <Col>
                    <Form.Group className="mb-3 col-4">
                        <Form.Label className='text-colorw'>Nome da Pizza</Form.Label>
                        <Form.Control type="text" name="nmpizza" id="nmpizza" placeholder="Pizza Inglesa" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group className="mb-3 col-4">
                        <Form.Label className='text-colorw'>Valor da Pizza</Form.Label>
                        <Form.Control type="number" name="vlpizza" id="vlpizza" placeholder="40,00" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group className="mb-3 col-4">
                        <Form.Label className='text-colorw'>Imagem</Form.Label>
                        <Form.Control type="file" onChange={e => setImage(e.target.files[0])} name="imagepizza" id="imagepizza"/>
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