//création tableau d'image
var number = 0;

console.log("test");

var choice1 =  document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');

var image = document.getElementById('image');

choice1.onclick = function () {
    number=1;
    loading_image()
}

choice2.onclick = function () {
    number=2;
    loading_image()
}

choice3.onclick = function () {
    number=0;    

    loading_image()
}

function loading_image() {
    switch(number) {
        case 1:
            console.log("test1");
            image.setAttribute("src","image1.jpg");
            break;

        case 2:
            console.log("test2");
            image.setAttribute("src","image2.jpg");
            break;

        default:
            console.log("test3");
            image.setAttribute("src","image3.jpg")
            break;
    }   
}