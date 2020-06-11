
CREATE DATABASE mrt;

USE mrt;


CREATE TABLE `estoque` (
  `id_estoque` int(11) NOT NULL AUTO_INCREMENT,
  `valor_Custo` float DEFAULT NULL,
  `valor_Venda` float DEFAULT NULL,
  `nome_Produto` varchar(50) DEFAULT NULL,
  `desc_Produto` varchar(100) DEFAULT NULL,
  `qtd_Produto` int(11) DEFAULT NULL,
  `fl_ativo` int(1) DEFAULT '1',
  PRIMARY KEY (`id_estoque`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

CREATE TABLE `ordem` (
  `id_ordem` int(11) NOT NULL AUTO_INCREMENT,
  `valor` float DEFAULT NULL,
  `desc` varchar(100) DEFAULT NULL,
  `forma_pgto` varchar(20) DEFAULT NULL,
  `data_inicio` date DEFAULT NULL,
  `data_prev` date DEFAULT NULL,
  `data_fim` date DEFAULT NULL,
  `fl_ativo` int(1) DEFAULT '1',
  `status` varchar(20) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `nome_Cliente` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_ordem`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

CREATE TABLE `prod_relation` (
  `id_relation` int(11) NOT NULL AUTO_INCREMENT,
  `id_estoque` int(11) DEFAULT NULL,
  `id_ordem` int(11) DEFAULT NULL,
  `nome_prod` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_relation`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

CREATE TABLE `funcionario` (
  `id_Funcionario` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `usuario` varchar(20) DEFAULT NULL,
  `senha` varchar(10) DEFAULT NULL,
  `telefone_Funcionario` varchar(20) DEFAULT NULL,
  `nome_Funcionario` varchar(50) DEFAULT NULL,
  `cargo_Funcionario` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_Funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;