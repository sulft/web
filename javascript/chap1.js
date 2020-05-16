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
    var age = 14;
    var bool = ["true", "false"];

    if(age>=15) {
        return bool[0] + " j'ai 15 ans ou plus.";
    } else {
        return bool[1] + " j'ai moins de 15 ans.";
    }
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
    console.log("Avez-vous plus de 15 ans ?");
    var bool = returnSomething();
    console.log(bool);
    this.style.color = "red";
}

right_butt.onclick=function() {
    button('right_button');
   //button2(right_butt);
    this.style.color = "red";
}
