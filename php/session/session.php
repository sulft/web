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
            /*
            session_unset();
            print_r($_SESSION);
            session_destroy();
            print_r($_SESSION);
            */

            if(isset($_SESSION["animaux"])) {
                echo "set";
            }
            else {
                echo "not set";
            }
        ?>
    </body>
</html>