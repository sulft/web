//i'm a javascript comment
/* as CSS comment, I'm also a JS */
var left_butt = document.getElementById('left_button');
var right_butt = document.getElementById('right_button');
var text = document.getElementById('text');

//function

function returnSomething() {
    var age = 14;
    var bool = ["true", "false"];

    if(age>=15) {
        return bool[0] + " j'ai 15 ans ou plus.";
    } else {
        return bool[1] + " j'ai moins de 15 ans.";
    }
}

function domUtilisation() {
    text.innerHTML = "";
    var ab = document.createElement("p"); //création de l'élément p
    var node = document.createTextNode("je suis un caméléon"); // création d'un texte
    ab.appendChild(node); //ajout du text à l'élément p

    //ajout de l'élément p à mon tag div
    document.getElementById("theDiv").appendChild(ab);

    //ici j'ajoute "je suis un caméléon" à mon tag div d'id ="theDiv"
}

function domUtilisation1() {
    var word = "caramel";
    text.innerHTML = text.innerHTML + " " + word; //HTML DOM by using innerHTML
}

left_butt.onclick = function() {
    domUtilisation1();
}

right_butt.onclick = function() {
    domUtilisation();
}
