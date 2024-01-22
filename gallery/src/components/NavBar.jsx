import { ItemNavBar } from "./ItemNavBar"
import { ItemNavBarParent } from "./ItemNavBarParent"

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <div className="container-fluid w-75">
          <a className="navbar-brand" href="#">Galeria</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <div className="navbar-nav w-100 justify-content-between">
              <ul className="navbar-nav">
              </ul>
              <ul className="navbar-nav">
                <ItemNavBar text="Iniciar sesión" />
                <ItemNavBar text="Registrarse" />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
