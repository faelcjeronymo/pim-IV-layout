class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Header -->
        <nav class="navbar header navbar-expand-xxl">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar-mobile" aria-controls="sidebar-mobile" aria-expanded="false" aria-label="Toggle Mobile Sidebar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-profile ms-auto">
                    <span class="text-primary">Meu Perfil</span>
                    <img src="./public/img/imagem-rafael.png" alt="Imagem do usuário">
                    <i class="fa fa-chevron-down text-primary"></i>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('page-header', Header);
