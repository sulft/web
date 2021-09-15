<?php 
    //Variable
    $prenom = $email = $tel = $nom = "";

    //Connexion à la base de donnée
    try {
        $bdd = new PDO('mysql:host=localhost;dbname=repertoire;charset=UTF8','root','');
    } catch (Exception $e) {
        echo "Connection failed: " . $e->getMessage();
    }

    //check si tous les champs ont bien été complété
    if(!empty($_POST['prenom']) && !empty($_POST['nom']) && (!empty($_POST['phone']) || !empty($_POST['mail'])) ) {
        echo "Parfait";
        $prenom = $_POST['prenom'];
        if(preg_match("/^[0-9a-zA-Z ]*$/",$prenom)) {
            echo "Parfait";
            $nom = $_POST['nom'];
            if(preg_match("/^[0-9a-zA-Z ]*$/",$nom)) {
                echo "Parfait";
                $email = $_POST['mail'];
                if (filter_var($email, FILTER_VALIDATE_EMAIL)) {  
                    $tel = $_POST['tel'];
                    echo "Parfait";
                    if(preg_match ("/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/", $tel) ) {  
                        $que = $bdd -> prepare("INSERT INTO contact (prenom,nom,tel,email) VALUES (?,?,?,?)");
                        $que -> execute([$prenom,$nom,$tel,$email]);
                    }  
                }  
            }
        }
    }


?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <title>Carnet de contact</title>

</head>
<body class="bg-light">
    <header class="pt-2">
        <h1 class="text-center">Bienvenu dans votre répertoire de contact</h1>
    </header>

    <section class='container'>
        <div class="d-flex flew-row justify-content-center">
            <form method="POST" action="index.php" class='d-flex flex-column text-center'>
                    <div class="pt-2">
                        <label for="prenom">Prénom</label>
                        <br>
                        <input type="text" name="prenom" id="prenom">
                    </div>

                    <div class="pt-2">
                        <label for="nom">Nom</label>
                        <br>
                        <input type="text" name="nom" id="nom">
                    </div>

                    <div class="pt-2">
                        <label for="mail">Email</label>
                        <br>
                        <input type="email" name="mail" id="mail">
                    </div>

                    <div class="pt-2">
                        <label for="tel">Numéro de téléphone</label>
                        <br>
                        <input type="text" name="tel" id="tel">
                    </div>

                    <div class="col-3 w-100 pt-2">
                        <button type="submit" class="btn btn-secondary">Ajouter un contact</button>
                    </div>
            </form>
        </div>
    </section>

    <table>
    <caption style="caption-side:top">Répertoire</caption>
    <thead>
        <tr>
            <th colspan="">Prénom</th>
            <th colspan="">Nom</th>
            <th colspan="">Numéro de téléphone</th>
            <th colspan="">Email</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <?php while($row = $que->fetch()) { ?>
            <td><?php echo htmlspecialchars($row['prenom']); ?></td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
        </tr>
        <?php } ?>
    </tbody>
    </table>

</body>
</html>