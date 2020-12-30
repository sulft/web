let crie; //variable globale

function crieDeGuerre() {
    crie = "toujours plus fort !"; //variable local
    console.log(crie);
}

crieDeGuerre();
console.log(crie);