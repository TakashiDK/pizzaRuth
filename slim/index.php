<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';

$app = new \Slim\App;
$app->get('/', function (Request $request, Response $response, array $args) {

    $padrao = "Pizza Ruth Slim";

    return $padrao;

});


$app->get('/pizzas', 'getPizzas');
$app->get('/pizzas/{id}','getProduto');
$app->get('/bebidas', 'getBebidas');
$app->get('/bebidas/{id}', 'getDrink');

$app->post('/cadastrarUsuario','cadastrarUsuario');
$app->post('/logarUsuario','logarUsuario');

function getConn()
{
    return new PDO('mysql:host=localhost:3306;dbname=db_pizzas',
    'root',
    '',
    array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
}

function getPizzas(Request $request, Response $response, array $args)
{
    $sql = "SELECT * FROM tb_pizza";
    $stmt = getConn()->query($sql);
    $produtos = $stmt->fetchAll(PDO::FETCH_OBJ);
    $response->getBody()->write(json_encode($produtos));
    return $response;
}

function getBebidas(Request $request, Response $response, array $args)
{
    $sql = "SELECT * FROM tb_bebida";
    $stmt = getConn()->query($sql);
    $produtos = $stmt->fetchAll(PDO::FETCH_OBJ);
    $response->getBody()->write(json_encode($produtos));
    return $response;
}

function getProduto(Request $request, Response $response, array $args)
{
    $id = $args['id'];
    $conn = getConn();
    $sql = "SELECT * FROM produto WHERE ID=:id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("id",$id);
    $stmt->execute();
    $produto = $stmt->fetchObject();

    $response->getBody()->write(json_encode($produto));
    return $response;
}

function getDrink(Request $request, Response $response, array $args)
{
    $id = $args['id'];
    $conn = getConn();
    $sql = "SELECT * FROM produto WHERE ID=:id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("id",$id);
    $stmt->execute();
    $produto = $stmt->fetchObject();

    $response->getBody()->write(json_encode($produto));
    return $response;
}

function cadastrarUsuario(Request $request, Response $response, array $args)
{
    $formulario = $request->getParsedBody();
    $nome = $formulario['body']['Nome'];
    $email = $formulario['body']['Email'];
    $senha = $formulario['body']['Senha'];
    $logradouro = $formulario['body']['Logradouro'];
    $numLogradouro = $formulario['body']['NumLogradouro'];
    $bairro = $formulario['body']['Bairro'];
    $cidade = $formulario['body']['Cidade'];
    $estado = $formulario['body']['Estado'];
    $cep = $formulario['body']['CEP'];
    $sql = "INSERT INTO tb_cliente (nm_cliente, ds_email, ds_senha, cd_cep, nm_logradouro, nm_bairro, nm_cidade, cd_numero, sg_UF) VALUES ('$nome', '$email', '$senha', '$cep', '$logradouro', '$bairro', '$cidade', '$numLogradouro', '$estado');";
    $stmt = getConn()->query($sql);
}

function logarUsuario(Request $request, Response $response, array $args)
{
    $formulario = $request->getParsedBody();
    $email = $formulario['body']['Email'];
    $senha = $formulario['body']['Senha'];
    $sql = "SELECT * FROM tb_cliente WHERE ds_email =:email AND ds_senha =:senha";
    $stmt = getConn()->prepare($sql);
    $stmt->bindParam("email", $email);
    $stmt->bindParam("senha", $senha);
    $stmt->execute();
    $usuario = $stmt->fetchObject();
    if ($usuario)
        $response->getBody()->write("true")      ;
    return $response;
    $senhaBanco = $usuario->ds_senha;
}
$app->run();