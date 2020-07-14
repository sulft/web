<?php 
    session_start();
?>

<!DOCTYPE html>

<html>
    <head>
        <title>Php session</title>
    </head>

    <body>
        <h2>Les sessions php me permettent de tracker les gens.</h2>
        <?php 
            $_SESSION["animaux"] = "lion";
            print_r($_SESSION); echo "<br>";
            
            unset($_SESSION["animaux"]);

            if(isset($_SESSION["animaux"])) {
                echo "set";
            }
            else {
                echo "not set";
            }
        ?>
    </body>
</html>