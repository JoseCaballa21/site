// SECCICIÓN BOTÓNES
// BOTÓN ESTUDIOS
function mostrarVentanaEstudios() {
    const ventana = document.getElementById('ventana-estudios');
    ventana.style.display = 'block';
}

function cerrarVentanaEstudios() {
    const ventana = document.getElementById('ventana-estudios');
    ventana.style.display = 'none';
}

//BOTON EXPERIENCIA
function mostrarVentanaExperiencia() {
    const ventana = document.getElementById("ventana-experiencia");
    ventana.style.display = "block";
}

function cerrarVentanaExperiencia() {
    const ventana = document.getElementById("ventana-experiencia");
    ventana.style.display = "none";
}


// BOTÓN CURRICULUM
function descargarCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv/CURRICULUM HARVARD.pdf';
    link.download = 'Curriculum_Josemaria_Caballa.pdf';
    link.target = '_blank';
    link.click();
}

//BOTON CONTACTAME
function mostrarVentanaContacto() {
    document.getElementById("ventana-contacto").style.display = "block";
}

function cerrarVentanaContacto() {
    document.getElementById("ventana-contacto").style.display = "none";
}

// Cerrar cualquier ventana al hacer clic fuera de ella o al presionar Escape
window.addEventListener('click', function(event) {
    const ventanas = document.querySelectorAll('.ventana');
    ventanas.forEach((ventana) => {
        if (event.target === ventana) {
            ventana.style.display = 'none';
        }
    });
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const ventanas = document.querySelectorAll('.ventana');
        ventanas.forEach((ventana) => {
            ventana.style.display = 'none';
        });
    }
});

//SECCION DE PROYECTOS
// Mostrar proyectos según la categoría
function mostrarProyectos(categoria) {
    const contenedor = document.querySelector('.contenedor-proyectos');
    let contenido = '';

    if (categoria === 'web') {
        contenido = `
            <div class="proyecto-card" onclick="abrirModal('web1')">
                <img src="assets/img/web1.jpg" alt="Proyecto Web 1">
                <h3>PORTAFOLIO WEB</h3>
            </div>
            <div class="proyecto-card" onclick="abrirModal('web2')">
                <img src="assets/img/proyectovacio.jpg" alt="Proyecto Web 2">
                <h3>En proceso...</h3>
            </div>
            <div class="proyecto-card" onclick="abrirModal('web3')">
                <img src="assets/img/proyectovacio.jpg" alt="Proyecto Web 3">
                <h3>En proceso...</h3>
            </div>
            <div class="proyecto-card" onclick="abrirModal('web4')">
                <img src="assets/img/proyectovacio.jpg" alt="Proyecto Web 4">
                <h3>En proceso...</h3>
            </div>
            <div class="proyecto-card" onclick="abrirModal('web5')">
                <img src="assets/img/proyectovacio.jpg" alt="Proyecto Web 5">
                <h3>En proceso...</h3>
            </div>
            <div class="proyecto-card" onclick="abrirModal('web6')">
                <img src="assets/img/proyectovacio.jpg" alt="Proyecto Web 6">
                <h3>En proceso...</h3>
            </div>
        `;
    }

    if (categoria === 'analisis') {
        contenido = `
            <div class="proyecto-card" onclick="abrirModal('analisis1')">
                <img src="assets/img/analisis1.jpg" alt="Proyecto Analisis 1">
                <h3>EXAMEN DE ADMISIÓN 2025-II UNMSM</h3>
            </div>
            <div class="proyecto-card" onclick="abrirModal('analisis2')">
                <img src="assets/img/analisis2.jpg" alt="Proyecto Analisis 2">
                <h3>EXAMEN DE ADMISIÓN 2025 UNDC</h3>
            </div>
            <div class="proyecto-card" onclick="abrirModal('analisis3')">
                <img src="assets/img/proyectovacio.jpg" alt="Proyecto Analisis 3">
                <h3>ESTADÍSTICAS DE LEO MESSI</h3>
            </div>
            <div class="proyecto-card" onclick="abrirModal('analisis4')">
                <img src="assets/img/proyectovacio.jpg" alt="Proyecto Analisis 4">
                <h3>En proceso...</h3>
            </div>
            <div class="proyecto-card" onclick="abrirModal('analisis5')">
                <img src="assets/img/proyectovacio.jpg" alt="Proyecto Analisis 5">
                <h3>En proceso...</h3>
            </div>
            <div class="proyecto-card" onclick="abrirModal('analisis6')">
                <img src="assets/img/proyectovacio.jpg" alt="Proyecto Analisis 6">
                <h3>En proceso...</h3>
            </div>
        `;
    }

    if (categoria === 'diseño') {
        contenido = `
            <div class="proyecto-card" onclick="abrirModal('diseño1')">
                <img src="assets/img/diseño1.jpg" alt="Proyecto Diseño 1">
                <h3>DISEÑO DE SISTEMA DE VENTA DE ROPA</h3>
            </div>
            <div class="proyecto-card" onclick="abrirModal('diseño2')">
                <img src="assets/img/proyectovacio.jpg" alt="Proyecto Diseño 2">
                <h3>En proceso...</h3>
            </div>
            <div class="proyecto-card" onclick="abrirModal('diseño3')">
                <img src="assets/img/proyectovacio.jpg" alt="Proyecto Diseño 3">
                <h3>En proceso...</h3>
            </div>
            <div class="proyecto-card" onclick="abrirModal('diseño4')">
                <img src="assets/img/proyectovacio.jpg" alt="Proyecto Diseño 4">
                <h3>En proceso...</h3>
            </div>
            <div class="proyecto-card" onclick="abrirModal('diseño5')">
                <img src="assets/img/proyectovacio.jpg" alt="Proyecto Diseño 5">
                <h3>En proceso...</h3>
            </div>
            <div class="proyecto-card" onclick="abrirModal('diseño6')">
                <img src="assets/img/proyectovacio.jpg" alt="Proyecto Diseño 6">
                <h3>En proceso...</h3>
            </div>
        `;
    }

    contenedor.innerHTML = contenido;
    contenedor.style.display = 'flex';
}

// Funciones para abrir y cerrar los modales
function abrirModal(id) {
    document.getElementById(id).style.display = "block";
}

function cerrarModal(id) {
    document.getElementById(id).style.display = "none";
}

// Cerrar modal al hacer clic fuera de él o presionando la tecla Escape
window.addEventListener('click', function(event) {
    const modales = document.querySelectorAll('.modal');
    modales.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        const modales = document.querySelectorAll('.modal');
        modales.forEach((modal) => {
            modal.style.display = "none";
        });
    }
});

//ANIMACIÓN DE BRILLO INTACTO AL SELECCIONAR BOTON DE PROYECTOS
const botonesProyectos = document.querySelectorAll('.proyectos button');

botonesProyectos.forEach((boton) => {
    boton.addEventListener('click', function () {
        // Elimina la clase 'active' de todos los botones
        botonesProyectos.forEach((btn) => btn.classList.remove('active'));

        // Añade la clase 'active' solo al botón seleccionado
        boton.classList.add('active');
    });
});