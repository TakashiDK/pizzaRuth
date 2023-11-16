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


function Cadastro() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numLogradouro, setNumLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [UF, setUF] = useState("");

  const cadastrarUsuario = async (e) => {
    e.preventDefault();

    const title = "Cadastro";
    const body = { 'Nome': nome, 'Email': email, 'Senha': senha, 'CEP': cep, 'Logradouro': logradouro, 'NumLogradouro': numLogradouro, 'Bairro': bairro, 'Cidade': cidade, 'UF': uf };

    try {
      const response = await axios.post('http://localhost/pizzaRuth', { body: body, }, { headers: { 'Content=Type': 'application/x-www-form-urlencoded; charset=UTF-8' } });
    }
    cath(error)
    {
      console.log(error);
    }
  }

  const showCEP = (e) => {
    e.preventDefautl();
    pesquisarCEP(cep)
  }

  function pesquisarCEP(value) {
    var cepOk = value.replace(/\D/g, '');

    if (cepOk != "") {
      var validate = /^[0-9]{8}$/;

      if (validate.test(cepOk)) {
        fetch('https://viacep.com.br/ws/' + cepOk + '/json/')
          .then((response) => response.json())
          .then((json) => colocarResultado(json));
      }
      else {
        limparFormulario();
        alert("CEP inexistente!!");
      }
    }
    else {
      limparFormulario();
    }
  }

  function limparFormulario() {
    document.getElementById('endereco').value = "";
    setLogradouro("");
    document.getElementById('bairro').value = "";
    setBairro("");
    document.getElementById('cidade').value = "";
    setCidade("");
    document.getElementById('estado').value = "naoSelecionado";
    setBairro(naoSelecionado);
  }

  function colocarResultado(resultado) {
    if (!("erro" in resultado)) {
      document.getElementById('endereco').value = resultado.logradouro;
      document.getElementById('bairro').value = resultado.bairro;
      document.getElementById('cidade').value = resultado.cidade;
      document.getElementById('estado').value = resultado.uf;
    }
    else {
      limparFormulario();
      alert("CEP não localizado!");
    }
  }

  return (
    <div className='bg-black'>
      <Menu />
      <div className="row">
        <div className="col-6 text-center">
          <img src="/src/assets/images/android-chrome-512x512.png" alt="" />
        </div>
        <div className="col-5 flex mx-5 size">
          <Form onSubmit={(e) => cadastrarUsuario(e)}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='text-color'>Nome Completo</Form.Label>
                  <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value)} name="nome" id="nome" placeholder="João da SIlva Sauro" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='text-color'>Email</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Exemplo@mail.com.br" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className='text-color'>Senha</Form.Label>
                  <Form.Control type="password" value={senha} onChange={(e) => setSenha(e.target.value)} name="senha" id="senha" placeholder="Insira sua senha" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className='text-color'>Digite Novamente a Senha</Form.Label>
                  <Form.Control type="password" placeholder="Digite novamente sua senha" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicCEP">
                  <Form.Label className='text-color'>CEP</Form.Label>
                  <Form.Control type="text" value={cep} onChange={(e) => setCEP(e.target.value)} name="cep" id="cep" placeholder="12345-678" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label className='text-color'>Endereço</Form.Label>
                  <Form.Control type="text" value={logradouro} onChange={(e) => setLogradouro(e.target.value)} name="endereco" id="endereco" placeholder="" readOnly />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicBairro">
                  <Form.Label className='text-color'>Bairro</Form.Label>
                  <Form.Control type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} name="bairro" id="bairro" placeholder="" readOnly />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicCity">
                  <Form.Label className='text-color'>Cidade</Form.Label>
                  <Form.Control type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} name="cidade" id="cidade" placeholder="" readOnly />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicNumero">
                  <Form.Label className='text-color'>Número</Form.Label>
                  <Form.Control type="text" value={numLogradouro} onChange={(e) => setNumLogradouro(e.target.value)} name="numLogradouro" id="numLogradouro" placeholder="116" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicComplemento">
                  <Form.Label className='text-color'>UF</Form.Label>
                  <Form.Select aria-label="Default select example" value={UF} onChange={(e) => setUF(e.target.value)} id="estado" name="estado">
                    <option value="naoSelecionado" defaultValue disabled>Selecione...</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check className='text-color' type="checkbox" label="Concordo com os termos" />
            </Form.Group>
            <Button variant="danger" type="submit" value="Cadastrar">
              Cadastrar
            </Button>
          </Form>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Cadastro;