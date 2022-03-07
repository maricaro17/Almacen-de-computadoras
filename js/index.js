const calculoCantidadContainer = document.getElementById("calculo-cantidad")
const ordenCompraContainer = document.getElementById("orden-compra")
const valorCompra = document.getElementById("valor-compra")
const valorDesacuento = document.getElementById("valor-descuento")
const totalCompra = document.getElementById("total")
const alertError = document.getElementById("alert");
const containerAlertError = document.getElementById("alert-error");
function comprarArticulo() {
    location.href = "compra.html"
}
function calcular() {
    const cantidad = document.getElementById("cantidad")
    const precio = 820000
    const resultado = precio * Number(cantidad.value)
    let descuento, valorTotal
    if (resultado >= 1650000 && resultado <= 3280000) {
        descuento = resultado * 0.15
        valorTotal = resultado - descuento
        calculoCantidadContainer.style.display = "none"
        ordenCompraContainer.style.display = "block"
        containerAlertError.setAttribute("style", "display:block");
        alertError.innerHTML = "Su descuento fue del 15%";

    } else if (resultado > 3280000 && resultado <= 6560000) {
        descuento = resultado * 0.25
        valorTotal = resultado - descuento
        calculoCantidadContainer.style.display = "none"
        ordenCompraContainer.style.display = "block"
        containerAlertError.setAttribute("style", "display:block");
        alertError.innerHTML = "Su descuento fue del 25%";
    } else if (resultado > 6560000 && resultado <= 9840000) {
        descuento = resultado * 0.35
        valorTotal = resultado - descuento
        calculoCantidadContainer.style.display = "none"
        ordenCompraContainer.style.display = "block"
        containerAlertError.setAttribute("style", "display:block");
        alertError.innerHTML = "Su descuento fue del 35%";
    } else {
        descuento = 0
        valorTotal = resultado
        calculoCantidadContainer.style.display = "none"
        ordenCompraContainer.style.display = "block"
        containerAlertError.style.display = "block"
        alertError.innerHTML = "Su compra no recibio descuento";
    }
    valorCompra.value = resultado
    valorDesacuento.value = descuento
    totalCompra.value = valorTotal
}