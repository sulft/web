
<!DOCTYPE html>

<html>
    <head>
        <title></title>
    </head>
    
    <body>
        
        <h3>my first php page </h3>


        <?php 
            $a= array("math","francais","anglais");
            echo "nb element dans le tableau: " . count($a) . "<br>";
            echo "test";
        ?>

        <style>
        <?php 
            include "first.css";
        ?>
        </style>

    </body>
</html>