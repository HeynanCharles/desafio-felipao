let media = jogos(100, 43);
let nivel;

function jogos (vitorias, derrotas){
    return vitorias - derrotas
}

if (media < 10){
    nivel = "Ferro";
} else if (media >= 11 && media <= 20){
    nivel = "Bronze";
} else if (media >= 21 && media <= 50){
    nivel = "Prata";
} else if (media >= 51 && media <= 80){
    nivel = "Ouro";
} else if (media >= 81 && media <= 90){
    nivel = "Diamante";
} else if (media >= 91 && media <= 100){
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}


console.log("O Herói tem de saldo de " + media, "está no nível de " + nivel)