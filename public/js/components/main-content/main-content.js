class MainContentStart extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Main Content -->
        <main class="main-content my-xxl-2">
            <div class="container-fluid">
                <div class="card">
                    <div class="card-header">
                        <form action="post">
                            <div class="input-group">
                                <input type="text" class="form-control search-input" placeholder="Pesquisar">
                                <i class="fa fa-magnifying-glass search-icon"></i>
                                <button class="input-group-text btn btn-primary">Buscar</button>
                            </div>
                        </form>
                    </div>
                    <div class="card-body">
        `;
    }
}

class MainContentEnd extends HTMLElement {
    constructor () {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        `;
    }
}

customElements.define("main-content-start", SidebarMobile);
customElements.define("main-content-end", SidebarMobile);