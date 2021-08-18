<?php 
    //fonction PHP NATIVES String
    echo 'Fonction PHP NATIVES String <br>';
    $string = "Bienvenue sur la formation ultime en PHP et MySQL";

    //STRLEN
    echo 'Nombre de caractères : '. strlen($string) . '<br>';

    //STR_REPLACE
    echo $string . '<br>';
    echo  'Phrase changé : ' . str_replace('PHP','JAVA',$string) . '<br>';

    //STRTOUPPER
    echo 'Phrase en majuscule : ' . strtoupper($string) . '<br>';

    //STRTOLOWER
    echo 'Phrase en minuscule : ' . strtolower($string) . '<br>';

    //SUBSTR
    echo substr($string,0,26);

    echo '<br><br>'
?>

<?php 
    //fonction PHP NATIVES TABLEAUX
    echo 'Fonction PHP NATIVES TABLEAUX <br>';
    $array = array('Nicolas','Arnold','Dupont');

    //array_key_exists
    if(array_key_exists(0,$array)) {
        echo 'Yes <br>';
    } else {
        echo 'No <br>';
    }

    //count
    echo count($array) . '<br>'

?>