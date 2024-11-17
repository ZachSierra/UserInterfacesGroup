-- MySQL dump 10.13  Distrib 5.7.24, for osx10.9 (x86_64)
--
-- Host: localhost    Database: FindMyPlant
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `plantprofiles`
--

DROP TABLE IF EXISTS `plantprofiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plantprofiles` (
  `plant_id` int NOT NULL AUTO_INCREMENT,
  `Common_Name` text,
  `Scientific_Name` text,
  `Size_in_ft` text,
  `Difficulty` text,
  `Location` text,
  `Light_Requirement` text,
  `Watering_Needs` text,
  `Growth_Habit` text,
  `Flowering` text,
  `Atmosphere` text,
  `Colors` text,
  `Temperature_in_fahrenheit` text,
  `Humidity_Requirements` text,
  `Pet_Friendly` text,
  `Pest_Resistant` text,
  `Description` text,
  PRIMARY KEY (`plant_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plantprofiles`
--

LOCK TABLES `plantprofiles` WRITE;
/*!40000 ALTER TABLE `plantprofiles` DISABLE KEYS */;
INSERT INTO `plantprofiles` VALUES (1,'Pothos / Devil\'s Ivy','Epipremnum aureum','6-10','Easy','Indoor','Low to medium ','Moderate','Trailing/Vining','','Relaxing, casual','Green \nWhite, Yellow, \nor Light Green\n','65-85 ','Average','No','','Beginner friendly! Perfect for \nlow light and indoors'),(2,'Aloe Vera','Aloe barbadensis miller','1-2','Easy','Both','Bright ','Low','Upright','','Minimal, desert','Green ','55-80','Low','No','','Valued for its medicinal uses\nand ability to thrive \nwith minimal care'),(3,'Fiddle Leaf Fig','Ficus lyrata','6-10','Hard','Indoor','Bright ','Moderate','Upright','','Elegant, modern','Dark green','60-75','High','No','','Striking, statement plant \nwith large leaves'),(4,'Spider Plant','Chlorophytum comosum','1-2','Easy','Indoor','Bright ','Moderate','Arching','','Airy, fresh','Green, White','55-80','Average','Yes','','Adaptable houseplant known \nfor its air-purifying qualities'),(5,'Boston Fern','Nephrolepis exaltata','1-3','Moderate','Both','Bright ','High','Arching','','Lush, Tropical','Bright Green','60-75','High','Yes','','Lush, attractive plant \nthat thrives in humid conditions'),(6,'Areca / Butterfly Palm','Dypsis lutescens','6-7','Moderate','Indoor','Bright ','Moderate','Upright','','Tropical','Green','65-75','High','Yes','','Elegant, air-purifying plant\n that adds tropical vibes'),(7,'Calathea / Prayer Plant','Calathea spp.','1-3','Hard','Indoor','Bright ','High','Upright','','Artistic, Vibrant','Green, Purple,\nPink, White','65-80','High','Yes','','Stunning foliage and unique \nleaf patterns, but it requires\ndiligent care'),(8,'Succulent','Echeveria spp. ','>1','Moderate','Both','Bright ','Low','Rosette-shaped','','Modern, Minimal','Green, Purple,\nRed, Pink','60-80','Low','No','','Beautiful rosette shape \nand vibrant colors'),(9,'Rubber Plant','Ficus elastica','3-8','Moderate','Indoor','Bright ','Moderate','Upright','','Sleek, bold, \ncontemporary','Dark Green, \nBurgundy, \nCream, Pink','60-80','Average','Mildly','','Large, glossy leaves that help\npurify the air'),(10,'Prayer Plant','Maranta leuconeura','>1','Easy','Indoor','Bright ','Moderate','Low','','Unique','Green, Red,\nPurple, White','65-80','High','No','','Patterned leaves that fold at\nnight'),(11,'ZZ Plant','Zamioculcas zamiifolia','2-3','Easy','Indoor','Low ','Low','Upright','','Modern, Clean','Dark Green','60-75','Low','Mildly','','Prized for its resilience and \nability to thrive in low light'),(12,'Monstera','Monstera deliciosa','3-10','Moderate','Indoor','Bright ','Moderate','Climbing/Trailing','','Tropical','Green','65-85','High','Mildly','','Dramatic foliage and unique\nappearance, adding a \ntropical touch'),(13,'Snake Plant','Sanseviera trifasciata','1-4','Easy','Both','Low ','Low','Upright','','Modern','Dark Green, \nYellow, White','60-80','Low','Mildly','','One of the toughest houseplants\noften recommended for those \nwho may not have a \ngreen thumb!'),(14,'Orchid','Phalaenopsis spp. ','1-3','Hard','Both','Bright ','Moderate','Upright','Yes','Elegant, \nSophisticated','White, Pink,\nPurple, Yellow,\nRed','65-85','High','No','','Exquisite blooms and delicate \nbeauty, but they require\n specific care'),(15,'String of Hearts','Ceropegia woodii','1-3','Moderate','Indoor','Bright ','Low','Trailing ','','Delicate,\nWhimsical','Green, Silver,\nWhite, Purple','65-80','Average','No','','Whimsical touch to any space\n with its delicate, \nheart-shaped leaves'),(16,'Bird\'s Nest Fern','Asplenium nidus','2-4','Easy','Indoor','Low to Bright','Moderate','Rosette-shaped','','Lush, Tropical','Bright Green','60-75','High','Yes','','Tropical fern with wavy leaves,\nsimple yet lush feel'),(17,'Chinese Money Plant','Pilea peperomiodes','1-2','Easy','Indoor','Bright ','Low','Upright','','Minimalist, Quirky','Green','60-75','Average','Yes','','Round, coin-shaped leaves are\nthe perfect touch of modern\nwhimsy'),(18,'Bougainvillea','Bougainvillea spectabilis','15-30','Moderate','Outdoor','Full sun','Low','Climbing, \nVining','Yes','Tropical, \nVibrant','Pink, Red,\nPurple, Orange','60-90','Low','No','','Vigorous, flowering vine\nknown for its bright bracts that\nbloom in a variety of colors'),(19,'Hibiscus','Hibiscus rosa-sinensis','3-6','Moderate','Outdoor','Full sun','Moderate','Bushy','Yes','Tropical,\nCheerful','Red, Pink,\nYellow, Orange','60-85','High','No','','Large, colorful flowers, that\nadd a tropical flair to\noutdoor gardens'),(20,'Gardenia','Gardenia jasminoides','3-8','Difficult','Outdoor','Partial shade','High','Shrub,\nFlowering','','Elegant','White','60-75','High','No','','A beautiful, fragrant shrub\nknown for its creamy white\nflowers and glossy green leaves'),(21,'Plumeria/Frangipani','Plumeria rubra','6-15','Moderate','Outdoor','Full sun','Moderate','Bushy','Yes','Tropical','White, Yellow,\nPink, Red','65-95','Average','No','','Highly fragrant and beautiful\nflowers often used in leis'),(22,'Bird of Paradise','Strelitzia reginae','4-6','Moderate','Outdoor','Full sun ','Moderate','Upright, Clumping','','Bold, Exotic,\nFlowering','Green,\nOrange, Blue','60-90','Average','No','','Large, banana-like leaves,\nand unique, bird-shaped flowers'),(23,'Umbrella Plant','Schefflera arboricola','3-6','Moderate','Both','Bright indirect,\nFull sun','Moderate','Upright, Bushy','','Modern','Green','65-85','Average','No','','A hardy, shrubby plant\nwith glossy, umbrella-shaped leaves '),(24,'Jade Plant','Crassula ovata','3-6','Easy','Both','Bright','Low','Shrubby, Upright','','Minimalist,\nModern','Green, Red ','60-75','Low','No','','Classic succulent that can live\nboth indoors and outdoors'),(25,'Asparagus Fern','Asparagus densiflorus','1-2','Easy','Both','Medium, Bright','Moderate','Trailing','','Airy, Delicate','Green','55-80','Average','No','','A delicate fern with airy,\nneedle-like leaves'),(26,'Yucca Plant','Yucca elephantipes','3-10','Easy','Both','Bright, Full Sun','Low','Upright','','Minimalist','Green','60-90','Low','No','','A hardy architectural plant that\nworks well indoors or outdoors'),(27,'Chinese Evergreen','Aglaonema commutatum','1-3','Easy','Both','Low, Medium','Moderate','Bushy, Upright','','Colorful','Green, Silver,\nPink','60-75','High','No','','Adaptable plants with colorful\nfoliage'),(28,'Elephant Ear','Alocasia macrorrhiza','2-3','Easy','Both','Low, Medium, Bright','Low','Clumping, Upright','','Tropical','Green','60-75','Average','Yes','','Known for its large, heart-shaped\nleaves that add drama to \ngardens or living rooms');
/*!40000 ALTER TABLE `plantprofiles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-30 23:03:06
