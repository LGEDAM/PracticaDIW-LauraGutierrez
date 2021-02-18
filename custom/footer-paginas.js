class FooterPaginas extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback(){
        this.innerHTML =
        `<footer>
        <!--Información centro-->
        <div>
            <p>C.I.F.P Laura I</p>
            <p>Tel: 123456789</p>
            <p>cifplaura@gmail.com</p>
            <address>Dirección: C/Luna</address>
            
        </div>
        <!--Enlaces-->
        <div class="enlaces">
            <div>
            <a><img src="media/imagenes/Junta_de_Castilla_y_León.png" alt="Junta de Castilla y León"></a>
            <a><img src="media/imagenes/gobiernoEspaña.png" alt="Ministerio de educación - Gobierno de españa"></a>
           
            </div>
            <small>Copyright @ 2021. Todos los derechos reservados</small>
        </div>
        </footer>`;
    }
}
customElements.define("footer-paginas",FooterPaginas);