import { useState } from 'react'
import './App.css'
import { Gallery } from './components/Gallery'
import { NavBar } from './components/NavBar'
import { GalleryPage, LoginPage, RegisterPage } from './page'


function App() {
  const [user, setUser] = useState("autenticado")

  return (
    <section className='app'>
      <NavBar />
      {
        (user === "autenicado")
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
