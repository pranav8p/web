CREATE DATABASE result_db;
USE result_db;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE mse (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    subject1 FLOAT,
    subject2 FLOAT,
    subject3 FLOAT,
    subject4 FLOAT,
    FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE TABLE ese (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    subject1 FLOAT,
    subject2 FLOAT,
    subject3 FLOAT,
    subject4 FLOAT,
    FOREIGN KEY (student_id) REFERENCES students(id)
);
