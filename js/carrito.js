var carrito = JSON.parse(localStorage.getItem("carrito_libreria")) || [];

function agregarAlCarrito(nombre, precio) {
    var producto = { nombre: nombre, precio: precio };
    carrito.push(producto);
    localStorage.setItem("carrito_libreria", JSON.stringify(carrito));
    alert("Agregado: " + nombre);
    actualizarContadorMenu();
}

function actualizarContadorMenu() {
    var spanContador = document.getElementById("cart-count");
    if (spanContador) {
        spanContador.innerText = carrito.length;
    }
}

function mostrarCarrito() {
    var contenedor = document.getElementById("lista-carrito");
    if (contenedor) {
        if (carrito.length === 0) {
            contenedor.innerHTML = "<p>El carrito está vacío.</p>";
        } else {
            contenedor.innerHTML = "";
            var total = 0;
            for (var i = 0; i < carrito.length; i++) {
                var p = carrito[i];
                contenedor.innerHTML += "<div class='item-carrito'>" +
                    "<span>" + p.nombre + "</span>" +
                    "<span>$" + p.precio + "</span>" +
                    "</div>";
                total += p.precio;
            }
            contenedor.innerHTML += "<h3>Total: $" + total + "</h3>";
            contenedor.innerHTML += "<button onclick='vaciar()'>Vaciar Carrito</button>";
        }
    }
}

function vaciar() {
    localStorage.removeItem("carrito_libreria");
    location.reload();
}

actualizarContadorMenu();
if (document.getElementById("lista-carrito")) {
    mostrarCarrito();
}