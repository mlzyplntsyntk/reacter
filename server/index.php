<?php
ini_set("display_errors", 1);
error_reporting(E_ALL);

$dsn = 'mysql:dbname=appmaker;host=127.0.0.1;port=3306;charset=utf8';
$user = 'root';
$password = 'immortal12-';

try {
  $conn = new \PDO($dsn, $user, $password);
} catch (\PDOException $e) {
  throw $e;
}

//register ent
