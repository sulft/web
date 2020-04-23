//i'm a javascript comment
/* as CSS comment, I'm also a JS */

//Déclaration + initialisation de variable
var email = "terryvilver@gmail.com";
var emailVerification = email.indexOf("@gmail.com");
var click1 = document.getElementById("click1");

//function
function email_test(message) {
    alert("position de l'élément recherché: " + emailVerification);
    console.log("event " + message);
}

function nan_test() {
    var number=32;
    var string="mot";
    console.log(string + " n'est pas un nombre ? " + isNaN(string)); //NaN = not a number
    console.log(number + " n'est pas un nombre ? " + isNaN(number));
}

function parse_int() {
    var number="33 mots";
    var string="mot";
    console.log(string + " nombre trouvé ? " + parseInt(string));
    console.log(number + " nombre trouvé ? " + parseInt(number));
}

//appel de email_test lorsque j'appuie sur le bouton d'ID "click1".
click1.onclick=function() {
    if (3>4) {
        parse_int();
    }
    else {
        nan_test();
    }
}
