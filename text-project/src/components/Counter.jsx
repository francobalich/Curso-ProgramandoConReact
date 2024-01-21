import { useState } from "react"

export const Counter = () => {
  const [number, setNumber] = useState(0)
  const [data, setData] = useState(0)
  const handleAddOne = () => {
    setNumber(number + 1)
  }
  const handleRemoveOne = () => {
    setNumber((value) => value - 1)
  }
  const handleValue = (value) => {
    setNumber(value)
  }
  const handleInput = ({ target }) => {
    const { value } = target
    console.log(value);
    setData(parseInt(value))
  }
  const handleSetValue = () => {
    setNumber(data)
  }
  return (
    <>
      <div className="alert alert-primary" role="alert">
        {number}
      </div>
      <input onChange={handleInput} type="text" className="form-control input" />
      <div style={
        {
          display: "flex",
          gap: "10px"
        }} >
        <button onClick={() => handleAddOne()} type="button" className="btn btn-primary">+1</button>
        <button onClick={() => handleValue(0)} type="button" className="btn btn-secondary">Reset</button>
        <button onClick={() => handleValue(100)} type="button" className="btn btn-warning">100</button>
        <button onClick={(ev) => handleSetValue(ev)} type="button" className="btn btn-warning">{data}</button>
        <button onClick={() => handleRemoveOne()} type="button" className="btn btn-danger">-1</button>
      </div >

    </>
  )
}
