<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

header("Content-Type: application/json");

include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$login = trim($data['login'] ?? '');
$password = trim($data['password'] ?? '');


if ($login === '' || $password === '') {
    echo json_encode(["status" => "empty_fields"]);
    exit();
}

// пошук користувача
$sql = "SELECT * FROM users WHERE login='$login'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    
    if (password_verify($password, $user['password'])) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "wrong_password"]);
    }
} else {
    echo json_encode(["status" => "no_user"]);
}

$conn->close();
?>