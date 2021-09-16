<?php
    if(!empty($_GET['id'])) {
        $id = $_GET['id']; // get id through query string
        $del = $bdd -> query("DELETE FROM contact WHERE id = '$id'");
        header('location: ./?page='.$pageActuel);
    }
?>