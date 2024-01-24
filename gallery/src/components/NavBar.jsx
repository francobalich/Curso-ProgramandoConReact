import { Link } from "react-router-dom"
import { ItemNavBar } from "./ItemNavBar"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const NavBar = () => {
  const { user, setUser, userEmpty } = useContext(UserContext)
  const handleCloseSesion = () => {
    setUser(userEmpty)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <div className="container-fluid w-75">
          <Link className="navbar-brand" to="./home">Galería</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <div className="navbar-nav w-100 justify-content-between">
              <ul className="navbar-nav">
              </ul>
              <ul className="navbar-nav">
                {
                  (user.state !== "authenticated")
                    ? <><ItemNavBar text="Iniciar sesión" url="./auth/login" />
                      <ItemNavBar text="Registrarse" url="./auth/register" /></>
                    : <>
                      <ItemNavBar text={`Bienvenido/a ${user.name} ${user.surname}`} />
                      <ItemNavBar text="Cerrar sesión" callback={handleCloseSesion} />
                    </>
                }
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
