import { render, screen } from "@testing-library/react"
import { Input } from "../../src/components/Input"

describe('Pruebas del <Input />', () => {
  test('<Input /> fue creado correctamente', () => {
    render(<Input />)
    expect(screen.getByText("-")).not.toBeNull()
  })
  test('<Input /> se agrega el label text', () => {
    render(<Input label="test" />)
    expect(screen.getByText("test")).toBeTruthy()
  })
})