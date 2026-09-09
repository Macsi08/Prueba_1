// Arreglo de comunas (Pág 16)
var comunasData = {
    "Metropolitana": ["Santiago", "Providencia", "Maipú"],
    "Valparaiso": ["Viña del Mar", "Valparaíso"]
};

function cargarComunas() {
    var region = document.getElementById("region").value;
    var comunaSelect = document.getElementById("comuna");
    comunaSelect.innerHTML = "<option>Cargando...</option>";

    if (region !== "") {
        comunaSelect.innerHTML = "";
        var lista = comunasData[region];
        for (var i = 0; i < lista.length; i++) {
            var opt = document.createElement("option");
            opt.value = lista[i];
            opt.text = lista[i];
            comunaSelect.add(opt);
        }
    }
}

// Validación de Registro
var formReg = document.getElementById("formRegistro");
if (formReg) {
    formReg.addEventListener("submit", function(e) {
        var correo = document.getElementById("correo").value;
        var clave = document.getElementById("clave").value;
        var divErrores = document.getElementById("errores");
        divErrores.innerHTML = "";

        // Validar correo (Pág 13)
        if (!correo.endsWith("@duoc.cl") && !correo.endsWith("@profesor.duoc.cl") && !correo.endsWith("@gmail.com")) {
            e.preventDefault();
            divErrores.innerHTML += "Correo no permitido.<br>";
        }

        // Validar clave (Pág 13)
        if (clave.length < 4 || clave.length > 10) {
            e.preventDefault();
            divErrores.innerHTML += "La clave debe tener entre 4 y 10 caracteres.<br>";
        }
    });
}