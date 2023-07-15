const temIngresso = true;
const Censura = 16;
const Idade = 10;
const estaComOsPais = true;

if (temIngresso === true) {
    if (Idade >= Censura || estaComOsPais === true) {
        console.log("Pode entrar")
    } else {
        console.log("Barrado")
    }
} else {
    console.log("Barrado.")
}