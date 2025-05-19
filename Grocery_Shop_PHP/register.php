<?php
include 'db.php';

$msg = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name  = $_POST["name"];
    $email = $_POST["email"];
    $pass  = $_POST["password"];

    $sql = "INSERT INTO Consumer (name, email, password) VALUES ('$name', '$email', '$pass')";
    if ($conn->query($sql) === TRUE) {
        $msg = "Registration successful!";
    } else {
        $msg = "Error: " . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html>
<head><title>Register</title></head>
<body>
<h2>Register</h2>
<form method="post">
  Name: <input type="text" name="name" required><br><br>
  Email: <input type="email" name="email" required><br><br>
  Password: <input type="password" name="password" required><br><br>
  <button type="submit">Register</button>
</form>
<p style="color:green"><?= $msg ?></p>
</body>
</html>
