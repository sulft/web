//i'm a javascript comment
/* as CSS comment, I'm also a JS */

//Déclaration de variable
var word;

//initialisation
word="string" ;

function my_function(message) {
    console.log("event " + message);
}

document.getElementById("click1").onclick=function() {
    my_function("on click");
}

document.getElementById("click2").onclick=function() {
    my_function("on click2");
}

document.getElementById("change").onchange=function() {
    my_function("on change");
}