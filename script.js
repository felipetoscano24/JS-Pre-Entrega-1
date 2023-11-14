// Obtener el nombre y apellido del usuario
function obtenerNombre() {
    const nombre = prompt("Por favor, ingresa tu nombre y apellido:");
    return nombre;
}

// Obtener los juguetes y sus precios
function obtenerJuguetes() {
    let juguetes = [];
    let continuar = true;

    while (continuar) {
        let juguete = prompt("Ingresa el nombre del juguete que quieres comprar:");
        let precio = parseFloat(prompt("Ingresa el precio del juguete:"));

        // Validar que el precio sea un número
        if (isNaN(precio)) {
            alert("Por favor, ingresa un precio válido.");
            continue;
        }
        juguetes.push({ nombre: juguete, precio: precio });
        continuar = confirm("¿Quieres agregar otro juguete?");
    }
    return juguetes;
}

// Calcular el precio total de los juguetes
function calcularPrecioTotal(juguetes) {
    let precioTotal = 0;

    for (let i = 0; i < juguetes.length; i++) {
        precioTotal += juguetes[i].precio;
    }
    return precioTotal;
}


function iniciar() {
    alert("¡Bienvenid@ a la Lista de Deseos de Navidad!");

    const nombreCompleto = obtenerNombre();
    const listaJuguetes = obtenerJuguetes();

    // Resultados
    alert("Gracias, "+ nombreCompleto +", por compartir tu lista de deseos de Navidad.");

    for (let i = 0; i < listaJuguetes.length; i++) {
        alert("Juguete: " +listaJuguetes[i].nombre +"\nPrecio: $" +listaJuguetes[i].precio.toFixed(2));
    }

    let precioTotal = calcularPrecioTotal(listaJuguetes);
    alert("El precio total de tus juguetes es: $" + precioTotal.toFixed(2));
}

// Llamar a la función principal al cargar la página
window.onload = iniciar;