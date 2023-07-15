const valorDaCompra = 100;
const numeroDeParcelas = 6;

if (numeroDeParcelas === 1) {
    const desconto = valorDaCompra * 10 / 100
    const valorAPagar = valorDaCompra - desconto
    console.log(`voce deve pagar R$  ${valorAPagar}, pois a vista tem 10% de desconto `)
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2)
    console.log(`voce deve pagar em ${numeroDeParcelas}x sem juros de R$ ${valorDaParcela}`)

} else if (numeroDeParcelas >= 7 && numeroDeParcelas < -12) {

    const valorAPagarComJuros = (valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas)
    const valorAPagar = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(`Voce deve pagar ${numeroDeParcelas}x de ${valorDaParcela} totalizando ${valorAPagarComJuros},  devido a incidencia do juros`)
} else {
    console.log("Número de parcelas invalido")
}