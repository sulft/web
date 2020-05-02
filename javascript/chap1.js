//i'm a javascript comment
/* as CSS comment, I'm also a JS */

//Déclaration + initialisation de variable
var click1 = document.getElementById('click_buttom');

//function
function loop() {
    number = 5;
    var target = document.getElementById("text");
    target.innerHTML = "";
    for (var i = number ; i > 0 ; i--) {
        target.innerHTML = target.innerHTML + "compte à rebours : " + number + "<br>";
        console.log("compte à rebours : " + number);
        number--;
    } 
    console.log("fin du compte à rebours !" );
}

function affiche() {
    alert(document.title);
}

function array() {
    var nombre = ["A", 3, "Z", "D","E"];
    nombre.sort();
    var target = document.getElementById("text");
    target.innerHTML = nombre;
    alert(nombre.length + " éléments dans le tableau");
}


//appel de email_test lorsque j'appuie sur le bouton d'ID "click1".
click1.onclick=function() {
    array();
    this.style.color = "red";
}
