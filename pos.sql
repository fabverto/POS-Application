-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 20, 2020 at 05:56 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `SKU` int(11) NOT NULL,
  `Category` varchar(255) NOT NULL,
  `Part` int(11) NOT NULL,
  `Product` varchar(255) NOT NULL,
  `Price` double NOT NULL,
  `Quantity` int(11) NOT NULL,
  `WholesalePrice` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`SKU`, `Category`, `Part`, `Product`, `Price`, `Quantity`, `WholesalePrice`) VALUES
(1, 'category1', 10, 'product1', 5, 100, 2.5),
(2, 'category2', 20, 'product2', 25.99, 50, 15),
(3, 'category3', 30, 'product3', 74.99, 30, 55.99),
(4, 'category4', 40, 'product4', 250, 4, 180.99),
(5, 'category5', 50, 'product5', 85.99, 10, 40.99),
(6, 'category1', 60, 'product6', 37.99, 16, 20),
(7, 'category1', 70, 'product7', 60, 150, 30),
(8, 'category3', 80, 'product8', 510.99, 1, 450.99),
(9, 'category4', 90, 'product9', 270, 4, 200),
(10, 'category5', 100, 'product10', 11.99, 300, 5.99),
(11, 'category2', 110, 'product11', 82.99, 100, 51.99),
(12, 'category1', 120, 'product12', 37.99, 90, 32.99);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `ordernum` int(11) NOT NULL,
  `customer` varchar(255) NOT NULL,
  `productPricing` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `part` int(11) NOT NULL,
  `product` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `quantity` int(11) NOT NULL,
  `discountValue` double NOT NULL,
  `total` double NOT NULL,
  `orderDate` date NOT NULL,
  `shipDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`ordernum`, `customer`, `productPricing`, `category`, `part`, `product`, `price`, `quantity`, `discountValue`, `total`, `orderDate`, `shipDate`) VALUES
(1, 'Customer 1', 'retail', 'category1', 10, 'product1', 5, 50, 10, 240, '2020-09-15', '2020-09-18'),
(2, 'customertwo', 'wholesale', 'category1', 60, 'product6', 20, 16, 4, 322.56, '0000-00-00', '0000-00-00'),
(3, 'Customer 2', 'retail', 'category3', 30, 'product3', 74.99, 30, 2, 2314.95, '0000-00-00', '0000-00-00'),
(4, 'Customer 2', 'retail', 'category3', 30, 'product3', 74.99, 30, 2, 2314.95, '0000-00-00', '0000-00-00'),
(5, 'Customer 2', 'wholesale', 'category1', 10, 'product1', 2.5, 100, 0, 262.5, '0000-00-00', '0000-00-00'),
(6, 'Customer 2', 'wholesale', 'category1', 10, 'product1', 2.5, 100, 0, 262.5, '0000-00-00', '0000-00-00'),
(7, 'Customer 2', 'retail', 'category2', 20, 'product2', 25.99, 52, 30, 1387.55, '0000-00-00', '0000-00-00'),
(8, 'Customer 2', 'wholesale', 'category1', 10, 'product1', 2.5, 100, 50, 131.25, '0000-00-00', '0000-00-00'),
(9, 'Customer 2', 'wholesale', 'category1', 10, 'product1', 2.5, 100, 50, 5983.95, '0000-00-00', '0000-00-00'),
(10, 'Customer 2', 'retail', 'category4', 90, 'product9', 270, 4, 9, 1031.94, '0000-00-00', '0000-00-00'),
(11, 'Customer 2', 'retail', 'category1', 10, 'product1', 5, 100, 10000, 691.85, '0000-00-00', '0000-00-00'),
(12, 'Customer 2', 'retail', 'category1', 120, 'product12', 37.99, 90, 99, 132.25, '0000-00-00', '0000-00-00'),
(13, 'Customer 2', 'wholesale', 'category1', 10, 'product1', 2.5, 2147483647, 90, 131.25, '0000-00-00', '0000-00-00'),
(14, 'Customer 2', 'retail', 'category1', 70, 'product7', 60, 414, 99, 295.67, '0000-00-00', '0000-00-00'),
(15, 'Customer 2', 'wholesale', 'category2', 20, 'product2', 15, 50, 0, 787.5, '0000-00-00', '0000-00-00'),
(16, 'Customer 2', 'wholesale', 'category1', 10, 'product1', 2.5, 100, 0, 262.5, '0000-00-00', '0000-00-00'),
(17, 'Customer 2', 'wholesale', 'category1', 10, 'product1', 2.5, 100, 0, 262.5, '0000-00-00', '0000-00-00'),
(18, 'Customer 2', 'wholesale', 'category1', 10, 'product1', 2.5, 100, 0, 262.5, '0000-00-00', '0000-00-00'),
(19, 'Customer 2', 'wholesale', 'category1', 10, 'product1', 2.5, 100, 0, 262.5, '0000-00-00', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`SKU`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ordernum`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `SKU` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `ordernum` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
