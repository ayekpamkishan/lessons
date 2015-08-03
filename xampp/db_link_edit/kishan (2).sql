-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 03, 2015 at 10:49 AM
-- Server version: 5.6.14
-- PHP Version: 5.5.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `kishan`
--

-- --------------------------------------------------------

--
-- Table structure for table `subscription`
--

CREATE TABLE IF NOT EXISTS `subscription` (
  `NAME` varchar(30) NOT NULL,
  `EMAIL` varchar(30) NOT NULL,
  `MOBILE` varchar(10) NOT NULL,
  `SEX` varchar(7) NOT NULL,
  `INTEREST` varchar(35) NOT NULL,
  `COUNTRY` varchar(10) NOT NULL,
  `STATE` varchar(30) NOT NULL,
  `ADDRESS` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subscription`
--

INSERT INTO `subscription` (`NAME`, `EMAIL`, `MOBILE`, `SEX`, `INTEREST`, `COUNTRY`, `STATE`, `ADDRESS`) VALUES
('sagar', 'sagar@gmail.com', '9856413307', 'male', 'Football,Movie', 'India', 'Arunachal Pradesh', 'TSHTDSHBSDTGH'),
('Kishan', 'ayekpam@fusioncharts.com', '9163199599', 'male', 'Movie,Reading', 'India', 'Arunachal Pradesh', 'dfvbdsfvg'),
('Ram', 'dsfas@ghg.com', '9163199588', 'male', 'Football,Reading', 'India', 'Bihar', 'sdfgavaesdrfvg');

-- --------------------------------------------------------

--
-- Table structure for table `subscriptionTable`
--

CREATE TABLE IF NOT EXISTS `subscriptionTable` (
  `NAME` varchar(30) NOT NULL,
  `EMAIL` varchar(30) NOT NULL,
  `MOBILE` varchar(10) NOT NULL,
  `SEX` varchar(10) NOT NULL,
  `INTEREST` varchar(30) NOT NULL,
  `COUNTRY` varchar(30) NOT NULL,
  `STATE` varchar(40) NOT NULL,
  `ADDRESS` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subscriptionTable`
--

INSERT INTO `subscriptionTable` (`NAME`, `EMAIL`, `MOBILE`, `SEX`, `INTEREST`, `COUNTRY`, `STATE`, `ADDRESS`) VALUES
('sagar', 'sagar111@gmail.com', '9888888888', 'male', 'Movie,Reading,', 'India', '', 'kljghfdcfgc'),
('Kishan Ayekpam', 'kishan@gmail.com', '9163199599', 'male', 'Movie,Reading,', 'India', 'Andhra Pradesh', 'dsfgvasdfvgSAWFc'),
('sita', 'sita@gmail.com', '9856413307', 'female', 'Reading,', 'India', 'Delhi', 'ghfghdfhxc');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
