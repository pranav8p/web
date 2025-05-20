-- Step 1: Create the database
CREATE DATABASE IF NOT EXISTS electricity;
USE electricity;

-- Step 2: Create Consumer table
CREATE TABLE IF NOT EXISTS Consumer (
    consumer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL
);

-- Step 3: Create Billing table
CREATE TABLE IF NOT EXISTS Billing (
    bill_id INT AUTO_INCREMENT PRIMARY KEY,
    consumer_id INT NOT NULL,
    month VARCHAR(20) NOT NULL,
    units INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (consumer_id) REFERENCES Consumer(consumer_id) ON DELETE CASCADE
);
