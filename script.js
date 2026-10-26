// EJERCICIO 1: La poción mágica de Alicia
document.getElementById("formPocion").addEventListener("submit", function(event) {
    event.preventDefault();

    const altura = Number(document.getElementById("altura").value);
    const pocion = Number(document.getElementById("pocion").value);
    const resultado = document.getElementById("resultadoPocion");

    if (altura <= 0 || !Number.isFinite(altura) || !Number.isFinite(pocion) || pocion < 0 || pocion > 100) {
        resultado.textContent = "Corrige los datos: la altura debe ser positiva y la poción debe estar entre 0 y 100 ml.";
        return;
    }

    const alturaFinal = altura * (1 + pocion / 100);
    if (alturaFinal <= 150) {
        resultado.textContent = "La altura final de Alicia es " + alturaFinal.toFixed(2) + " cm. ¡Puede pasar por la puerta!";
    } else {
        resultado.textContent = "La altura final de Alicia es " + alturaFinal.toFixed(2) + " cm. No puede pasar por la puerta.";
    }
});

// EJERCICIO 2: La merienda del Sombrerero Loco
document.getElementById("formMerienda").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const bebida = document.getElementById("bebida").value;
    const tazas = Number(document.getElementById("tazas").value);
    const resultado = document.getElementById("resultadoMerienda");
    let precio = 0;
    let nombreBebida = "";

    if (nombre === "" || !Number.isInteger(tazas) || tazas < 1 || tazas > 10) {
        resultado.textContent = "Escribe un nombre y una cantidad entera de tazas entre 1 y 10.";
        return;
    }

    switch (bebida) {
        case "te":
            precio = 5;
            nombreBebida = "té";
            break;
        case "cafe":
            precio = 7;
            nombreBebida = "café";
            break;
        case "chocolate":
            precio = 8;
            nombreBebida = "chocolate";
            break;
        case "limonada":
            precio = 4;
            nombreBebida = "limonada";
            break;
        default:
            resultado.textContent = "Selecciona una bebida válida.";
            return;
    }

    const subtotal = precio * tazas;
    let descuento = 0;
    if (tazas >= 5) {
        descuento = subtotal * 0.10;
    }
    const total = subtotal - descuento;

    resultado.textContent = nombre + ", elegiste " + nombreBebida + ". Precio por taza: Bs " +
        precio.toFixed(2) + ". Cantidad: " + tazas + ". Subtotal: Bs " + subtotal.toFixed(2) +
        ". Descuento: Bs " + descuento.toFixed(2) + ". Total: Bs " + total.toFixed(2) + ".";
});

// EJERCICIO 3: El desafío de la Reina de Corazones
document.getElementById("formReina").addEventListener("submit", function(event) {
    event.preventDefault();

    const cartas = Number(document.getElementById("cartas").value);
    const resultado = document.getElementById("resultadoReina");

    if (!Number.isInteger(cartas) || cartas < 1 || cartas > 20) {
        resultado.textContent = "Ingresa un número entero entre 1 y 20.";
        return;
    }

    let secuencia = "";
    let cantidadPares = 0;
    let cantidadImpares = 0;
    let sumaPares = 0;
    let sumaImpares = 0;

    for (let numero = 1; numero <= cartas; numero++) {
        secuencia += numero + (numero < cartas ? ", " : "");
        if (numero % 2 === 0) {
            cantidadPares++;
            sumaPares += numero;
        } else {
            cantidadImpares++;
            sumaImpares += numero;
        }
    }

    let mayorSuma = "";
    if (sumaPares > sumaImpares) {
        mayorSuma = "La suma de los pares es mayor.";
    } else if (sumaImpares > sumaPares) {
        mayorSuma = "La suma de los impares es mayor.";
    } else {
        mayorSuma = "Las sumas son iguales.";
    }

    resultado.textContent = "Secuencia: " + secuencia + ". Pares: " + cantidadPares +
        " (suma " + sumaPares + "). Impares: " + cantidadImpares +
        " (suma " + sumaImpares + "). " + mayorSuma;
});
