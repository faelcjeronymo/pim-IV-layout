class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Header -->
        <nav class="navbar header px-4">
            <div class="container justify-content-between">
                <button class="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle Sidebar">
                    <i class="fa fa-bars"></i>
                </button>
                <div class="navbar-profile dropdown">
                    <span class="text-primary fw-semibold">Meu Perfil</span>
                    <img src="./public/img/imagem-rafael.png" alt="Imagem do usuário">
                    <i class="fa fa-chevron-down text-primary"></i>
                    <a class="stretched-link show" data-bs-toggle="dropdown" aria-expanded="false" role="button"></a>
                    <ul class="dropdown-menu dropdown-menu-end show">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <hr class="dropdown-divider">
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <hr class="dropdown-divider">
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('page-header', Header);
