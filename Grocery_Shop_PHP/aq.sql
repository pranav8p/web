CREATE DATABASE groceryshop;

USE groceryshop;

CREATE TABLE Consumer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE Items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL
); INSERT INTO Items (item_name, price) VALUES
('Wheat Flour (1kg)', 45.00),
('Basmati Rice (1kg)', 90.00),
('Sugar (1kg)', 42.00),
('Cooking Oil (1L)', 110.00);
