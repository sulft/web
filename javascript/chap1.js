//i'm a javascript comment
/* as CSS comment, I'm also a JS */

//Déclaration + initialisation de variable
var click1 = document.getElementById('click_buttom');

//function
function loop() {
    number = 5;
    var target = document.getElementById("text");
    target.innerHTML = "";
    while (number > 0) {

        target.innerHTML = target.innerHTML + "compte à rebours : " + number + "<br>";
        console.log("compte à rebours : " + number);
        number--;
    } 
    console.log("fin du compte à rebours !" );
}


//appel de email_test lorsque j'appuie sur le bouton d'ID "click1".
click1.onclick=function() {
    loop();
    this.style.color = "red";
}
