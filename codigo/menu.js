document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nav-open").addEventListener("click", mostrarOcultar);
    window.addEventListener("resize", cambiarAncho);
})

let mostrar = true;

let mostrarOcultar = (e) => {
    let nav = document.getElementById("navegacion");
    let ul = document.getElementById("lista-menu");
    let li = document.getElementsByClassName("opcion");
    let nav_open = document.getElementById("nav-open");

    if (mostrar) {
        nav.style.display = 'flex';
        ul.style.flexDirection = 'column';
        ul.style.alignItems = 'center';
        for (let i = 0; i < li.length; i++)
            li[i].style.borderBottom = '1px solid #e8e8e8';
        nav_open.style.backgroundColor = '#C1AB7B';
        nav_open.style.color = '#2f3d52';
        mostrar = false;
    } else {
        nav.style.display = 'none';
        nav_open.style.backgroundColor = '#2f3d52';
        nav_open.style.color = '#e8e8e8';
        mostrar = true;
    }

}

function cambiarAncho() {
    let nav = document.getElementById("navegacion");
    let ul = document.getElementById("lista-menu");
    let li = document.getElementsByClassName("opcion");
    
    if (window.innerWidth < 650) {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
        ul.style.flexDirection = 'row';
        for (let i = 0; i < li.length; i++)
            li[i].style.borderBottom = 'none';
    }
}