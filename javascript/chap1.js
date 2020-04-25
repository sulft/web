//i'm a javascript comment
/* as CSS comment, I'm also a JS */

//Déclaration + initialisation de variable
var click1 = document.getElementById('click_buttom');

//function
function useIt() {
    var email="terryvilvergmail.com"
    var result=email.indexOf("@");
    console.log("déterminons si : "+ email +" est bien une adresse mail.");
    if (result != -1) {
        console.log("result in position: " + result);
        console.log(true+ " " + email + " est bien une adresse mail.");

    } else {
        console.log("result is not on the string");
        console.log(false + " " + email + " n'est pas une adresse mail.");

    }
}


//appel de email_test lorsque j'appuie sur le bouton d'ID "click1".
click1.onclick=function() {
    useIt();
}
