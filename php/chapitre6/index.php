<?php 
    //Les FONCTIONS
    function SayHello($prenom,$nom) {
        echo 'Bonjour ' . $nom . ' '. $prenom .'<br>';
    }

    function Verifier() {

    }

    SayHello("Terry",'Vilver');
    SayHello("Nicolas", '');

    
?>

<?php 
    //Les FONCTIONS qui retournent quelque choses

    function Calcul($x, $y) {
        $res = $x * $y;
        $res += 5;
        $res *= $y;
        return $res;
    }

    $resultat = Calcul(11,25);

    echo $resultat;

    echo "<br><br>";
?>

<?php 
    //EXERCICE sur les FONCTIONS

    /*
    Ecrire une fonction qui calcule les racines d'une equation ax²+bx+c
    */

    $nombreA = 1;
    $nombreB = 7;
    $nombreC = 10;

    $delta = pow($nombreB,2) -(4*$nombreA*$nombreC);

    Racine($nombreA, $nombreB, $nombreC, $delta);

    function Racine($a, $b, $c, $delta) {
        if($a == 0 ) {
            echo 'Cette équation n\'est pas valide! <br>';
        } else {
            if($delta<0) {
                echo 'pas de solution!<br>';
            } else if($delta == 0) {
                $solution = -$b / (2*$a);
                echo 'La solution est ' . $solution . '! <br>';
            } else {
                $solution1 = (-$b -sqrt($delta))/2*$a;
                $solution2 = (-$b +sqrt($delta))/2*$a;
                echo 'Les solutions sont ' . $solution1 . ' et ' . $solution2 .' <br>';
            }    
        }
    }


?>