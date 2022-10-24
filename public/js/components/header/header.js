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
                <div class="navbar-profile">
                    <span class="text-primary fw-semibold">Meu Perfil</span>
                    <img src="./public/img/imagem-rafael.png" alt="Imagem do usuário">
                    <i class="fa fa-chevron-down text-primary"></i>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('page-header', Header);
