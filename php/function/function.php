<?php 
    $messageNumber = strlen("Terry");
    $date = date("d/m/y");
    $a = scandir("C:projet/web/php");

    function test($sexe = "homme") {
        return "Je suis un " . $sexe . ".";
    }
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

        <h1>Custom function</h1>
        <?php 
            echo test();
            echo test("inconnu");
            echo test("femme");
            echo test("rien");
            echo test("??");
            echo test("!!");
        ?>
        

    </body>
</html>