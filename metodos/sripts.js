function injectarHeader() {
    document.getElementById("header").innerHTML = `
        <section>
            <img src="https://static.vecteezy.com/system/resources/previews/021/011/502/original/minimalist-furniture-logo-design-template-vector.jpg" alt="Logo tienda de muebles" class="logo-header">
            <h1 class="no-select">Tienda de muebles</h1>
        </section>
        <section>
            <a href="/index.html">Inicio</a>
            <a href="/contacto.html">Contacto</a>
            <a href="/catalogo.html">Catalogo</a>
            <a href="/tutoriales.html">Tutoriales</a>
            <a href="/registro.html">Registrarse</a>
            <a href="/InicioSesion.html">Iniciar sesion</a>
        </section>
        <section>
            <a href="/carrito.html">Carrito &#x1F6D2;</a>
        </section>
    `;
}

function injectarFooter() {
    let footer = document.getElementById("footer");
    if (footer) {
        footer.innerHTML = `
            <p>&copy; 2026 Tienda de Muebles</p>
            <p>
                <a href="/contacto.html">Contacto</a> |
                <a href="/catalogo.html">Catálogo</a> |
                <a href="/tutoriales.html">Tutoriales</a>
            </p>
        `;
    }
}

injectarHeader();
injectarFooter();

// ---------- VALIDACIONES (basadas en los ejemplos) ----------

function validarString(text, min, max) {
    if (typeof text !== "string") {
        return false;
    }
    let trimmedText = text.trim();
    if (trimmedText.length >= min && trimmedText.length <= max) {
        return true;
    } else {
        return false;
    }
}

function validarCorreo(value) {
    let trimmedValue = value.trim().toLowerCase();

    if (trimmedValue === "") {
        return false;
    }

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(trimmedValue)) {
        return true;
    } else {
        return false;
    }
}

function validarContrasena(value) {
    if (value.trim().length >= 8) {
        return true;
    } else {
        return false;
    }
}

function apuntarInput(elemento, variable, valor) {
    if (valor) {
        elemento.classList.remove("border-red");
        return true;
    } else {
        elemento.classList.add("border-red");
        elemento.focus();
        return false;
    }
}

function mostrarError(idError, mensaje) {
    let elem = document.getElementById(idError);
    if (elem) {
        elem.textContent = mensaje;
    }
}

function limpiarError(idError) {
    let elem = document.getElementById(idError);
    if (elem) {
        elem.textContent = "";
    }
}

// ---------- FORMULARIO DE REGISTRO ----------

function validarRegistro(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("correo");
    let usuario = document.getElementById("nombre-usuario");
    let contrasena = document.getElementById("contrasena");
    let confirmar = document.getElementById("confirmar-contrasena");
    let valido = true;

    // Validar nombre
    if (validarString(nombre.value, 2, 30)) {
        apuntarInput(nombre, "nombre", true);
        limpiarError("error-nombre");
    } else {
        apuntarInput(nombre, "nombre", false);
        mostrarError("error-nombre", "El nombre debe tener entre 2 y 30 caracteres.");
        valido = false;
    }

    // Validar correo
    if (validarCorreo(correo.value)) {
        apuntarInput(correo, "correo", true);
        limpiarError("error-correo");
    } else {
        apuntarInput(correo, "correo", false);
        mostrarError("error-correo", "Ingresa un correo electrónico válido (ej: usuario@correo.com).");
        valido = false;
    }

    // Validar usuario
    if (validarString(usuario.value, 3, 20)) {
        apuntarInput(usuario, "usuario", true);
        limpiarError("error-usuario");
    } else {
        apuntarInput(usuario, "usuario", false);
        mostrarError("error-usuario", "El nombre de usuario debe tener entre 3 y 20 caracteres.");
        valido = false;
    }

    // Validar contraseña
    if (validarContrasena(contrasena.value)) {
        apuntarInput(contrasena, "contraseña", true);
        limpiarError("error-contrasena");
    } else {
        apuntarInput(contrasena, "contraseña", false);
        mostrarError("error-contrasena", "La contraseña debe tener al menos 8 caracteres.");
        valido = false;
    }

    // Validar confirmación de contraseña
    if (confirmar.value === contrasena.value && confirmar.value !== "") {
        apuntarInput(confirmar, "confirmación", true);
        limpiarError("error-confirmar");
    } else {
        apuntarInput(confirmar, "confirmación", false);
        mostrarError("error-confirmar", "Las contraseñas no coinciden.");
        valido = false;
    }

    if (valido) {
        alert("Registro exitoso. Bienvenido, " + nombre.value + "!");
        window.location.href = "/InicioSesion.html";
    }

    return false;
}

