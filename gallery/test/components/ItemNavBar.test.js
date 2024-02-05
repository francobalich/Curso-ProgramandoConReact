import { render, screen } from "@testing-library/react"
import { ItemNavBar } from "../../src/components/ItemNavBar"
import { BrowserRouter } from "react-router-dom"

describe('Pruebas del <ItemNavBar />', () => {
  test('Comprobamos que el <ItemNavBar /> fue creado correctamente', () => {
    render(<BrowserRouter>
    <ItemNavBar text="prueba" />
    </BrowserRouter>)
    expect(screen.getByText("prueba")).toBeTruthy()
  })
})
