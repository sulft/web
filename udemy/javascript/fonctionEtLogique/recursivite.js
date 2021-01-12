//les fonctions récursive s'auto appelle

function timer (secondes) {
    if(secondes > 0) {
        console.log(secondes);
        timer(secondes - 1);
    }
    else {
        console.log(secondes)
    }
}

timer(10);