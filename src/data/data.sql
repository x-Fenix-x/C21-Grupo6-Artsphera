-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: artesphera_db
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'Irigoyen','Aconquija','Catamarca',1,'2023-12-18 00:25:55','2023-12-18 00:25:55'),(2,'Paz','Casabindo','Jujuy',2,'2023-12-18 00:25:55','2023-12-18 00:27:03');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Pintura','./cards/card1.jpg','2023-12-18 00:25:55','2023-12-18 00:25:55'),(2,'Escultura','./cards/card2.jpeg','2023-12-18 00:25:55','2023-12-18 00:25:55'),(3,'Fotografía','./cards/card3.jpg','2023-12-18 00:25:55','2023-12-18 00:25:55'),(4,'Dibujo','./cards/card4.jpg','2023-12-18 00:25:55','2023-12-18 00:25:55'),(5,'Ilustración','./cards/card5.jpg','2023-12-18 00:25:55','2023-12-18 00:25:55'),(6,'Collage','./cards/card6.jpg','2023-12-18 00:25:55','2023-12-18 00:25:55');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'1p-totoro.jpg',1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(2,'2e-diana.jpeg',2,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(3,'3p-girlWhite.jpeg',3,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(4,'4d-marilyn.jpg',4,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(5,'5i-loves.jpg',5,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(6,'6f-girlColor.jpg',6,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(7,'7p-lost.jpeg',7,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(8,'8c-girl.jpg',8,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(9,'9f-marilynSad.jpeg',9,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(10,'10p-flores.jpg',10,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(11,'11c-monkey.jpeg',11,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(12,'12c-primavera.jpeg',12,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(13,'13d-faces.jpeg',13,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(14,'14c-ali.jpeg',14,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(15,'15c-eggs.jpeg',15,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(16,'16c-espectros.jpeg',16,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(17,'17f-bowie.jpeg',17,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(18,'18i-conectados.jpeg',18,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(19,'19d-oneDay.jpeg',19,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(20,'20c-queen.jpeg',20,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(21,'21c-aitana.jpeg',21,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(22,'22p-miradas.jpeg',22,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(23,'23d-control.jpeg',23,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(24,'24p-womenAnimals.jpeg',24,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(25,'25i-soledad.jpeg',25,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(26,'26i-octava.jpeg',26,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(27,'27i-butterfly.jpeg',27,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(28,'28f-desolation.jpeg',28,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(29,'29i-danza.jpeg',29,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(30,'30i-lobo.jpeg',30,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Totoro',5000,0,'Mi vecino Totoro',1,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(2,'Diana',2000,0,'Estatua del siglo XX',2,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(3,'Girl White',7000,0,'Retrato',1,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(4,'Marilyn Monroe',7000,0,'Marilyn Monroe',4,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(5,'Loves',7000,0,'Loves',5,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(6,'The Girl color',7000,0,'The Girl color',3,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(7,'Lost',7000,10,'Pensamientos',5,2,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(8,'Girl',5000,5,'Collage girl',6,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(9,'Marilyn sad',2000,15,'Marilyn sad',4,2,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(10,'Flowers',7000,0,'Flowers',1,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(11,'Monkey',5500,12,'Monkey',5,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(12,'Primavera',7000,0,'Primavera',5,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(13,'Faces',8500,0,'Faces',4,3,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(14,'Ali',3600,7,'Ali',5,2,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(15,'Eggs',8000,0,'Eggs',5,3,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(16,'Spectros',7000,0,'Spectros',5,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(17,'Bowie',10000,0,'David Bowie',3,3,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(18,'Conectados',8000,8,'Conexión del alma',5,2,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(19,'One day',9500,0,'One day',4,3,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(20,'Queen',5000,0,'Blonde Queen',5,3,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(21,'Aitana',4200,0,'Aitana',6,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(22,'Miradas',11000,0,'Miradas',1,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(23,'Control',9000,0,'The control',4,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(24,'Women animals',7000,0,'Women animals beautiful',1,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(25,'Soledad',5000,7,'Soledad',5,2,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(26,'Octava',7500,10,'Octava',5,2,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(27,'Butterfly',9600,12,'Butterfly',5,2,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(28,'Desolation',6000,9,'Desolation',3,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(29,'Women dance',5000,0,'Mujeres bailando',5,1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(30,'Wolf',12000,0,'Naturaleza',5,3,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Administrador','2023-12-18 00:25:55','2023-12-18 00:25:55'),(2,'Usuario','2023-12-18 00:25:55','2023-12-18 00:25:55');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (1,'Nuevo','2023-12-18 00:25:55','2023-12-18 00:25:55'),(2,'Ofertas','2023-12-18 00:25:55','2023-12-18 00:25:55'),(3,'Selección Semana','2023-12-18 00:25:55','2023-12-18 00:25:55');
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20231024002244-create-category.js'),('20231024002534-create-section.js'),('20231024003708-create-product.js'),('20231024004910-create-image.js'),('20231024005521-create-role.js'),('20231024005953-create-user.js'),('20231024016834-create-addresses.js'),('20231024024729-create-status.js'),('20231024030611-create-order.js'),('20231024032132-create-item.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
INSERT INTO `statuses` VALUES (1,'open','2023-12-18 00:25:55','2023-12-18 00:25:55'),(2,'close','2023-12-18 00:25:55','2023-12-18 00:25:55');
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','Artesphera','admin@artesphera.com','$2a$10$SfBc1RudoK3PmeOOuOOSMOkm23pPOuLJwwmmE7y3BITS9RcsNMz7.','1-admin.png',1,'2023-12-18 00:25:55','2023-12-18 00:25:55',NULL),(2,'User','Artesphera','user@artesphera.com','$2a$10$Pt3A3cvWAGYKN8sGtO37n.F/dnL57ug4CHzR.JBYUuinYHs8r1AzS','d84bc7ab-756a-49a3-b32c-54da7d6e99db.jpg',2,'2023-12-18 00:25:55','2023-12-18 00:27:03',NULL);
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

-- Dump completed on 2023-12-17 21:34:55
