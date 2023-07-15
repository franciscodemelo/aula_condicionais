const valorDaCompra = 100;
const numeroDeParcelas = 6;

if (numeroDeParcelas === 1) {
    const desconto = valorDaCompra * 10 / 100
    const valorAPagar = valorDaCompra - desconto
    console.log(`voce deve pagar R$  ${valorAPagar}, pois a vista tem 10% de desconto `)
} else {
    const valorDaParcela = valorDaCompra / numeroDeParcelas;
    console.log(`voce deve pagar ${numeroDeParcelas} parcelas de R$ ${valorDaParcela.toFixed(2)} ao mes`)

}