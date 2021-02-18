document.addEventListener("DOMContentLoaded", () => {
    // Variables
    let mujer = document.getElementById("mujer");
    let hombre = document.getElementById("hombre");
    let h3 = document.getElementById("tipoUsuario"); // Tipo de usuario (alumno o prof)
    let opcionesCursos = document.getElementById("opcionesCursos"); // Opciones cursos
    let elemento = document.getElementsByClassName("modulo"); // Modulos de un curso
    let al = document.getElementById("alum");
    let prof = document.getElementById("prof");

    // Ocultar el tipo de usuario
    h3.style.display = "none";
    // Ocultar los cursos
    opcionesCursos.style.display = "none";
    // Ocultar modulos del curso
    for (i = 0; i < elemento.length; i++)
        elemento[i].style.display = "none";

    // Boton vaciar
    document.getElementById("vaciar").addEventListener("click", () => {
        // Ocultar cabecera
        h3.style.display = "none";
        // Ocultar distintos cursos
        opcionesCursos.style.display = "none";
        //Ocultar fieldset
        ocultarFieldsets();
        // Cambiar color opciones
        cambiarColor(mujer);
        cambiarColor(hombre);
        cambiarColor(al);
        cambiarColor(prof);

    })
});


// Funcion que cambiar el color del elemento pasado en dos modos: normal(fondo blanco, letra negro) o seleccionado (fondo azul, letra ocre)
function cambiarColor(elemento, modo = "normal") {
    if (modo == "seleccionado") {
        elemento.style.backgroundColor = "#2f3d52";
        elemento.style.color = "#C1AB7B";
    } else {
        elemento.style.backgroundColor = "white";
        elemento.style.color = "black";
    }

}

// Funcion que muestra los modulos del elemento(curso) pasado como parametro
function mostrarModulos(elemento) {
    let h3 = document.getElementById("tipoUsuario")
    let fieldset = document.getElementById("modulo-" + elemento.id);
    let cursos = document.getElementsByName("curso");
    // Elige un curso
    if (elemento.checked) {
        // Mostrar sus modulos
        fieldset.style.display = "block";

        let modulos = document.querySelector("#" + fieldset.id + " fieldset");
        modulos.style.display = "grid";
        // Es alumno (un alumno solo puede elegir un curso)
        if (h3.innerHTML == "Alumno") {
            // Deshabilitar el checkbox de los otros cursos
            for (let i in cursos) {
                if (cursos[i].id != (elemento.id)) {
                    cursos[i].disabled = true;

                }
            }
        }
    } else {
        // No mostrar los modulos
        fieldset.style.display = "none";
        // Habilitar el checkbox de los otros cursos
        for (let i in cursos) {
            cursos[i].disabled = false;
        }
        let check = document.querySelectorAll("#" + fieldset.id +" input");
        for (i = 0; i < check.length; i++) {
            check[i].checked = false;
        }
    }

}

// Funcion que oculta los modulos 
function ocultarFieldsets() {
    let fieldset = document.getElementsByTagName("fieldset");
    for (i = 0; i < fieldset.length - 1; i++) {
        fieldset[i].style.display = "none";
    }
    let check = document.querySelectorAll(".modulo input");
    for (i = 0; i < check.length; i++) {
        check[i].checked = false;
    }
}

// Funcion que cambia los elementos dependiendo de la opcion elegida (Alumno o Profesor)
function opcionAlumnoProf(elemento) {
    let h3 = document.getElementById("tipoUsuario");
    let opcionesCursos = document.getElementById("opcionesCursos");
    let cursos = document.getElementsByName("curso");
    let al = document.getElementById("alum");
    let prof = document.getElementById("prof");
    // Mostrar cabecera
    h3.style.display = "block";
    // Mostrar distintos cursos
    opcionesCursos.style.display = "grid";
    // Quitar los check de los cursos
    for (let i in cursos) {
        cursos[i].checked = false;
        cursos[i].disabled = false;
    }
    //Ocultar fieldset
    ocultarFieldsets();
    // Cambiar cabecera y estilo de la opcion
    if (elemento.value == "alumno") { //ALUMNO
        h3.innerHTML = "Alumno";
        // Color opcion
        cambiarColor(al, "seleccionado")
        cambiarColor(prof);
    } else { // PROFESOR
        h3.innerHTML = "Profesor";
        // Color opcion
        cambiarColor(prof, "seleccionado");
        cambiarColor(al);
    }

}

// Funcion que cambiar los colores de los elementos de sexo
function opcionSexo(elemento) {
    if (elemento.value == "mujer") {
        cambiarColor(mujer, "seleccionado");
        cambiarColor(hombre);
    } else {
        cambiarColor(hombre, "seleccionado");
        cambiarColor(mujer);
    }
}