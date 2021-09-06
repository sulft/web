<?php 

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

        <section id='footer'>
            <div class="container">
                <div class="center">
                    <img src="./pictures/logo2.png" alt="logo" id="logo">
                </div>
                <p>2018 bitly</p>
                <p><span class="orange"> Contact </span> . <span class="orange"> A Propos </span></p>
            </div>
        </section>
    </body>

</html>