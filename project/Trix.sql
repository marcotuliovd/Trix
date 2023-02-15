DROP SCHEMA IF EXISTS Trix;
CREATE SCHEMA IF NOT EXISTS Trix;

CREATE TABLE Trix.users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  vocation TEXT NOT NULL,
  level INTEGER NOT NULL,
  password TEXT NOT NULL,
  balance integer NOT NULL
);


INSERT INTO
  Trix.users (username, vocation, level, password, balance)
VALUES
  ("reigal", "Guerreiro", 10, "1dragaonoceu", 1000),
  ("vyrion", "Inventor", 8, "pagandodividas", 200),
  ("yraa", "Ladina", 5, "valarmorg", 300);

CREATE TABLE Trix.transactions (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  sending INTEGER NOT NULL,
  receiving INTEGER NOT NULL,
  value INTEGER NOT NULL
);

INSERT INTO
  Trix.transactions (sending, receiving, value)
VALUES
  (3, 1, 150),
  (1, 2, 320),
  (2, 3, 10);