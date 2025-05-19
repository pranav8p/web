<?php include 'db.php'; ?>

<!DOCTYPE html>
<html>
<head>
  <title>Catalogue</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="nav">
    <a href="index.html">Home</a>
    <a href="login.php">Login</a>
    <a href="register.php">Register</a>
    <a href="catalogue.php">Catalogue</a>
  </div>

  <div class="content">
    <h1>Available Books</h1>
    <div class="catalogue">
      <?php
        $sql = "SELECT * FROM Books";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
          while($row = $result->fetch_assoc()) {
            echo "<div class='book'>";
            echo "<img src='img/" . $row['cover'] . "' alt='Book Cover' />";
            echo "<h3>" . $row['title'] . "</h3>";
            echo "<p>Author: " . $row['author'] . "</p>";
            echo "<p>Price: ₹" . $row['price'] . "</p>";
            echo "</div>";
          }
        } else {
          echo "No books found.";
        }
        $conn->close();
      ?>
    </div>
  </div>
</body>
</html>
