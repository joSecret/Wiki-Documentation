import { NavLink } from 'react-router-dom'

import './style.scss'

import { MdViewComfy } from "react-icons/md";
import { MdTitle } from "react-icons/md";

const MainMenu = () => {
  return (
    <ul className="nav nav-pills flex-column nav-main">
      <li className="nav-item">
        <NavLink exact to="/" className="nav-link">
          <MdViewComfy />Home
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/typography" className="nav-link" activeClassName="active">
          <MdTitle />Typography
        </NavLink>
      </li>
    </ul>
  )
}

export default MainMenu
