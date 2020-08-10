
<!DOCTYPE html>

<html>
    <head>
        <title></title>
    </head>
    
    <body>
        
        <h3>my first php page </h3>

        <style>
            <?php 
                $b=0;
                if($b) {
                    include "first.css";
                }
                else {
                    include "first1.css";
                }
            ?>
        </style>

        <?php 
            $a = array("banane","Pomme","Poire","jambon"); 
            $aSize=count($a);

            for($i = 0 ; $i < $aSize; $i++ ) {
                echo "élément: " . ($i+1) . " de valeur: " . $a[$i] . "<br>";
            }
        ?>

    </body>
</html>