import PropsTypes from 'prop-types'

const Page = ({ title, description, children }) => {
  return (
    <>
      <h1 className="page-title">{title}</h1>
      {description && 
        <div className="page-description">{description}</div>
      }

      <div className="page-content">
        {children}
      </div>
    </>
  )
}

Page.defaultProps = {
  title: 'Please add Page title',
}

Page.propsTypes = {
  title: PropsTypes.string.isRequired,
  description: PropsTypes.string,
}

export default Page
