import PropsTypes from 'prop-types'
import RSearch from '../../../content/regions/search'
import RUser from '../../../content/regions/user'
import RBranding from '../../../content/regions/branding'

const Header = ({ title }) => {
  return (
    <header className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className="container-fluid">
        <RBranding />

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
          <RSearch />
          <RUser />
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
