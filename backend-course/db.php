<?php
$host = "db5020363009.hosting-data.io";
$user = "dbu3900725";
$password = "+=)ecZT++87w?gA";
$dbname = "dbs15629551";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>