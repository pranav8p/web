CREATE DATABASE electricity_db;
USE electricity_db;

-- Consumer Table
CREATE TABLE consumer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- Billing Table
CREATE TABLE billing (
    id INT AUTO_INCREMENT PRIMARY KEY,
    consumer_id INT NOT NULL,
    units_consumed INT NOT NULL,
    bill_amount DECIMAL(10,2) NOT NULL,
    billing_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (consumer_id) REFERENCES consumer(id)
);
