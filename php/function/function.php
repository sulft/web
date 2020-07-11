<?php 
    $messageNumber = strlen("Terry");
    $date = date("d/m/y");
    $a = scandir("C:projet/web/php");
?>

<!DOCTYPE html>

<html>
    <head>
        <title>Php Function</title>
    </head>

    <body>

        <h1>PHP function</h1>
        <?php 
            echo "le nombre de caractère est de " . $messageNumber . ".<br>";
            echo "nous sommes le $date";
        ?>

        <h1>Php loops</h1>
        <?php
            $array = array("test","marque",'odeur');
            foreach($array as $value) {
                echo $value . "<br>";
            }
        ?>

    </body>
</html>