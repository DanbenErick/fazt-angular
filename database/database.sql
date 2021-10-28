CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE game(
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY_KEY,
  title VARCHAR(180),
  description VARCHAR(255),
  image VARCHAR(200),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
  -- CURRENT_TIMESTAMT es igual a la funcion NOW()
);

RENAME TABLE game to games;
DESCRIBE game;