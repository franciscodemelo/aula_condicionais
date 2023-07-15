const temIngresso = true;
const Censura = 16;
const Idade = 18;

if (temIngresso === true) {
    if (Idade >= Censura) {
        console.log("pode entrar")

    } else {
        console.log("barrado pela censura");
    }
} else {
    console.log("barrada por falta de ingresso");
}