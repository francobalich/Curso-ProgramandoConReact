
export const ItemNavBarParent = ({text="-",href="#",children}) => {
  return (
    <li className="nav-item">
      <a className="nav-link" aria-current="page" href={href}>{children}</a>
    </li>
  )
}
