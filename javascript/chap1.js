//i'm a javascript comment
/* as CSS comment, I'm also a JS */

//Déclaration + initialisation de variable
var email = "terryvilver@gmail.com";
var emailVerification = email.indexOf("@gmail.com");
var click1 = document.getElementById("click1");

//function
function my_function(message) {
    alert("position de l'élément recherché: " + emailVerification);
    console.log("event " + message);
}

//appel de my_function lorsque j'appuie sur le bouton d'ID "click1".
click1.onclick=function() {
    my_function("on click");
}
