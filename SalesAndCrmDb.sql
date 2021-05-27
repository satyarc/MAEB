-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.5.9-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for salesandcrm
DROP DATABASE IF EXISTS `salesandcrm`;
CREATE DATABASE IF NOT EXISTS `salesandcrm` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `salesandcrm`;

-- Dumping structure for table salesandcrm.agents
DROP TABLE IF EXISTS `agents`;
CREATE TABLE IF NOT EXISTS `agents` (
  `AgentId` varchar(50) NOT NULL,
  `AgentName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`AgentId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table salesandcrm.customers
DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `CustomerId` varchar(50) NOT NULL,
  `CustomerName` varchar(50) DEFAULT NULL,
  `AgentId` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`CustomerId`),
  KEY `AgentId` (`AgentId`),
  CONSTRAINT `AgentId` FOREIGN KEY (`AgentId`) REFERENCES `agents` (`AgentId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table salesandcrm.orders
DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `OrderId` varchar(50) NOT NULL,
  `CustomerId` varchar(50) DEFAULT NULL,
  `AgentId` varchar(50) DEFAULT NULL,
  `status` char(50) DEFAULT NULL,
  `Channel` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`OrderId`),
  KEY `FK_customer` (`CustomerId`),
  KEY `FK_agent` (`AgentId`),
  CONSTRAINT `FK_agent` FOREIGN KEY (`AgentId`) REFERENCES `agents` (`AgentId`),
  CONSTRAINT `FK_customer` FOREIGN KEY (`CustomerId`) REFERENCES `customers` (`CustomerId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
