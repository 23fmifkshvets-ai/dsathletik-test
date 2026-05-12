<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

header("Content-Type: application/json");

include "db.php";


$data = json_decode(file_get_contents("php://input"), true);

$login = $data['login'] ?? '';
$passwordRaw = $data['password'] ?? '';


if ($login === '' || $passwordRaw === '') {
    echo json_encode(["status" => "empty_fields"]);
    exit();
}


$password = password_hash($passwordRaw, PASSWORD_DEFAULT);


$sql = "SELECT * FROM users WHERE login='$login'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode(["status" => "user_exists"]);
    exit();
}

$sql = "INSERT INTO users (login, password) VALUES ('$login', '$password')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error"]);
}

$conn->close();
?>