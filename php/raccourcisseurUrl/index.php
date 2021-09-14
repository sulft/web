<?php 
    // A recu le raccourci
    if(isset($_GET['q'])) {
        $raccourci = htmlspecialchars($_GET['q']);

        $bdd = new PDO('mysql:host=localhost;dbname=bitly;charset=utf8', 'root','');
        $req = $bdd -> prepare('SELECT COUNT(*) AS x FROM link WHERE shortcut = ?');
        $req -> execute([$raccourci]);

        while ($result = $req -> fetch()) {
            if($result['x'] != 1) {
                header('location: ../?error=true&message=Adresse url non connue');
                exit();
            }
        }

        //redirection
        $req = $bdd -> prepare('SELECT * FROM link WHERE shortcut = ? ');
        $req -> execute([$raccourci]);
        while ($result = $req -> fetch()) {
            header('location:'. $result['url']);
            exit();
        }
    }

    if(!empty($_POST['url'])) {
        $url = $_POST['url'];

        //verification
        if (filter_var($url, FILTER_VALIDATE_URL)) {
            echo("URL est valide");
        } else {
            header('location: ../?error=true&message=Adresse url non valide');
            exit();
        }
        //raccourci
        $raccourci = crypt($url, rand());

        //deja envoyé
        $bdd = new PDO("mysql:host=localhost;dbname=bitly;charset=utf8", 'root', '');
        $req = $bdd -> prepare('SELECT COUNT(*) AS x FROM link WHERE url = ?');
        $req -> execute([$url]);
        while ($result = $req -> fetch()) {
            if($result['x'] != 0) {
                header('location: ../?error=true&message=Adresse déjà raccourcie');
                exit();
            }
        }

        //envoyé
        $req = $bdd -> prepare('INSERT INTO link(url, shortcut) VALUES (?,?)');
        $req ->execute([$url,$raccourci]);
        header('location: ../?short='.$raccourci);
        exit();
    }
?>  

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./design/default.css">
    <link rel="icon" type="image/png" href="./pictures/favico.png">
    <title>Raccourcisseur d'url</title>
</head>
    <body>
        <section id="hello">
            <div class='container'>
                <header>
                    <img src="./pictures/logo.png" alt="logo" id="logo">
                </header>

                <h1>une url longue ? raccourcissez-là</h1>
                <h2>largement meilleur et plus court que les autres</h2>

                <div class="align-horizontally">
                    <form action="index.php" method='POST'>
                        <input type="url" name="url" placeholder='Entrez votre lien'>
                        <button type="submit">Raccourcir</button>
                    </form>

                    <?php 
                        if(isset($_GET['error']) && isset($_GET['message'])) { ?>
                        <div class="center">
                            <div id="result">
                                <b><?php echo htmlspecialchars($_GET['message']) ?></b>
                            </div>
                        </div>
                    <?php } 
                        else if(isset($_GET['short'])) {  ?>
                            <div class="center">
                            <div id="result">
                                <b>Url raccourcie : </b> http://localhost/?q=<?php echo htmlspecialchars($_GET['short']); ?>
                            </div>
                        </div>
                    <?php } ?>
                    
                </div>
            </div>
        </section>

        <section id="brands">
            <div class="container">
                <h3>Ces marques nous font confiance</h3>
                <img src="./pictures/1.png" alt=""  class='picture'>
                <img src="./pictures/2.png" alt=""  class='picture'>
                <img src="./pictures/3.png" alt=""  class='picture'>
                <img src="./pictures/4.png" alt=""  class='picture'>
            </div>
        </section>

        <footer>
            <img src="./pictures/logo2.png" alt="logo" id="logo">
            <p>2018 © bitly</p>
            <a href="#">Contact</a> - <a href="#"> A propos</a>
        </footer>
    </body>

</html>