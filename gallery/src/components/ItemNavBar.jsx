import { Link } from "react-router-dom"

export const ItemNavBar = ({ text = "-", url = "#", callback = () => { } }) => {
  return (
    <li className="nav-item" onClick={callback}>
      <Link className="nav-link" aria-current="page" to={url} >{text}</Link>
    </li>
  )
}
