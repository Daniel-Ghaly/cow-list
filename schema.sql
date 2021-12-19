-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE


DROP DATABASE IF EXISTS cowlist;
CREATE DATABASE cowlist;

USE cowlist;
CREATE TABLE cows (
  id INT NOT NULL AUTO_INCREMENT,
  name text,
  description text,
  PRIMARY KEY (id)
);