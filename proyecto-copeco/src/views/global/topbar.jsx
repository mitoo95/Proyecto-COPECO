
const Topbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="C:\\Users\\mitoo\\Documents\\AyudaOscar\\proyecto-copeco\\src\\assets\\COPECO.png" alt="logo"
                        width="30" height="24" class="d-inline-block align-text-top"/>
                    COPECO
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Bienvenido</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="#">Hoja de Servicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Unidad Emergencias</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Datos Hoja de Servicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Datos Unidad Emergencias</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Topbar;