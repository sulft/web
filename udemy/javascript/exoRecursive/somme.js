//exercice fonction recursive 
function somme (nombre) {
    if(nombre == 1) {
        console.log(nombre)
        return 1;
    } 
    console.log(nombre)
    return nombre + somme(nombre - 1)

}

console.log(somme(5))