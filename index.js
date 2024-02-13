//Desafio Tech iFood

//Classificação de nível de Héroi

const nome = "Robson "
let nivelHeroi = 9856


if(nivelHeroi <= 1000){
    console.log(nome + "é um Héroi Ferro")

} else if(nivelHeroi >= 1001 && nivelHeroi <= 2000){
    console.log(nome + "é um Héroi Bronze")
  
} else if(nivelHeroi >= 2001 && nivelHeroi <= 5000){
    console.log(nome + "é um Héroi Prata")

} else if(nivelHeroi >= 5001 && nivelHeroi <= 7000){
    console.log(nome + "é um Héroi Ouro")

} else if(nivelHeroi >= 7001 && nivelHeroi <= 8000){
    console.log(nome + "é um Héroi Platina")

} else if(nivelHeroi >= 8001 && nivelHeroi <= 9000){
    console.log(nome + "é um Héroi Ascendente")

} else if(nivelHeroi >= 9001 && nivelHeroi <= 10000){
    console.log(nome + "é um Héroi Imortal")

} else {
    console.log(nome + "é um Héroi Radiante")

}

