import { useState } from "react"

export const useData = () => {
  const [data, setData] = useState([])

  const addData=(newData)=>{
    setData(...data,newData)
  }

  return {
    data,
    setData,
    addData
  }
}