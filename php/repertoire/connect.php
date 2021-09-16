<?php 
  try {
        $bdd = new PDO('mysql:host=localhost;dbname=repertoire;charset=UTF8','root','');
    } catch (Exception $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>