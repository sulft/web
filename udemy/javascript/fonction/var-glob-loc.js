let crie = "toujours plus bas !";; //variable globale

function crieDeGuerre() {
    let crie = "toujours plus fort !"; //variable local
    console.log(crie);
}

crieDeGuerre();
console.log(crie);