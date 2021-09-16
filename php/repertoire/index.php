<?php 
    //Variable
    $prenom = $email = $tel = $nom = "";

    //Connexion à la base de donnée
    require_once 'connect.php';

    include "affichage.php";

    //gestion de la pagination
    include "pagination.php";

    //Query qui supprime les éléments du tableaux
    include "delete.php";
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

    <section class='container pb-3'>
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
                        <input type="email" name="email" id="email">
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


    <section class='container'>
        <div class="table-responsive">
            <table border="3" style="width:60%" class="table table-striped table-hover table-bordered table-sm m-auto text-center">
                <thead class="table-dark">
                    <tr>
                        <th colspan="">Prénom</th>
                        <th colspan="">Nom</th>
                        <th colspan="">Numéro de téléphone</th>
                        <th colspan="">Email</th>
                        <th colspan="">Supprimer ?</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($contacts as $row) { ?>
                    <tr>
                        <td><?php echo htmlspecialchars($row['prenom']); ?></td>
                        <td><?php echo htmlspecialchars($row['nom']); ?></td>
                        <td><?php echo htmlspecialchars($row['tel']); ?></td>
                        <td><?php echo htmlspecialchars($row['email']); ?></td>
                        <td><a class="text-decoration-none" href="index.php?id=<?php echo $row['id'] . "&page=".$pageActuel; ?>">&#9986</a></td>
                    </tr>
                    <?php } ?>
                </tbody>
            </table>
        </div>
    </section>

    <section class='container'>
        <nav class="d-flex justify-content-center pt-1">
            <ul class="pagination">
                <!-- Lien vers la page précédente (désactivé si on se trouve sur la 1ère page) -->
                <li class="page-item <?= ($pageActuel == 1) ? "disabled" : "" ?>">
                    <a href="./?page=<?= $pageActuel - 1 ?>" class="page-link text-dark">Précédente</a>
                </li>
                <?php 
                $links = "";
                    if ($pages >= 1 && $pageActuel <= $pages) {
                        $links .= "<a class=\"page-link text-dark\" href=\"./?page=1\">1</a>";
                        $i = max(2, $pageActuel - 3);
                        if ($i > 2)
                            $links .= " ... ";
                        for (; $i < min( $pageActuel + 5, $pages); $i++) {
                            $links .= "<a class=\"page-link text-dark\" href=\"./?page={$i}\">{$i}</a>";
                        }
                        if ($i != $pages)
                            $links .= " ... ";
                        $links .= "<a class=\"page-link text-dark\" href=\"./?page={$pages}\">{$pages}</a>";
                    echo $links;
                    }
                ?>
                <!-- Lien vers la page suivante (désactivé si on se trouve sur la dernière page) -->
                <li class="page-item <?= ($pageActuel == $pages) ? "disabled" : "" ?>">
                <a href="./?page=<?= $pageActuel + 1 ?>" class="page-link text-dark">Suivante</a>
                </li>
            </ul>
        </nav>
    </section>
</body>
</html>