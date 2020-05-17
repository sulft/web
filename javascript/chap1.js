//i'm a javascript comment
/* as CSS comment, I'm also a JS */
var left_butt = document.getElementById('left_button');
var right_butt = document.getElementById('right_button');
var text = document.getElementById('text');

//function

function affiche() {
    var word = "caramel";
    text.innerHTML = text.innerHTML + " " + word; //HTML DOM by using innerHTML
}

function returnSomething() {
    var age = 14;
    var bool = ["true", "false"];

    if(age>=15) {
        return bool[0] + " j'ai 15 ans ou plus.";
    } else {
        return bool[1] + " j'ai moins de 15 ans.";
    }
}

left_butt.onclick = function() {
    affiche();
}
