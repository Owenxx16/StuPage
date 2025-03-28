-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th3 28, 2025 lúc 03:42 AM
-- Phiên bản máy phục vụ: 8.2.0
-- Phiên bản PHP: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `stufake1`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `camnang`
--

DROP TABLE IF EXISTS `camnang`;
CREATE TABLE IF NOT EXISTS `camnang` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(20) NOT NULL,
  `updated_at` datetime NOT NULL,
  `head` varchar(250) NOT NULL,
  `body` varchar(250) NOT NULL,
  `footer` varchar(250) NOT NULL,
  `altimg` varchar(250) NOT NULL,
  `image` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`) VALUES
(1, 'thong bao', '2025-03-21 20:03:15'),
(2, 'Tin tức', '2025-03-21 20:04:36'),
(3, 'Tin tức', '2025-03-21 20:07:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chuongtrinh`
--

DROP TABLE IF EXISTS `chuongtrinh`;
CREATE TABLE IF NOT EXISTS `chuongtrinh` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `updated_at` datetime NOT NULL,
  `content` varchar(255) NOT NULL,
  `link` text NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `chuongtrinh`
--

INSERT INTO `chuongtrinh` (`id`, `title`, `updated_at`, `content`, `link`, `category_id`) VALUES
(1, 'Chương trình đào tạo đại học khóa 2022 - Ngành Thiết kế Công nghiệp', '2025-03-24 14:42:20', 'Chương trình đào tạo đại học khóa 2022 - Ngành Thiết kế Công nghiệp', 'https://images.stu.edu.vn/ckfinder/uploads/links/Phong%20QLKH-SDH/quang/09_CTDT%20TKCN%202022_update_compressed.pdf', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `daotao`
--

DROP TABLE IF EXISTS `daotao`;
CREATE TABLE IF NOT EXISTS `daotao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nametrain` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `daotao`
--

INSERT INTO `daotao` (`id`, `nametrain`) VALUES
(1, 'Biểu đồ Giảng Dạy & Học Tập');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `department`
--

DROP TABLE IF EXISTS `department`;
CREATE TABLE IF NOT EXISTS `department` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tenPB` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `department`
--

INSERT INTO `department` (`id`, `tenPB`) VALUES
(1, 'Phòng đào tạo');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `feedback`
--

DROP TABLE IF EXISTS `feedback`;
CREATE TABLE IF NOT EXISTS `feedback` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `address` varchar(250) NOT NULL,
  `title` varchar(200) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `feedback`
--

INSERT INTO `feedback` (`id`, `name`, `phone`, `address`, `title`, `content`) VALUES
(1, 'Quoc Vinh', '0908030201', 'Quan 7', 'rất thích trường học', 'trường sạch, rau xanh');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giangday`
--

DROP TABLE IF EXISTS `giangday`;
CREATE TABLE IF NOT EXISTS `giangday` (
  `id` int NOT NULL,
  `updated_at` datetime NOT NULL,
  `image` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hocthi`
--

DROP TABLE IF EXISTS `hocthi`;
CREATE TABLE IF NOT EXISTS `hocthi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `updated_at` datetime NOT NULL,
  `content` text NOT NULL,
  `image` text,
  `description` text NOT NULL,
  `link` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khoa`
--

DROP TABLE IF EXISTS `khoa`;
CREATE TABLE IF NOT EXISTS `khoa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `khoa`
--

INSERT INTO `khoa` (`id`, `name`) VALUES
(1, 'Công Nghệ Thông Tin');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lienket`
--

DROP TABLE IF EXISTS `lienket`;
CREATE TABLE IF NOT EXISTS `lienket` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(250) NOT NULL,
  `sponsor` varchar(255) NOT NULL,
  `link` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news`
--

DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text,
  `image_title` varchar(255) NOT NULL,
  `category_id` int NOT NULL,
  `user_id` int NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `image_title`, `category_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742566028122.jpg', 1, 1, '2025-03-21 14:07:08', '2025-03-21 21:07:08'),
(2, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742566133308.jpg', 1, 1, '2025-03-21 14:08:53', '2025-03-21 21:08:53'),
(3, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742566679904.jpg', 1, 1, '2025-03-21 14:18:00', '2025-03-21 21:17:59'),
(4, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742567690645.jpg', 1, 1, '2025-03-21 14:34:51', '2025-03-21 21:34:50'),
(6, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742569082371.jpg', 1, 1, '2025-03-21 14:58:02', '2025-03-21 21:58:02'),
(7, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742569304982.jpg', 1, 1, '2025-03-21 15:01:45', '2025-03-21 22:01:45'),
(8, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742570294816.jpg', 1, 1, '2025-03-21 15:18:15', '2025-03-21 22:18:14'),
(9, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742570644875.jpg', 1, 1, '2025-03-21 15:24:05', '2025-03-21 22:24:04'),
(10, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742572428377.jpg', 1, 1, '2025-03-21 15:53:48', '2025-03-21 22:53:48'),
(11, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742572768866.jpg', 1, 1, '2025-03-21 15:59:29', '2025-03-21 22:59:28'),
(12, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742572799543.jpg', 1, 1, '2025-03-21 16:00:00', '2025-03-21 22:59:59'),
(13, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '/assets/thumbnails/1742573040621.jpg', 1, 1, '2025-03-21 16:04:01', '2025-03-21 23:04:00'),
(14, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742573098037.jpg', 1, 1, '2025-03-21 16:04:58', '2025-03-21 23:04:58'),
(15, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742573221203.jpg', 1, 1, '2025-03-21 16:07:01', '2025-03-21 23:07:01'),
(16, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742573261386.jpg', 1, 1, '2025-03-21 16:07:41', '2025-03-21 23:07:41'),
(17, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742573275893.jpg', 1, 1, '2025-03-21 16:07:56', '2025-03-21 23:07:55'),
(18, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742573534620.jpg', 1, 1, '2025-03-21 16:12:15', '2025-03-21 23:12:14'),
(19, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742573557654.jpg', 1, 1, '2025-03-21 16:12:38', '2025-03-21 23:12:37'),
(20, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742573564257.jpg', 1, 1, '2025-03-21 16:12:44', '2025-03-21 23:12:44'),
(21, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742573930318.jpg', 1, 1, '2025-03-21 16:18:50', '2025-03-21 23:18:50'),
(22, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '1742573970101.jpg', 2, 1, '2025-03-21 16:19:30', '2025-03-21 23:19:30'),
(23, 'Trường Đại học Công nghệ Sài Gòn hợp tác với Viện XYZ', 'Nội dung bài viết', '/uploads/news_thumbnail/1742574262069.jpg', 2, 1, '2025-03-21 16:24:22', '2025-03-21 23:24:22'),
(24, 'xin chào', 'ten', 'assets/1742800204162.png', 1, 1, '2025-03-21 16:26:39', '2025-03-24 07:10:04'),
(25, 'Tdasdasdasdasdas', 'Nội dung bài viết', '1742798118700.jpg', 2, 1, '2025-03-24 06:35:19', '2025-03-24 13:35:18'),
(26, 'Tdasdasdasdasdas', 'Nội dung bài viết', '1742799099501.jpg', 2, 1, '2025-03-24 06:51:40', '2025-03-24 13:51:39'),
(27, 'Tdasdasdasdasdas', 'Nội dung bài viết', 'assets/${mainImageFile.filename}', 2, 1, '2025-03-24 06:54:52', '2025-03-24 13:54:52'),
(28, 'Tdasdasdasdasdas', 'Nội dung bài viết', 'assets/1742799327945.jpg', 2, 1, '2025-03-24 06:55:28', '2025-03-24 13:55:27'),
(29, 'Tdasdasdasdasdas', 'Nội dung bài viết', 'assets/1742800197854.jpg', 2, 1, '2025-03-24 07:09:58', '2025-03-24 14:09:57'),
(30, 'test', 'Nội dung bài viết', 'assets/1742803499663.jpg', 2, 1, '2025-03-24 08:05:00', '2025-03-24 15:04:59');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news_content`
--

DROP TABLE IF EXISTS `news_content`;
CREATE TABLE IF NOT EXISTS `news_content` (
  `id` int NOT NULL AUTO_INCREMENT,
  `news_id` int NOT NULL,
  `type` enum('text','image') NOT NULL,
  `value` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `news_id` (`news_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `news_content`
--

INSERT INTO `news_content` (`id`, `news_id`, `type`, `value`) VALUES
(1, 1, 'text', 'Nội dung chi tiết bài viết'),
(2, 2, 'text', 'Nội dung chi tiết bài viết'),
(3, 2, 'text', 'hi'),
(4, 3, 'text', 'Nội dung chi tiết bài viết'),
(5, 3, 'text', 'hi'),
(6, 4, 'text', 'Nội dung chi tiết bài viết'),
(7, 4, 'text', 'hi'),
(8, 4, 'image', '/assets/1742567690645.jpg'),
(10, 6, 'image', '/assets/content_news/1742569082371.jpg'),
(11, 7, 'text', 'đasad'),
(12, 8, 'text', 'hii'),
(13, 9, 'text', 'hii'),
(14, 10, 'text', 'hii'),
(15, 11, 'text', 'hii'),
(16, 12, 'text', 'hii'),
(17, 14, 'text', 'hii'),
(18, 15, 'text', 'hii'),
(19, 15, 'image', '/assets/content_news/1742573221203.jpg'),
(20, 16, 'text', 'hii'),
(21, 17, 'text', 'hii'),
(22, 19, 'text', 'hii'),
(23, 20, 'text', 'hii'),
(24, 20, 'image', '/assets/content_news/1742573564257.jpg'),
(25, 19, 'text', 'hello'),
(26, 19, 'text', 'hi'),
(27, 19, 'image', '/content_news/1742803463907.jpg'),
(28, 30, 'text', 'xin chào mọi người'),
(29, 30, 'image', '/content_news/1742803611451.jpg'),
(30, 30, 'image', '/content_news/1742805555840.png'),
(31, 30, 'text', 'xin chào mọi người'),
(32, 30, 'text', 'hu'),
(34, 30, 'image', 'assets/content_news/1742805709211.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`) VALUES
(1, 'admin123', 'admin@admin.com', '$2b$10$hvKSn2Ydl8ccnvWIX1xz1OWWpGBf8chQcbbmJz.UrC5gXLivNvzqe', '2025-03-21 20:35:58');

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `news_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `news_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `news_content`
--
ALTER TABLE `news_content`
  ADD CONSTRAINT `news_content_ibfk_1` FOREIGN KEY (`news_id`) REFERENCES `news` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
