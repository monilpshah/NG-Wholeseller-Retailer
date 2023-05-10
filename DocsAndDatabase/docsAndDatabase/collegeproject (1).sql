-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2019 at 07:36 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `collegeproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill_details_table`
--

CREATE TABLE `bill_details_table` (
  `bill_id` int(11) NOT NULL,
  `fk_bill_amt` int(11) NOT NULL,
  `fk_product_id` int(11) NOT NULL,
  `purchase_pro_qty` int(11) NOT NULL,
  `fk_bill_no` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bill_details_table`
--

INSERT INTO `bill_details_table` (`bill_id`, `fk_bill_amt`, `fk_product_id`, `purchase_pro_qty`, `fk_bill_no`) VALUES
(1, 1200, 12, 10, 2),
(2, 1000, 10, 15, 3),
(8, 6000, 36, 2, 8),
(7, 3000, 38, 1, 8),
(9, 6000, 36, 1, 9),
(10, 6000, 38, 2, 9),
(11, 6900, 37, 1, 11),
(12, 6000, 38, 1, 11);

-- --------------------------------------------------------

--
-- Table structure for table `bill_table`
--

CREATE TABLE `bill_table` (
  `bill_no` int(11) NOT NULL,
  `bill_amt` int(11) NOT NULL,
  `fk_user_id` varchar(50) NOT NULL,
  `date` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bill_table`
--

INSERT INTO `bill_table` (`bill_no`, `bill_amt`, `fk_user_id`, `date`) VALUES
(1, 1200, 'ajay055@gmail.com', '2019-01-10'),
(2, 1200, 'raman234@gmail.com', '2019-01-10'),
(3, 1200, 'dharmik123@gmail.com', '2019-01-10'),
(4, 2600, 'rakesh@gamil.com', '2019-01-09'),
(5, 1500, 'saandip@gmail.ccom', '2019-04-14'),
(8, 9000, 'dharmiktrivedi86@gmail.com', '2019-04-15'),
(9, 12000, 'anjaliparmar0198@gmail.com', '2019-04-16'),
(10, 0, 'anjaliparmar0198@gmail.com', '2019-04-16'),
(11, 12900, 'dharmiktrivedi86@gmail.com', '2019-04-16');

-- --------------------------------------------------------

--
-- Table structure for table `brand_table`
--

CREATE TABLE `brand_table` (
  `brand_id` int(15) NOT NULL,
  `brand_name` varchar(50) NOT NULL,
  `brand_logo` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brand_table`
--

INSERT INTO `brand_table` (`brand_id`, `brand_name`, `brand_logo`) VALUES
(1, 'lux', '/images/luxlogo1.jpg'),
(2, 'biba', '/images/biba.png'),
(3, 'libas', '/images/liba.png'),
(4, 'rangriti', '/images/rangriti.png'),
(5, 'w', '/images/w.png');

-- --------------------------------------------------------

--
-- Table structure for table `cart_tbl`
--

CREATE TABLE `cart_tbl` (
  `cart_id` int(11) NOT NULL,
  `fk_user_id` varchar(30) NOT NULL,
  `fk_product_id` int(11) NOT NULL,
  `product_img` varchar(300) NOT NULL,
  `product_name` varchar(200) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart_tbl`
--

INSERT INTO `cart_tbl` (`cart_id`, `fk_user_id`, `fk_product_id`, `product_img`, `product_name`, `product_price`, `product_qty`) VALUES
(16, 'anjaliparmar0198@gmail.com', 29, 'product_img-1555140739360.jpg', 'lux Long Kurti of size m', 4500, 4),
(17, 'anjaliparmar0198@gmail.com', 33, 'product_img-1555141136449.jpg', 'lux Long Kurti of size xl', 2700, 3),
(18, 'anjaliparmar0198@gmail.com', 26, 'product_img-1555140530346.jpg', 'lux Anarkali kurti of size xl', 3000, 4),
(19, 'anjaliparmar0198@gmail.com', 37, 'product_img-1555141519319.jpg', 'lux Short Kurti of size xl', 2300, 3);

-- --------------------------------------------------------

--
-- Table structure for table `category_table`
--

CREATE TABLE `category_table` (
  `cat_id` int(11) NOT NULL,
  `cat_name` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category_table`
--

INSERT INTO `category_table` (`cat_id`, `cat_name`) VALUES
(5, 'Anarkali kurti'),
(4, 'Long Kurti'),
(6, 'Short Kurti');

-- --------------------------------------------------------

--
-- Table structure for table `product_detail_table`
--

CREATE TABLE `product_detail_table` (
  `prodetail_id` int(11) NOT NULL,
  `pro_size` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_detail_table`
--

INSERT INTO `product_detail_table` (`prodetail_id`, `pro_size`) VALUES
(1, 'x');

-- --------------------------------------------------------

--
-- Table structure for table `product_table`
--

CREATE TABLE `product_table` (
  `product_id` int(11) NOT NULL,
  `product_img` varchar(200) NOT NULL,
  `fk_cat_id` int(11) NOT NULL,
  `fk_brand_id` int(15) NOT NULL,
  `product_qty` int(11) NOT NULL,
  `product_size` varchar(10) NOT NULL,
  `product_color` varchar(30) NOT NULL,
  `product_price` int(11) NOT NULL,
  `fk_user_id` varchar(50) NOT NULL,
  `date` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_table`
--

INSERT INTO `product_table` (`product_id`, `product_img`, `fk_cat_id`, `fk_brand_id`, `product_qty`, `product_size`, `product_color`, `product_price`, `fk_user_id`, `date`) VALUES
(32, 'product_img-1555141091065.jpg', 4, 1, 2, 'm', 'red', 2700, 'bharat05@gmail.com', '2019-04-13'),
(31, 'product_img-1555141057257.jpg', 4, 1, 4, 'xxl', 'red', 2700, 'ajaychauhan645@gmail.com', '2019-04-13'),
(29, 'product_img-1555140739360.jpg', 4, 1, 4, 'm', 'blue', 4500, 'hiteshChavda66@gmail.com', '2019-04-13'),
(24, 'product_img-1555140302050.jpg', 5, 1, 0, 's', 'white', 1200, 'bharat05@gmail.com', '2019-04-13'),
(30, 'product_img-1555140891992.jpg', 5, 1, 3, 'xl', 'blue', 2900, 'kishor345@gmail.com', '2019-04-13'),
(28, 'product_img-1555140656902.jpg', 5, 1, 5, 'xxl', 'pink', 2500, 'dineshshah42@gmail.com', '2019-04-13'),
(26, 'product_img-1555140530346.jpg', 5, 1, 4, 'xl', 'green', 3000, 'ajaychauhan645@gmail.com', '2019-04-13'),
(33, 'product_img-1555141136449.jpg', 4, 1, 3, 'xl', 'orange', 2700, 'kishor345@gmail.com', '2019-04-13'),
(34, 'product_img-1555141168690.jpg', 4, 1, 3, 'xl', 'orange', 2700, 'dineshshah42@gmail.com', '2019-04-13'),
(35, 'product_img-1555141440466.jpg', 6, 1, 4, 'xxxl', 'pink', 3000, 'dineshshah42@gmail.com', '2019-04-13'),
(36, 'product_img-1555141476317.jpg', 6, 1, 3, 'xl', 'pink', 3000, 'bharat05@gmail.com', '2019-04-13'),
(37, 'product_img-1555141519319.jpg', 6, 1, 3, 'xl', 'blue', 2300, 'kishor345@gmail.com', '2019-04-13'),
(38, 'product_img-1555141566987.jpg', 6, 1, 3, 'xl', 'white', 3000, 'hiteshChavda66@gmail.com', '2019-04-13'),
(39, 'product_img-1555141621407.jpg', 6, 1, 3, 'xl', 'blue', 3300, 'ajaychauhan645@gmail.com', '2019-04-13');

-- --------------------------------------------------------

--
-- Table structure for table `temp_product_table`
--

CREATE TABLE `temp_product_table` (
  `product_id` int(11) NOT NULL,
  `product_img` varchar(200) NOT NULL,
  `fk_cat_id` int(11) NOT NULL,
  `fk_brand_id` int(11) NOT NULL,
  `product_qty` int(11) NOT NULL,
  `product_size` varchar(20) NOT NULL,
  `product_color` varchar(20) NOT NULL,
  `product_price` int(11) NOT NULL,
  `fk_user_id` varchar(50) NOT NULL,
  `date` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `temp_product_table`
--

INSERT INTO `temp_product_table` (`product_id`, `product_img`, `fk_cat_id`, `fk_brand_id`, `product_qty`, `product_size`, `product_color`, `product_price`, `fk_user_id`, `date`) VALUES
(2, 'product_img-1555141057257.jpg', 5, 1, 12, 's', 'red', 1200, 'abc@gmail.com', '2019-01-10'),
(3, 'product_img-1555414073199.jpg', 4, 2, 2, 'xl', 'yellow', 500, 'bharat05@gmail.com', '2019-04-16');

-- --------------------------------------------------------

--
-- Table structure for table `user_table`
--

CREATE TABLE `user_table` (
  `email_id` varchar(50) NOT NULL,
  `password` varchar(12) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `mobile_no` varchar(13) NOT NULL,
  `user_type` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `address` varchar(300) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_table`
--

INSERT INTO `user_table` (`email_id`, `password`, `user_name`, `mobile_no`, `user_type`, `city`, `address`) VALUES
('ajaychauhan645@gmail.com', 'ajay990', 'Mr.AJAY CHAUHAN', '9638020284', 'Wholesaler', 'Surat', '12,mhetanagar society near shiv complex ved road,surat'),
('bharat05@gmail.com', 'bharat55', 'Mr.BHARAT CHAUHAN', '9974312800', 'Wholesaler', 'Ahmedabad', '34-B part-2 shivsagar society,part-2 jivrajpark-51 '),
('dineshshah42@gmail.com', 'dineshww678', 'Mr. Dinesh Shah', '9099078543', 'Wholesaler', 'kalol', '5-A Gulab complex EastMumbai Andheri mumbai'),
('atulsudra34@gmail.com', 'atul878', 'Mr. Atul Sudra', '9488693478', 'Retailer', 'Broda', '78,Alkapuri complex near point shopping center baroda.'),
('hiteshChavda66@gmail.com', 'hitesh758', 'Mr. Hitesh Chavda', '9846372891', 'Wholesaler', 'kalol', '56,tirthbhumi society Part-3 Baputnagar\r\nAhemdabad'),
('kishor344@gmail.com', 'kishorch88', 'Mr. Kishor Chauhan', '9099923617', 'Wholesaler', 'kalol', '122-A Anand complex , vapi road'),
('arvind611@gmail.com', 'arvind34', 'Mr. Arvind sharma', '9654388521', 'Retailer', 'Rajkot', '68, kalavad road near Eveast Park ,Nana mava,Rajkot'),
('dharmiktrivedi86@gmail.com', 'dharmik647', 'Mr. Dharmik trivedi', '9854783839', 'Retailer', 'kalol', 'Ambikanagar near CharRsta Kalol'),
('anjaliparmar0198@gmail.com', 'anjali123', 'anjali parmar', '8988667788', 'Retailer', 'Ahemdabad', 'ytyuiki'),
('Dhruv345@gmail.com', 'dhruv8989', 'Mr.Dhruv Patel', '9783920208', 'Admin', 'Gandhinagar', '90,Zundal gam,Gandhinagar');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bill_details_table`
--
ALTER TABLE `bill_details_table`
  ADD PRIMARY KEY (`bill_id`);

--
-- Indexes for table `bill_table`
--
ALTER TABLE `bill_table`
  ADD PRIMARY KEY (`bill_no`);

--
-- Indexes for table `brand_table`
--
ALTER TABLE `brand_table`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `cart_tbl`
--
ALTER TABLE `cart_tbl`
  ADD PRIMARY KEY (`cart_id`);

--
-- Indexes for table `category_table`
--
ALTER TABLE `category_table`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `product_detail_table`
--
ALTER TABLE `product_detail_table`
  ADD PRIMARY KEY (`prodetail_id`);

--
-- Indexes for table `product_table`
--
ALTER TABLE `product_table`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `temp_product_table`
--
ALTER TABLE `temp_product_table`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `user_table`
--
ALTER TABLE `user_table`
  ADD PRIMARY KEY (`email_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bill_details_table`
--
ALTER TABLE `bill_details_table`
  MODIFY `bill_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `bill_table`
--
ALTER TABLE `bill_table`
  MODIFY `bill_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `brand_table`
--
ALTER TABLE `brand_table`
  MODIFY `brand_id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `cart_tbl`
--
ALTER TABLE `cart_tbl`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `category_table`
--
ALTER TABLE `category_table`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product_detail_table`
--
ALTER TABLE `product_detail_table`
  MODIFY `prodetail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product_table`
--
ALTER TABLE `product_table`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `temp_product_table`
--
ALTER TABLE `temp_product_table`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
