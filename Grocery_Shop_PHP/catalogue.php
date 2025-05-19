<?php
include 'db.php';
session_start();

if (!isset($_SESSION['user'])) {
    echo "<p>Please <a href='login.php'>login</a> to view items.</p>";
    exit();
}

$result = $conn->query("SELECT * FROM Items");
?>

<!DOCTYPE html>
<html>
<head>
  <title>Catalogue</title>
</head>
<body>
<h2>Available Grocery Items</h2>
<table border="1" cellpadding="8">
  <tr><th>ID</th><th>Item</th><th>Price (₹)</th></tr>
  <?php while ($row = $result->fetch_assoc()): ?>
    <tr>
      <td><?= $row["id"] ?></td>
      <td><?= $row["item_name"] ?></td>
      <td><?= $row["price"] ?></td>
    </tr>
  <?php endwhile; ?>
</table>
</body>
</html>
