import './App.css'
import { GalleryPage, LoginPage, RegisterPage } from './page'
import { NavBar } from './components'

function App() {
  const user = "autenticado"

  return (
    <section className='app'>
      <NavBar />
      {
        (user === "no-autenticado")
          ? <GalleryPage />
          : <>
            <LoginPage />
            {/* <RegisterPage /> */}
          </>
      }
    </section>
  )
}

export default App
