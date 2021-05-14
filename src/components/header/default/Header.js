import { Link } from 'react-router-dom'
import PropsTypes from 'prop-types'
import Region from '../../regions/Region'

import logo from '../../../img/logo.svg'
import regionUser from '../../../img/temp/region-user.svg'

const Header = ({ title }) => {
  return (
    <header className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className="container-fluid">
        <Region id='branding'>
          <Link className="navbar-brand" to="/">
            <img src={ logo } alt="logo" />
          </Link>
        </Region>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMain">
          <Region id='search' classes="ms-auto me-auto">
            <form className="input-group">
              <input className="form-control bg-transparent" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
          </Region>

          <Region id='user'>
            <img src={ regionUser } alt="logo" />
          </Region>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  title: 'Default page title',
}

Header.propsTypes = {
  title: PropsTypes.string.isRequired,
}

export default Header
