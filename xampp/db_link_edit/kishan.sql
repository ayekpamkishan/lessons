-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 30, 2015 at 11:24 AM
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
-- Table structure for table `hobbies`
--

CREATE TABLE IF NOT EXISTS `hobbies` (
  `MOBILE` varchar(10) NOT NULL,
  `INTEREST` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hobbies`
--

INSERT INTO `hobbies` (`MOBILE`, `INTEREST`) VALUES
('9876876767', 'Football'),
('9876876767', 'Movie'),
('9999888877', 'Reading'),
('7555555555', 'Football'),
('7555555555', 'Movie'),
('8441984765', 'Football'),
('8441984765', 'Movie'),
('9856413307', 'Football'),
('8981413307', 'Reading'),
('8888984765', 'Football');

-- --------------------------------------------------------

--
-- Table structure for table `subscription`
--

CREATE TABLE IF NOT EXISTS `subscription` (
  `NAME` varchar(30) NOT NULL,
  `EMAIL` varchar(30) NOT NULL,
  `MOBILE` varchar(10) NOT NULL,
  `SEX` varchar(7) NOT NULL,
  `COUNTRY` varchar(10) NOT NULL,
  `STATE` varchar(30) NOT NULL,
  `ADDRESS` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subscription`
--

INSERT INTO `subscription` (`NAME`, `EMAIL`, `MOBILE`, `SEX`, `COUNTRY`, `STATE`, `ADDRESS`) VALUES
('Kishan Ayekpam', 'ayekpamkishan@gmail.com', '9163199599', 'male', 'India', 'Manipur', 'Imphal West'),
('Ram', 'ram@hi.com', '8888984765', 'male', 'India', 'Assam', 'Lanka'),
('Sita', 'sita@yahoo.com', '8981413307', 'female', 'US', 'Arizona', 'california');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
