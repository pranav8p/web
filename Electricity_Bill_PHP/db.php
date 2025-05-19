<?php
$host = "localhost";
$username = "root"; // change if using other than root
$password = ""; // your MySQL password
$database = "electricity_db";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed: " . $conn->connect_error]));
}
?>
