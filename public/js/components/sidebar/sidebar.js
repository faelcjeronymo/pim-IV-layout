class Sidebar extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Sidebar -->
        <aside class="aside-sidebar">
            <!-- Sidebar Nav -->
            <nav class="navbar sidebar border-end d-none d-xxl-flex flex-column py-3">
                <a href="/" class="d-flex justify-content-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                    <h5 class="h3 fw-semibold m-0">
                        <span class="text-primary">Apoli</span><span class="text-secondary">Sys</span>
                    </h5>
                </a>
                <ul class="list-unstyled ps-0">
                    <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed text-primary" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                            Segurado
                        </button>
                        <div class="collapse" id="home-collapse" style="">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded text-primary">Overview</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded text-primary">Updates</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded text-primary">Reports</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed text-primary" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            Veículos
                        </button>
                        <div class="collapse" id="dashboard-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded text-primary">Overview</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded text-primary">Weekly</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded text-primary">Monthly</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded text-primary">Annually</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed text-primary" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                            Cotações
                        </button>
                        <div class="collapse" id="orders-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded text-primary">New</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded text-primary">Processed</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded text-primary">Shipped</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded text-primary">Returned</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed text-primary"data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                            Apólices
                        </button>
                        <div class="collapse" id="account-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded text-primary">New...</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded text-primary">Profile</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded text-primary">Settings</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded text-primary">Sign out</a></li>
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

customElements.define("sidebar", Sidebar);
customElements.define("sidebar-mobile", SidebarMobile);
