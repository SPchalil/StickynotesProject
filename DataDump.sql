-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: stickynotesapp
-- ------------------------------------------------------
-- Server version	8.0.25

--
-- Table structure for table `stickynotes`
--

DROP TABLE IF EXISTS `stickynotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stickynotes` (
  `userid` int unsigned NOT NULL,
  `stickynoteid` bigint NOT NULL,
  `title` varchar(45) NOT NULL,
  `posx` int NOT NULL,
  `posy` int NOT NULL,
  `bgcolor` varchar(45) NOT NULL,
  `color` varchar(45) NOT NULL,
  `text` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`stickynoteid`),
  KEY `userid_idx` (`userid`),
  CONSTRAINT `userid_fk` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userid` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

