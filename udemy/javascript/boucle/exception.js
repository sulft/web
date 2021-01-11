//création d'une exception
try { 
    let arme = prompt("choisis ton arme entre : épée, hache et arc !");
    let degat;

    switch(arme) {
        case "épée":
            degat = 30 ;
            break;
        case "arc":
            degat = 20 ;
            break;
        case "hache":
            degat = 50 ;
            break;
        default:
            throw new Error('Arrête de tricher !'); //création d'un objet Error qui renvoie à la partie catch

    }
    alert("tu as choisis l'arme " + arme + ' qui fait ' + degat + " de dégats !")
} catch(e) {
    alert(e)
} // finally { Si l'on veut executer du code qui s'éxécutera quoi qu'il arrive ! }