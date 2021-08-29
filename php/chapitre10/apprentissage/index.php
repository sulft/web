

<?php 
    /* Connexion au serveur / Opération (LIRE / ECRIRE / MODIFIER)
    Pour se connecter à une base de donnée, on a besoin d'un 
    hôte = localhost
    nom de base de donnée = apprentissage
    login = root 
    mdp = 
    */

    //Connexion
    try {
        $bdd=new PDO('mysql:host=localhost; dbname=apprentissage; charset=utf8', 'root', '');
        echo 'Le serveur a été correctement initialisé!<br><br>';
    }  catch(Exception $e) {
        die('Erreur : '. $e ->getMessage());
    }

    //Ajouter un métier
    /*
        $requete = $bdd -> exec("INSERT INT0 metier VALUES (id_users, metier) VALUES (1, 'écrivain')
                                INSERT INT0 metier VALUES (id_users, metier) VALUES (2, 'développeur')
                                INSERT INT0 metier VALUES (id_users, metier) VALUES (3, 'caissier')
                                
                                ");

    */

    //Ajouter des informations sur l'utilisateur
    /*
    $requete = $bdd -> exec('   INSERT INTO users ( prenom, nom, seriePreferee )
                                VALUES ( "Aurelie", "France", "Koh Lanta" )
                            ');
    */
    

    //supprimer des informations
    /* 
    $requete = $bdd -> exec('  INSERT INTO users ( prenom, nom, seriePreferee )
                                VALUES ( "Marc", "Pomme", "Koh Lanta" )
                            ');

    $requete -> closeCursor();
    */

    //LES JOINTURES INTERNES
    /* 2 types :
    WHERE et JOIN
    */

    //Lire les informations
    /* méthode WHERE
    $requete = $bdd -> query('  SELECT nom, prenom, seriePreferee, metier
                                FROM users, metier
                                WHERE metier.id = users.id
                            ');
    */

    /* méthode JOIN */
    /*
    $requete = $bdd -> query("  SELECT nom, prenom, seriePreferee, metier
                                FROM users u
                                INNER JOIN metier m
                                ON m.id = u.id 
                                WHERE prenom = \"Terry\"

    ");
    */
    //LES JOINTURES EXTERNES
    /* 2 types :
    LEFT et RIGHT
    $requete = $bdd -> query("  SELECT nom, prenom, seriePreferee, metier
                                FROM users u
                                RIGHT JOIN metier m
                                ON m.id = u.id 
    
    ");
    */
    

    //Sécuriser une reqûete
    $p = "Terry";
    $n = "Vilver";
    $requete = $bdd -> prepare("  SELECT nom, prenom, seriePreferee, metier
                                FROM users u
                                INNER JOIN metier m
                                ON m.id = u.id 
                                WHERE prenom =  ? && nom = ?

    ");

    $requete -> execute([$p,$n]);
    

    echo '<table border=5 cellpadding="3">
    <thead>
        <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Série préféré</th>
            <th>Métier</th>
        </tr>
    </thead>';


    echo '<tbody>';

    while($donnees = $requete -> fetch()) {
        echo '<tr align="center">
            <td>' . $donnees['nom'] .'</td>
            <td>' . $donnees['prenom'] . '</td>
            <td>' . $donnees['seriePreferee'] . '</td>
            <td>' . $donnees['metier'] . '</td>
        </tr>
        ';
    }

    $requete -> closeCursor();
    echo '</tbody>';

    echo '</table>';

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>