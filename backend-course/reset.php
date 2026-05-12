<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

header("Content-Type: application/json");

include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$login = $data['login'] ?? '';
$newPassword = $data['password'] ?? '';

if (!$login || !$newPassword) {
    echo json_encode(["status" => "empty_fields"]);
    exit();
}

$hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);


$sql = "UPDATE users SET password='$hashedPassword' WHERE login='$login'";

if ($conn->query($sql) === TRUE && $conn->affected_rows > 0) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "no_user"]);
}

$conn->close();
?>