// ---------- FORMULARIO DE LOGIN ----------

function validarLogin(event) {
    event.preventDefault();

    let usuario = document.getElementById("nombre-usuario");
    let contrasena = document.getElementById("contrasena");
    let valido = true;

    if (validarString(usuario.value, 3, 20)) {
        apuntarInput(usuario, "usuario", true);
        limpiarError("error-usuario");
    } else {
        apuntarInput(usuario, "usuario", false);
        mostrarError("error-usuario", "Ingresa tu nombre de usuario (entre 3 y 20 caracteres).");
        valido = false;
    }

    if (validarContrasena(contrasena.value)) {
        apuntarInput(contrasena, "contraseña", true);
        limpiarError("error-contrasena");
    } else {
        apuntarInput(contrasena, "contraseña", false);
        mostrarError("error-contrasena", "La contraseña debe tener al menos 8 caracteres.");
        valido = false;
    }

    if (valido) {
        alert("Sesión iniciada correctamente.");
        window.location.href = "/index.html";
    }

    return false;
}

// ---------- FORMULARIO DE CONTACTO ----------

function validarContacto(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre-contacto");
    let correo = document.getElementById("correo-contacto");
    let mensaje = document.getElementById("mensaje-contacto");
    let valido = true;

    if (validarString(nombre.value, 2, 30)) {
        apuntarInput(nombre, "nombre", true);
        limpiarError("error-nombre");
    } else {
        apuntarInput(nombre, "nombre", false);
        mostrarError("error-nombre", "El nombre debe tener entre 2 y 30 caracteres.");
        valido = false;
    }

    if (validarCorreo(correo.value)) {
        apuntarInput(correo, "correo", true);
        limpiarError("error-correo");
    } else {
        apuntarInput(correo, "correo", false);
        mostrarError("error-correo", "Ingresa un correo electrónico válido.");
        valido = false;
    }

    if (validarString(mensaje.value, 10, 500)) {
        apuntarInput(mensaje, "mensaje", true);
        limpiarError("error-mensaje");
    } else {
        apuntarInput(mensaje, "mensaje", false);
        mostrarError("error-mensaje", "El mensaje debe tener entre 10 y 500 caracteres.");
        valido = false;
    }

    if (valido) {
        alert("Mensaje enviado correctamente. Te contactaremos pronto.");
        event.target.reset();
    }

    return false;
}

// ---------- CARRITO DE COMPRAS ----------

let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    alert(nombre + " agregado al carrito.");
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarCarrito() {
    let lista = document.getElementById("lista-carrito");
    let totalElem = document.getElementById("total-carrito");
    if (!lista) return;

    let data = localStorage.getItem("carrito");
    carrito = data ? JSON.parse(data) : [];

    if (carrito.length === 0) {
        lista.innerHTML = "<p>Tu carrito está vacío. Visita el <a href='/catalogo.html'>catálogo</a> para agregar productos.</p>";
        if (totalElem) totalElem.textContent = "";
        return;
    }

    let html = "";
    let total = 0;
    carrito.forEach((item, index) => {
        total += item.precio;
        html += `
            <div class="item-carrito">
                <span>${item.nombre}</span>
                <span>$${item.precio.toLocaleString('es-CL')}</span>
                <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
            </div>
        `;
    });

    lista.innerHTML = html;
    if (totalElem) totalElem.textContent = "Total: $" + total.toLocaleString('es-CL');
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

mostrarCarrito();
