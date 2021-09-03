<?php 
    $pseudo = empty($_GET['pseudo']) ? 'Hello unknow user' : 'Hello ' . $_GET['pseudo'] . ' !';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="getExercice.php" method='GET'>
        <label for="pseudo">Votre pseudo</label>
        <input type="text" name="pseudo" id="pseudo">
        <button type="submit">Ajouter</button>
    </form>

    <?php
        echo $pseudo;
    ?>
</body>
</html>