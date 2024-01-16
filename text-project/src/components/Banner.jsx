import reactLogo from '../assets/react.svg'
import viteSvg from '/vite.svg'

export const Banner = () => {
  return (
    <>
    <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteSvg} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}
