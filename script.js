function calcularAhorro() {
    // Obtener valores de los campos
    const consumoActual = parseFloat(document.getElementById('consumoActual').value);
    const costoKwh = parseFloat(document.getElementById('costoKwh').value);
    const tipoSistema = document.getElementById('tipoSistema').value;
    const capacidadSistema = parseFloat(document.getElementById('capacidadSistema').value);

    // Verificar que todos los valores sean válidos
    if (isNaN(consumoActual) || isNaN(costoKwh) || isNaN(capacidadSistema)) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    // Estimaciones simples de eficiencia según el tipo de sistema
    let eficienciaSistema;
    switch (tipoSistema) {
        case 'solar':
            eficienciaSistema = 0.75;
            break;
        case 'eolico':
            eficienciaSistema = 0.5;
            break;
        case 'bateria':
            eficienciaSistema = 0.9;
            break;
        default:
            eficienciaSistema = 0.75;
    }

    // Calcular energía generada y ahorro
    const energiaGenerada = capacidadSistema * eficienciaSistema * 30; // 30 días al mes
    const ahorroMensual = Math.min(energiaGenerada, consumoActual) * costoKwh;
    const ahorroAnual = ahorroMensual * 12;

    // Mostrar resultados
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <h2>Resultados</h2>
        <p>Ahorro mensual estimado: <strong>$${ahorroMensual.toFixed(2)}</strong></p>
        <p>Ahorro anual estimado: <strong>$${ahorroAnual.toFixed(2)}</strong></p>
        <p>Energía generada por el sistema: <strong>${energiaGenerada.toFixed(2)} kWh/mes</strong></p>
    `;
}