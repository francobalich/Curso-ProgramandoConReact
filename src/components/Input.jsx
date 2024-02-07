import { useState } from "react"

export const Input = ({ label = "-", onButtonClick = () => { } }) => {
  const [data, setData] = useState("")

  const onInputChange = (ev) => {
    setData(ev.target.value)
  }

  return (
    <div className="container w-50 mb-3">
      <label className="form-label">{label}</label>
      <div className="input_container">
        <input
          onChange={onInputChange}
          type="text"
          className="form-control input" />
        <button type="button" className="btn btn-primary" onClick={() => onButtonClick(data)}>Buscar</button>
      </div>
    </div>
  )
}
