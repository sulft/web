//i'm a javascript comment
/* as CSS comment, I'm also a JS */

//Déclaration + initialisation de variable
var click1 = document.getElementById('click_buttom');

//function
function useIt() {
    var paragraph = document.getElementById('text')
    var value = paragraph.innerHTML;
    console.log(value);
}


//appel de email_test lorsque j'appuie sur le bouton d'ID "click1".
click1.onclick=function() {
    if (5>4) {
        useIt();
    }
}
