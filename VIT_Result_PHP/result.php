<?php
$conn = new mysqli("localhost", "root", "", "result_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name  = $_POST['name'];
$email = $_POST['email'];

$mse1 = $_POST['mse1']; $mse2 = $_POST['mse2']; $mse3 = $_POST['mse3']; $mse4 = $_POST['mse4'];
$ese1 = $_POST['ese1']; $ese2 = $_POST['ese2']; $ese3 = $_POST['ese3']; $ese4 = $_POST['ese4'];

// Insert student
$stmt = $conn->prepare("INSERT INTO students(name, email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);
$stmt->execute();
$student_id = $stmt->insert_id;

// Insert MSE
$stmt = $conn->prepare("INSERT INTO mse(student_id, subject1, subject2, subject3, subject4) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("idddd", $student_id, $mse1, $mse2, $mse3, $mse4);
$stmt->execute();

// Insert ESE
$stmt = $conn->prepare("INSERT INTO ese(student_id, subject1, subject2, subject3, subject4) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("idddd", $student_id, $ese1, $ese2, $ese3, $ese4);
$stmt->execute();

// Calculate total marks per subject
$total1 = $mse1 + $ese1;
$total2 = $mse2 + $ese2;
$total3 = $mse3 + $ese3;
$total4 = $mse4 + $ese4;
$avg = ($total1 + $total2 + $total3 + $total4) / 4;

echo "<strong>Result for $name:</strong><br>";
echo "Subject 1: $total1 / 100<br>";
echo "Subject 2: $total2 / 100<br>";
echo "Subject 3: $total3 / 100<br>";
echo "Subject 4: $total4 / 100<br>";
echo "<strong>Average: $avg%</strong><br>";

$conn->close();
?>
