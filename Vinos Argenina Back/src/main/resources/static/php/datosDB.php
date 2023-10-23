<?php
$host="localhost";
$usuario="root";
$clave="admin";
$db="RemisApp";

$conn = new mysqli($host,$usuario,$clave,$db);
if($conn->connect_error){
    die("Database Error : " . $conn->connect_error);
}

