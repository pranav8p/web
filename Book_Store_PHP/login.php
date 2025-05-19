<?php
$login_error = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $password = $_POST["password"];

  if ($username == "admin" && $password == "admin123") {
    header("Location: catalogue.php");
    exit();
  } else {
    $login_error = "Invalid credentials!";
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="form-box">
    <h2>Login</h2>
    <form method="POST">
      <input type="text" name="username" placeholder="Username" required/><br>
      <input type="password" name="password" placeholder="Password" required/><br>
      <button type="submit">Login</button>
      <p style="color:red;"><?php echo $login_error; ?></p>
    </form>
  </div>
</body>
</html>
