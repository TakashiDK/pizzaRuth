-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22-Nov-2023 às 02:44
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

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_usuario`
--

CREATE TABLE `tb_usuario` (
  `id_usuario` int(5) NOT NULL,
  `nm_usuario` varchar(50) NOT NULL,
  `cd_email_usuario` varchar(30) NOT NULL,
  `cd_senha` varchar(30) NOT NULL,
  `cd_cep` int(8) NOT NULL,
  `nm_logradouro` varchar(100) NOT NULL,
  `cd_num_logradouro` int(6) NOT NULL,
  `nm_bairro` varchar(40) NOT NULL,
  `nm_cidade` varchar(40) NOT NULL,
  `sg_UF` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tb_usuario`
--

INSERT INTO `tb_usuario` (`id_usuario`, `nm_usuario`, `cd_email_usuario`, `cd_senha`, `cd_cep`, `nm_logradouro`, `cd_num_logradouro`, `nm_bairro`, `nm_cidade`, `sg_UF`) VALUES
(1, 'Takashi', 'takashi@mail.com', '1234', 11089080, 'Rua Amadeo Barbiellini', 114, 'Santa Maria', 'Santos', 'SP'),
(2, 'Atendente', 'atendente@pizzaruth.com.br', 'pizzaruth', 11085755, 'Rua Yara Nascimento Santini', 99, 'São Jorge', 'Santos', 'SP');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_bebida`
--
ALTER TABLE `tb_bebida`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_pizza`
--
ALTER TABLE `tb_pizza`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_usuario`
--
ALTER TABLE `tb_usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_bebida`
--
ALTER TABLE `tb_bebida`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `tb_pizza`
--
ALTER TABLE `tb_pizza`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `tb_usuario`
--
ALTER TABLE `tb_usuario`
  MODIFY `id_usuario` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
