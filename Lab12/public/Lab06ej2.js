// Lab06ej2.js
function calcularTotal() {
    const precioSunscreen = 190.58;
    const precioMoisturizer = 310.51;
    const precioSerum = 1256.89;
    const iva = 0.19;

    const cantidadSunscreen = parseInt(document.getElementById("sunscreen").value);
    const cantidadMoisturizer = parseInt(document.getElementById("moisturizer").value);
    const cantidadSerum = parseInt(document.getElementById("serum").value);

    const totalSunscreen = precioSunscreen * cantidadSunscreen;
    const totalMoisturizer = precioMoisturizer * cantidadMoisturizer;
    const totalSerum = precioSerum * cantidadSerum;

    const subtotal = totalSunscreen + totalMoisturizer + totalSerum;
    const totalIVA = subtotal * iva;
    const total = subtotal + totalIVA;

    document.getElementById("totalPrice").innerText = "Precio Total: $" + total.toFixed(2);
    document.getElementById("iva").innerText = "IVA (19%): $" + totalIVA.toFixed(2);
}
