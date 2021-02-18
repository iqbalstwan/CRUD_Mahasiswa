-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 18 Feb 2021 pada 04.19
-- Versi server: 10.4.13-MariaDB
-- Versi PHP: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_mhs`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_nilai`
--

CREATE TABLE `data_nilai` (
  `id_nilai` int(20) NOT NULL,
  `id_mhs` int(20) NOT NULL,
  `id_matkul` int(20) NOT NULL,
  `nilai` varchar(100) NOT NULL,
  `keterangan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `data_nilai`
--

INSERT INTO `data_nilai` (`id_nilai`, `id_mhs`, `id_matkul`, `nilai`, `keterangan`) VALUES
(2, 1311, 12, '80', 'kamu terbaik'),
(3, 1311, 13, '95', 'Pertahankan'),
(4, 1311, 14, '70', 'Tetap Semangat'),
(5, 1318, 12, '65', 'Semangat!'),
(6, 1317, 14, '98', 'Pertahankan'),
(7, 1313, 18, '40', 'Lebih giat lagi'),
(8, 1312, 18, '86', 'Kerja bagus'),
(9, 1311, 11, '70', 'Lebih Fokus'),
(10, 1311, 15, '90', 'Pertahankan!'),
(11, 1314, 11, '90', 'Pertahankan!'),
(12, 1314, 12, '80', 'Hebat'),
(13, 1314, 13, '80', 'Kamu Terbaik'),
(14, 1317, 11, '9', 'Pertahankan'),
(15, 1318, 12, '97', 'Kamu Terbaik!');

-- --------------------------------------------------------

--
-- Struktur dari tabel `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `id_mhs` int(20) NOT NULL,
  `nama_mhs` varchar(100) NOT NULL,
  `alamat_mhs` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `mahasiswa`
--

INSERT INTO `mahasiswa` (`id_mhs`, `nama_mhs`, `alamat_mhs`) VALUES
(1311, 'Andrean', 'Makassar'),
(1312, 'Samudra', 'Bogor'),
(1313, 'John', 'Jakarta'),
(1314, 'Ray', 'Lampung'),
(1315, 'Ranty', 'Bogor'),
(1316, 'Jonathan', 'Jakarta'),
(1317, 'Tanaki', 'Bogor'),
(1318, 'Jordan', 'Bandung'),
(1319, 'Rena', 'Bogor');

-- --------------------------------------------------------

--
-- Struktur dari tabel `mata_kuliah`
--

CREATE TABLE `mata_kuliah` (
  `id_matkul` int(20) NOT NULL,
  `nama_matkul` varchar(100) NOT NULL,
  `id_mhs` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `mata_kuliah`
--

INSERT INTO `mata_kuliah` (`id_matkul`, `nama_matkul`, `id_mhs`) VALUES
(11, 'Algoritma Pemrograman', 1311),
(12, 'Matematika', 1311),
(13, 'Statistika', 1311),
(14, 'Fisika', 1313),
(15, 'Kimia', 1312),
(16, 'Struktur & Organisasi Data', 1312),
(17, 'Sistem Operasi', 1313),
(18, 'Pengantar Akuntansi', 1316),
(19, 'Bahasa Indonesia ', 1313);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `data_nilai`
--
ALTER TABLE `data_nilai`
  ADD PRIMARY KEY (`id_nilai`),
  ADD KEY `id_mhs` (`id_mhs`),
  ADD KEY `id_matkul` (`id_matkul`);

--
-- Indeks untuk tabel `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`id_mhs`);

--
-- Indeks untuk tabel `mata_kuliah`
--
ALTER TABLE `mata_kuliah`
  ADD PRIMARY KEY (`id_matkul`),
  ADD KEY `id_mhs` (`id_mhs`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `data_nilai`
--
ALTER TABLE `data_nilai`
  MODIFY `id_nilai` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `mahasiswa`
--
ALTER TABLE `mahasiswa`
  MODIFY `id_mhs` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1320;

--
-- AUTO_INCREMENT untuk tabel `mata_kuliah`
--
ALTER TABLE `mata_kuliah`
  MODIFY `id_matkul` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `data_nilai`
--
ALTER TABLE `data_nilai`
  ADD CONSTRAINT `data_nilai_ibfk_1` FOREIGN KEY (`id_mhs`) REFERENCES `mahasiswa` (`id_mhs`),
  ADD CONSTRAINT `data_nilai_ibfk_2` FOREIGN KEY (`id_matkul`) REFERENCES `mata_kuliah` (`id_matkul`);

--
-- Ketidakleluasaan untuk tabel `mata_kuliah`
--
ALTER TABLE `mata_kuliah`
  ADD CONSTRAINT `mata_kuliah_ibfk_1` FOREIGN KEY (`id_mhs`) REFERENCES `mahasiswa` (`id_mhs`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
