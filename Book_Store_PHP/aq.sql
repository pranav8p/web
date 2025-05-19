-- Run this in phpMyAdmin or MySQL CLI
CREATE DATABASE IF NOT EXISTS bookstore;

USE bookstore;

CREATE TABLE Books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    price DECIMAL(10,2),
    cover VARCHAR(255)
);

-- Sample insert
INSERT INTO Books (title, author, price, cover) VALUES
('Book One', 'Author A', 299.99, 'cover1.jpg'),
('Book Two', 'Author B', 399.50, 'cover2.jpg'),
('Book Three', 'Author C', 150.00, 'cover3.jpg');
