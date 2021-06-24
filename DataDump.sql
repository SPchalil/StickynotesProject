-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: stickynotesapp
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

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
-- Dumping data for table `stickynotes`
--

LOCK TABLES `stickynotes` WRITE;
/*!40000 ALTER TABLE `stickynotes` DISABLE KEYS */;
INSERT INTO `stickynotes` VALUES (2,0,'todo',100,50,'blue','black','test'),(2,1,'todo',600,200,'green','black',NULL),(3,2,'todo',50,250,'yellow','black','test'),(1,3,'todo',500,250,'white','black','Hello'),(1,4,'todo',100,100,'orange','black','test'),(4,5,'todo',200,300,'pink','black','test'),(1,7,'todo',220,430,'red','black','test'),(6,8,'todo',160,260,'purple','black','undefined'),(3,9,'todo',300,200,'violet','black','tes'),(1,10,'test',300,200,'violet','black','test'),(1,1622121034918,'Work',409,95,'#ae3d89','black','abcde'),(1,1622121185692,'Work',878,114,'#85238a','black',''),(1,1622122818287,'Work',1022,426,'#43b9be','black','test asdf'),(1,1622122927274,'Work',337,316,'#38a408','black',''),(1,1622122940115,'Work',366,317,'#887dcb','black',''),(1,1622651212593,'Work',894,417,'#8f2d1b','black','');
/*!40000 ALTER TABLE `stickynotes` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'john','john@gmail.com','john123'),(2,'ellie','ellie@gmail.com','ellie123'),(3,'harry','harry@gmail.com','harry123'),(4,'evan','evan@gmail.com','evan123'),(5,'david','david@gmail.com','david123'),(6,'joe','joe@gmail.com','joe123'),(7,'mary','mary@gmail.com','mary123'),(8,'dion','dion@gmail.com','dion123'),(9,'ben','ben@gmail.com','ben123'),(10,'holly','holly@gmail.com','holly123'),(11,'johanna','johanna@gmail.com','asdasd123'),(12,'johanna','johanna@gmail.com','asdasd123'),(13,'markus','mark@gmail.com','markus123'),(14,'kevin','kevin@gmail.com','kevin123'),(15,NULL,'harry@gmail.com','harry123'),(16,NULL,'harry@gmail.com','harr1234'),(17,NULL,'harry@gmail.com','harry123'),(18,NULL,'harry@gmail.com','harry234'),(19,NULL,'harry@gmail.com','harry234'),(20,NULL,'harry@gmail.com','har12345'),(21,NULL,'harry@gmail.com','harr2345'),(22,NULL,'harry@gmail.com','harr23455'),(23,NULL,'harry@gmail.com','harry123'),(24,NULL,'harry@gmail.com','harry123'),(25,NULL,'harry@gmail.com','harry123'),(26,NULL,'harry@gmail.com','harry234'),(27,NULL,'harry@gmail.com','harr4567'),(28,'Maggie','maggie@gmail.com','maggie123'),(29,'Lukee','lukee@gmail.com','lukee123'),(30,'Paatty','paatty@gmail.com','paatty123'),(31,'Christy','christy@gmail.com','christy123'),(32,'Katerina','kattie@gmail.com','kattie123'),(33,'Kiran','kiran@gmail.com','kiran123'),(34,'Anoop','anoop@gmail.com','anoop123'),(35,'Marcus','marcus@gmail.com','marcus123'),(36,'Steve','steve@gmail.com','steve123');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-18 11:03:39
