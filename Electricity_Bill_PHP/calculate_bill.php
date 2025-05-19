<?php
header("Content-Type: application/json");
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $units = $_POST['units'] ?? '';

    if ($name === '' || $email === '' || $units === '') {
        echo json_encode(["status" => "error", "message" => "All fields are required"]);
        exit;
    }

    $units = (int)$units;
    $bill = 0;

    if ($units <= 50) {
        $bill = $units * 3.50;
    } elseif ($units <= 150) {
        $bill = (50 * 3.50) + (($units - 50) * 4.00);
    } elseif ($units <= 250) {
        $bill = (50 * 3.50) + (100 * 4.00) + (($units - 150) * 5.20);
    } else {
        $bill = (50 * 3.50) + (100 * 4.00) + (100 * 5.20) + (($units - 250) * 6.50);
    }

    // Insert into consumer
    $stmt = $conn->prepare("INSERT INTO consumer (name, email) VALUES (?, ?)");
    $stmt->bind_param("ss", $name, $email);
    if (!$stmt->execute()) {
        echo json_encode(["status" => "error", "message" => "Error inserting consumer"]);
        exit;
    }
    $consumer_id = $stmt->insert_id;

    // Insert into billing
    $stmt2 = $conn->prepare("INSERT INTO billing (consumer_id, units_consumed, bill_amount) VALUES (?, ?, ?)");
    $stmt2->bind_param("iid", $consumer_id, $units, $bill);
    if (!$stmt2->execute()) {
        echo json_encode(["status" => "error", "message" => "Error inserting billing"]);
        exit;
    }

    echo json_encode([
        "status" => "success",
        "message" => "Bill calculated successfully",
        "data" => [
            "name" => $name,
            "email" => $email,
            "units" => $units,
            "bill" => number_format($bill, 2)
        ]
    ]);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
}
?>
