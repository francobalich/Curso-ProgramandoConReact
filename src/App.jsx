import './App.css'
import { AppRouter } from './Router/AppRouter'
import { NavBar } from './components'

function App() {
  return (
    <section className='app'>
      <NavBar />
      <AppRouter />
    </section>
  )
}

export default App
