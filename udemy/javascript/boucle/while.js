let i = 1;
//la boucle while
while ( i < 5) {

    console.log('Lignes ' + i)
    i++;

}

let j = 1;
//la boucle do while
do {
    console.log('colonnes ' + j)
    j++;
    if ( j == 3) { break; }
} while (j <= 10);