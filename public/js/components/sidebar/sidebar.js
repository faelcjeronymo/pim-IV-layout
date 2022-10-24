class Sidebar extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Sidebar -->
        <aside class="aside-sidebar collapse collapse-horizontal" id="sidebar">
            <!-- Sidebar Nav -->
            <nav class="navbar sidebar shadow">
                <div class="sidebar-header">
                    <a href="/" class="text-decoration-none py-3 sidebar-logo">
                        <span class="text-primary h3 fw-semibold m-0">Apoli</span><span class="text-secondary h3 fw-semibold m-0">Sys</span>
                    </a>
                    <button class="fa btn-close" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Fechar barra lateral"></button>
                </div>
                <ul class="sidebar-nav">
                    <li class="sidebar-nav-item">
                        <button class="btn btn-toggle" data-bs-toggle="collapse" data-bs-target="#segurados-submenu" aria-expanded="false">
                            <i class="fa fa-users sidebar-nav-item-icon"></i>
                            <span>Segurados</span>
                            <i class="fa sidebar-nav-item-arrow"></i>
                        </button>
                        <div class="collapse sidebar-nav-item-collapse" id="segurados-submenu">
                            <ul>
                                <li>
                                    <a href="#" class="btn btn-toggle">
                                        <i class="fa fa-list me-1"></i>
                                        <span>Cadastrados</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="btn btn-toggle">
                                        <i class="fa fa-plus me-1"></i>
                                        <span>Cadastrar</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="sidebar-nav-item">
                        <button class="btn btn-toggle" data-bs-toggle="collapse" data-bs-target="#veiculos-submenu" aria-expanded="false">
                            <i class="fa fa-car-side sidebar-nav-item-icon"></i>
                            <span>Veículos</span>
                            <i class="fa sidebar-nav-item-arrow"></i>
                        </button>
                        <div class="collapse sidebar-nav-item-collapse" id="veiculos-submenu">
                            <ul>
                                <li>
                                    <a href="#" class="btn btn-toggle">
                                        <i class="fa fa-list me-1"></i>
                                        <span>Cadastrados</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="btn btn-toggle">
                                        <i class="fa fa-plus me-1"></i>
                                        <span>Cadastrar</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="sidebar-nav-item">
                        <button class="btn btn-toggle" data-bs-toggle="collapse" data-bs-target="#cotacoes-submenu" aria-expanded="false">
                            <i class="fa fa-list-check sidebar-nav-item-icon"></i>
                            <span>Cotações</span>
                            <i class="fa sidebar-nav-item-arrow"></i>
                        </button>
                        <div class="collapse sidebar-nav-item-collapse" id="cotacoes-submenu">
                            <ul>
                                <li>
                                    <a href="#" class="btn btn-toggle">
                                        <i class="fa fa-list me-1"></i>
                                        <span>Geradas</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="btn btn-toggle">
                                        <i class="fa fa-plus me-1"></i>
                                        <span>Gerar</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="sidebar-nav-item">
                        <button class="btn btn-toggle"data-bs-toggle="collapse" data-bs-target="#apolices-submenu" aria-expanded="false">
                            <i class="fa fa-file-lines sidebar-nav-item-icon"></i>
                            <span>Apólices</span>
                            <i class="fa sidebar-nav-item-arrow"></i>
                        </button>
                        <div class="collapse sidebar-nav-item-collapse" id="apolices-submenu">
                            <ul>
                                <li>
                                    <a href="#" class="btn btn-toggle">
                                        <i class="fa fa-list me-1"></i>
                                        <span>Emitidas</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="btn btn-toggle">
                                        <i class="fa fa-plus me-1"></i>
                                        <span>Emitir</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </aside>
        `;
    }
}
class SidebarMobile extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Sidebar mobile -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebar-mobile" aria-labelledby="sidebar-label">
            <div class="offcanvas-header">
                <h1 class="offcanvas-title m-0 fw-semibold">
                    <span class="text-primary">Apoli</span><span class="text-secondary">Sys</span>
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
            </div>
        </div>
        `;
    }
}

customElements.define("page-sidebar", Sidebar);
customElements.define("page-sidebar-mobile", SidebarMobile);
