import { Link } from 'react-router-dom'

import Region from "../../components/regions/Region"

import logo from "../../img/logo.svg"

const branding = () => {
  return (
    <div>
      <Region id='branding'>
        <Link className="navbar-brand" to="/">
          <img src={ logo } alt="logo" />
        </Link>
      </Region>
    </div>
  )
}

export default branding
