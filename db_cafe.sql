-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2023 at 06:25 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_cafe`
--

-- --------------------------------------------------------

--
-- Table structure for table `detail_transaksis`
--

CREATE TABLE `detail_transaksis` (
  `id` int(11) NOT NULL,
  `id_transaksi` int(11) NOT NULL,
  `id_menu` int(11) NOT NULL,
  `harga` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `total_harga` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `detail_transaksis`
--

INSERT INTO `detail_transaksis` (`id`, `id_transaksi`, `id_menu`, `harga`, `qty`, `total_harga`, `createdAt`, `updatedAt`) VALUES
(1, 2, 1, 10000, 2, 20000, '2023-05-19 07:14:55', '2023-05-19 07:14:55'),
(2, 3, 1, 10000, 2, 20000, '2023-05-19 07:25:18', '2023-05-19 07:25:18'),
(3, 3, 2, 1000, 2, 2000, '2023-05-19 07:25:18', '2023-05-19 07:25:18'),
(4, 4, 1, 10000, 2, 20000, '2023-05-19 07:38:15', '2023-05-19 07:38:15'),
(5, 4, 2, 1000, 9, 9000, '2023-05-19 07:38:15', '2023-05-19 07:38:15'),
(6, 5, 1, 10000, 2, 20000, '2023-05-19 07:41:08', '2023-05-19 07:41:08'),
(7, 5, 2, 1000, 9, 9000, '2023-05-19 07:41:08', '2023-05-19 07:41:08'),
(8, 6, 1, 10000, 2, 20000, '2023-05-21 16:19:33', '2023-05-21 16:19:33'),
(9, 6, 2, 1000, 9, 9000, '2023-05-21 16:19:33', '2023-05-21 16:19:33');

-- --------------------------------------------------------

--
-- Table structure for table `mejas`
--

CREATE TABLE `mejas` (
  `id` int(11) NOT NULL,
  `nomor_meja` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mejas`
--

INSERT INTO `mejas` (`id`, `nomor_meja`, `createdAt`, `updatedAt`) VALUES
(1, '1s', '2023-05-19 07:13:45', '2023-05-19 07:13:45');

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `nama_menu` varchar(255) DEFAULT NULL,
  `jenis` enum('makanan','minuman') DEFAULT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `nama_menu`, `jenis`, `deskripsi`, `gambar`, `harga`, `createdAt`, `updatedAt`) VALUES
(1, 'UKL', 'minuman', 'keren', 'image-1684480452045-FOTO DEPI.JPG', 10000, '2023-05-19 07:14:12', '2023-05-19 07:14:12'),
(2, 'sushi', 'makanan', 'keren', 'image-1684481096338-bbk.png', 1000, '2023-05-19 07:24:56', '2023-05-19 07:24:56');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230516083133-create-user.js'),
('20230516083509-create-meja.js'),
('20230516083743-create-menu.js'),
('20230516084025-create-transaksi.js'),
('20230516084112-create-detail-transaksi.js');

-- --------------------------------------------------------

--
-- Table structure for table `transaksis`
--

CREATE TABLE `transaksis` (
  `id` int(11) NOT NULL,
  `tgl_transaksi` datetime DEFAULT NULL,
  `id_user` int(11) NOT NULL,
  `id_meja` int(11) NOT NULL,
  `nama_pelanggan` varchar(255) DEFAULT NULL,
  `status` enum('belum_bayar','lunas') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaksis`
--

INSERT INTO `transaksis` (`id`, `tgl_transaksi`, `id_user`, `id_meja`, `nama_pelanggan`, `status`, `createdAt`, `updatedAt`) VALUES
(2, '2022-05-20 00:00:00', 1, 1, 'test', 'lunas', '2023-05-19 07:14:55', '2023-05-19 07:14:55'),
(3, '2022-05-20 00:00:00', 1, 1, 'test', 'lunas', '2023-05-19 07:25:18', '2023-05-19 07:25:18'),
(4, '0000-00-00 00:00:00', 1, 1, 'test', 'lunas', '2023-05-19 07:38:15', '2023-05-19 07:38:15'),
(5, '2005-11-05 00:00:00', 1, 1, 'test', 'lunas', '2023-05-19 07:41:08', '2023-05-19 07:41:08'),
(6, '2005-11-05 00:00:00', 1, 1, 'coba', 'lunas', '2023-05-21 16:19:33', '2023-05-21 16:19:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nama_user` varchar(255) DEFAULT NULL,
  `role` enum('admin','manager','kasir') DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama_user`, `role`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'test2', 'manager', 'depii', '25f9e794323b453885f5181f1b624d0b', '2023-05-19 07:14:26', '2023-05-19 07:14:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `detail_transaksis`
--
ALTER TABLE `detail_transaksis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_transaksi` (`id_transaksi`),
  ADD KEY `id_menu` (`id_menu`);

--
-- Indexes for table `mejas`
--
ALTER TABLE `mejas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `transaksis`
--
ALTER TABLE `transaksis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_meja` (`id_meja`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `detail_transaksis`
--
ALTER TABLE `detail_transaksis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `mejas`
--
ALTER TABLE `mejas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `transaksis`
--
ALTER TABLE `transaksis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detail_transaksis`
--
ALTER TABLE `detail_transaksis`
  ADD CONSTRAINT `detail_transaksis_ibfk_1` FOREIGN KEY (`id_transaksi`) REFERENCES `transaksis` (`id`),
  ADD CONSTRAINT `detail_transaksis_ibfk_2` FOREIGN KEY (`id_menu`) REFERENCES `menus` (`id`);

--
-- Constraints for table `transaksis`
--
ALTER TABLE `transaksis`
  ADD CONSTRAINT `transaksis_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `transaksis_ibfk_2` FOREIGN KEY (`id_meja`) REFERENCES `mejas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
