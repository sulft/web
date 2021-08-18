<?php
    //Exercice de création de Tableau Udemy
    echo 'Exercice création de tableau. <br>';

    echo '<table border="10" bordercolor="green" cellpadding="8">
            <thead align="center">
                <tr>
                    <td>Nombre</td>
                    <td>Carré</td>
                    <td>Racine</td>
                </tr>
            </thead>
    ';

    echo '<tbody align="center">';

    for($i = 0; $i < 10; $i++) {

        echo '<tr>';

        for($j = 0; $j < 3; $j++) {
            if($j == 0) {
                echo '<td>' . $i . '</td>';
            } else if ($j == 1) {
                echo '<td>' . $i*$i . '</td>';
            } else {
                echo '<td>' . sqrt($i) . '</td>';
            }
        }

        echo '</tr>';

    }

    echo '</tbody>';
    echo '</table>';
?>