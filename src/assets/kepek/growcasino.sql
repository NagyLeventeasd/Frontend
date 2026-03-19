-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Már 19. 10:48
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `growcasino`
--
CREATE DATABASE IF NOT EXISTS `growcasino` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `growcasino`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `card`
--

CREATE TABLE `card` (
  `CardID` int(10) UNSIGNED NOT NULL COMMENT 'Kártya azonosító',
  `Numberint` int(16) NOT NULL COMMENT 'Szám azonosító',
  `Name` varchar(255) NOT NULL COMMENT 'Kártyatulajdonos neve',
  `CVC` int(3) NOT NULL COMMENT 'Kártya CVC száma',
  `Date` date NOT NULL COMMENT 'Kártya lejárati dátuma',
  `UserID` int(11) NOT NULL COMMENT 'Felhasználó azonosító'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `UserID` int(11) NOT NULL COMMENT 'Felhasználó azonosító',
  `PFP` varchar(255) DEFAULT NULL COMMENT 'Profilkép',
  `Psw` varchar(255) NOT NULL COMMENT 'Felhasználó jelszó',
  `Balance` int(11) NOT NULL COMMENT 'Felhasználó jelszó',
  `Username` varchar(24) NOT NULL COMMENT 'Felhasználónév',
  `Email` varchar(255) NOT NULL COMMENT 'Email cím',
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT 'Felhasználó létrehozásának ideje',
  `role` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`UserID`, `PFP`, `Psw`, `Balance`, `Username`, `Email`, `Created_at`, `role`) VALUES
(17, '17-2026-03-12-133254-Highschool_DxD-Gremory_Rias-748x508.jpg', '$2b$10$53a5zJiNY85GaR995vZfLO0vzJ6YpcJvvEISpGXaJbgn3sYfH4MEi', 0, 'ujnev', 'ddfud@vvd.hu', '2026-03-18 08:36:44', 0),
(19, '0', '$2b$10$enq4txaXoudMsJPv0EowkOx.RFPx7Ys1oA63lFzxokph/8lQfhKRC', 0, 'asdd', 'asdd', '2026-03-05 09:02:35', 0),
(20, '0', '$2b$10$8oJSrG1.gJPGctCcxvKoZOEYrZUDSIwxhKOCIBPGkd7oHDEYywYym', 0, 'assdd', 'assdd', '2026-03-05 09:48:09', 0);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `card`
--
ALTER TABLE `card`
  ADD PRIMARY KEY (`CardID`),
  ADD KEY `card_userid_index` (`UserID`);

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `user_username_unique` (`Username`),
  ADD UNIQUE KEY `user_email_unique` (`Email`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `card`
--
ALTER TABLE `card`
  MODIFY `CardID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Kártya azonosító';

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Felhasználó azonosító', AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
