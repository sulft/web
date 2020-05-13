//i'm a javascript comment
/* as CSS comment, I'm also a JS */
var left_butt = document.getElementById('left_button');
var right_butt = document.getElementById('right_button');

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

function returnSomething() {
    var nom = "Vilver";
    var prenom = "Terry";
    var age = 15;
    var personne = [nom, prenom, age];
    return personne;
}

function button(id) {
    var touche = document.getElementById(id);
    touche.value="test"; 
}

function button2(htmlElement) {
    htmlElement.value="test"; // change the value inside button of id 'click_buttom'
}

//appel de email_test lorsque j'appuie sur le bouton d'ID "left_butt".
left_butt.onclick=function() {
    //button('left_button');
    //button2(left_butt);
    treeVariable = returnSomething();
    console.log("Je m'appelle " + treeVariable[1] + " " + treeVariable[0] + "." +"\nJ'ai " + treeVariable[2] + " ans."); //2 variable façon de récupérer la variable nombre
    this.style.color = "red";
}

right_butt.onclick=function() {
    button('right_button');
   //button2(right_butt);
    this.style.color = "red";
}
