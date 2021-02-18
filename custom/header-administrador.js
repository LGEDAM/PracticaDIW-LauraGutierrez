class HeaderAdmin extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback(){
        this.innerHTML = 
        `<header>
        <div>
            <!-- Logotipo -->
            <img src="media/imagenes/CIFPLAURA_I.png" alt="C.I.F.P Laura I">
            <div>
                <!-- Identificacion -->
                <a href="" class="identificar">
                    <p id="identificador">Administrador</p>
                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path fill="currentColor"
                            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z">
                        </path>
                    </svg>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down"
                        class="svg-inline--fa fa-caret-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512">
                        <path fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z">
                        </path>
                    </svg>
                </a>
                <!--Notificaciones-->
                <a href="" class="identificar">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                </a>
            </div>
        </div>
        <!-- Navegacion -->
        <nav>
            <ul>
                <li><a href="../administrador-usuarios.html">ADMINISTRADOR</a></li>
                <div class="opciones">
                    <li><a href="administrador-usuarios.html">Usuarios</a></li>
                    <li><a href="administrador-alta.html">Dar Alta</a></li>
                </div>
            </ul>
        </nav>
        </header>`;
    }
}
customElements.define("header-admin",HeaderAdmin);