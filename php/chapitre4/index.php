<!doctype html>
<html>

<?php 
    //Boucle WHILE
    echo 'Boucle While <br>';
    $ligne = 0;
    while($ligne < 10) {
        echo 'Voici le numéro de la ligne : ' . $ligne+1 . '. <br>';
        $ligne++;
    }

    echo '<br>';
?>

<?php 
    //Boucle FOR
    echo 'Boucle FOR <br>';
    for($i = 0; $i < 10; $i++) {
        echo 'Voici le numéro de la ligne : ' . $i+1 . '. <br>';
    }

    echo '<br>';
?>

<?php 
    //Exercice
    echo 'Exercice des Boucles <br>';

    $user = array('Terry','Nicolas','George','Marc','John');
    $user1 = array(
        'prenom'    => 'Nicolas',
        'nom'       => 'Dupont',
        'age'       => 10
    );

    $i = 0;
    //exercice utilisez une boucle que l'on a précedemment pour afficher le nom des utilisateurs du tableau.
    for($i = 0; $i < 5; $i++) {
        echo $user[$i] . '<br>';
    }

    echo '<br>';

    //Boucle FOREACH
    //Pas besoin de connaitre la taille du tableau pour utiliser cette méthode
    echo 'Boucle FOREACH <br>';
    foreach($user as $info) {
        echo $info . '<br>';
    }

    echo '<br>';
?>

<?php 
    //Exercice
    echo 'Boucle IMBRIQUEE <br>';

    for($i = 1; $i <= 10; $i++) {
        echo '<br>';
       for($j = 1; $j <= 10; $j++) {
        echo $j*$i. ' ';
       }
    }

    echo '<br><br>';
?>

<?php

echo'
    <table border="10" bordercolor="black" align="center" cellspacing="3">
        <caption>Table de multiplication</caption>
        <thead align="center">
            <tr>
                <th> </th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>10</th>
            </tr>
        </thead>
        <tbody align="center">';

        for($i = 1; $i<=10; $i++) {
            echo '<tr>';
            
            echo '<th>' . $i .'</th>';
            for($j = 1; $j <= 10; $j++) {
                echo "<td>". $i*$j ."</td>";
            }
            echo '</tr>';
        }

        echo '</tbody>'; 
    echo '</table>';

?>
