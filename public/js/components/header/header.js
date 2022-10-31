class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Header -->
        <nav class="navbar header px-4">
            <div class="container-fluid justify-content-between">
                <button class="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle Sidebar">
                    <i class="fa fa-bars"></i>
                </button>
                <a href="/" class="text-decoration-none sidebar-logo">
                    <span class="text-primary h3 fw-semibold m-0">Apoli</span><span class="text-secondary h3 fw-semibold m-0">Sys</span>
                </a>
                <div class="navbar-profile dropdown">
                    <a class="navbar-profile-toggler" data-bs-toggle="dropdown" aria-expanded="false" role="button"></a>
                    <span class="navbar-profile-text">Meu Perfil</span>
                    <img src="/public/img/imagem-rafael.png" alt="Imagem do usuário">
                    <i class="fa fa-chevron-down navbar-profile-arrow"></i>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                            <a class="dropdown-item" href="#sair">
                                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                <span>Sair</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('page-header', Header);
