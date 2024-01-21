
export const ItemNavBar = ({text="-",href="#"}) => {
  return (
    <li className="nav-item">
      <a className="nav-link" aria-current="page" href={href}>{text}</a>
    </li>
  )
}
