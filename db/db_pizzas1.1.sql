-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 27-Out-2023 às 03:24
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_pizzas`
--
CREATE DATABASE IF NOT EXISTS `db_pizzas` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `db_pizzas`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_atendente`
--

CREATE TABLE `tb_atendente` (
  `id_atendente` int(11) NOT NULL,
  `nm_atendente` varchar(120) NOT NULL,
  `ds_email_atendente` varchar(100) NOT NULL,
  `ds_senha_atendente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_bebida`
--

CREATE TABLE `tb_bebida` (
  `id` int(2) NOT NULL,
  `nm_bebida` varchar(40) NOT NULL,
  `vl_bebida` decimal(4,2) NOT NULL,
  `img_bebida` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tb_bebida`
--

INSERT INTO `tb_bebida` (`id`, `nm_bebida`, `vl_bebida`, `img_bebida`) VALUES
(1, 'Cerveja Budweiser', '6.00', '/src/assets/images/budweiser.png'),
(2, 'Cerveja Corona', '10.00', '/src/assets/images/corona.png'),
(3, 'Cerveja Heineken', '6.00', '/src/assets/images/heineken.png'),
(4, 'Cerveja Skol', '5.00', '/src/assets/images/skol.png'),
(5, 'Coca-Cola', '5.00', '/src/assets/images/coca.png'),
(6, 'Fanta Laranja', '5.00', '/src/assets/images/fanta.png'),
(7, 'Guaraná Antártica', '5.00', '/src/assets/images/guarana.png'),
(8, 'Schweppes', '5.00', '/src/assets/images/schweppes.png'),
(9, 'H2O Limoneto', '7.00', '/src/assets/images/h2o.png'),
(10, 'Del Valle Sabores', '6.00', '/src/assets/images/delvalle.png'),
(11, 'Chá Feelgood', '6.00', '/src/assets/images/feelgood.png'),
(12, 'Vinho Casillero Del Diablo', '50.00', '/src/assets/images/casillero.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_cliente`
--

CREATE TABLE `tb_cliente` (
  `id_cliente` int(5) NOT NULL,
  `nm_cliente` varchar(120) NOT NULL,
  `ds_email` varchar(100) NOT NULL,
  `ds_senha` varchar(24) NOT NULL,
  `cd_cep` int(11) NOT NULL,
  `nm_logradouro` varchar(150) NOT NULL,
  `nm_bairro` varchar(50) NOT NULL,
  `nm_cidade` int(50) NOT NULL,
  `cd_numero` varchar(25) NOT NULL,
  `ds_complemento` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_pizza`
--

CREATE TABLE `tb_pizza` (
  `id` int(2) NOT NULL,
  `nm_pizza` varchar(50) NOT NULL,
  `vl_pizza` decimal(4,2) NOT NULL,
  `img_pizza` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tb_pizza`
--

INSERT INTO `tb_pizza` (`id`, `nm_pizza`, `vl_pizza`, `img_pizza`) VALUES
(1, 'Pizza DD', '40.00', '/src/assets/images/pdd.png'),
(2, 'Pizza DS', '50.00', '/src/assets/images/pds.png'),
(3, 'Pizza DTCC', '50.00', '/src/assets/images/pdtcc.png'),
(4, 'Pizza Ética', '40.00', '/src/assets/images/petica.png'),
(5, 'Pizza LTT', '40.00', '/src/assets/images/pltt.png'),
(6, 'Pizza OSA', '40.00', '/src/assets/images/posa.png'),
(7, 'Pizza PA', '50.00', '/src/assets/images/ppa.png'),
(8, 'Pizza PAM I', '50.00', '/src/assets/images/ppaml.png'),
(9, 'Pizza PAM II', '1.00', '/src/assets/images/ppamll.png'),
(10, 'Pizza PTCC', '50.00', '/src/assets/images/pptcc.png'),
(11, 'Pizza SSI', '40.00', '/src/assets/images/pssi.png'),
(12, 'Pizza Web', '50.00', '/src/assets/images/pweb.png');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_atendente`
--
ALTER TABLE `tb_atendente`
  ADD PRIMARY KEY (`id_atendente`);

--
-- Índices para tabela `tb_bebida`
--
ALTER TABLE `tb_bebida`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_cliente`
--
ALTER TABLE `tb_cliente`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Índices para tabela `tb_pizza`
--
ALTER TABLE `tb_pizza`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_atendente`
--
ALTER TABLE `tb_atendente`
  MODIFY `id_atendente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_bebida`
--
ALTER TABLE `tb_bebida`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `tb_cliente`
--
ALTER TABLE `tb_cliente`
  MODIFY `id_cliente` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_pizza`
--
ALTER TABLE `tb_pizza`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
