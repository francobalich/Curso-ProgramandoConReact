import './App.css'
import Title from './components/Title'
import { Subtitle } from './components/Subtitle'
import { Counter } from './components/Counter'

function App() {

  return (
    <section className='containerApp'>
      <Title text="Contandor" />
      <Subtitle text="Primer contador" />
      <Counter />
    </section>
  )
}

export default App
