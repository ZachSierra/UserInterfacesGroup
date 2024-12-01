-- Create a table for the different tables, plant profiles, users, and the question inquires-->

-- This table creates the plant profiles. I think you should just follow my instructions of using the wizard instead of this 
-- because I think it's easier to use the wizard to create the table. But this is intended for the server

-- CREATE TABLE plantprofiles (
--   Plant_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   Common_Name TEXT,
--   Scientific_Name TEXT,
--   Size_in_ft TEXT,
--   Difficulty TEXT,
--   Location TEXT,
--   Light_Requirement TEXT,
--   Watering_Needs TEXT,
--   Growth_Habit TEXT,
--   Flowering TEXT,
--   Aesthetic TEXT,
--   Atmosphere TEXT,
--   Colors TEXT,
--   Temperature_in_fahrenheit TEXT,
--   Humidity_Requirements TEXT,
--   Pet_Friendly TEXT,
--   Pest_Resistant TEXT,
--   Description TEXT
-- );

-- May need to grant access to the 
-- GRANT FILE ON *.* TO 'your_mysql_user'@'localhost';


-- This table creates the users

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);