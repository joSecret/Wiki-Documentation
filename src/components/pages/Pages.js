import PropsTypes from 'prop-types'

const Page = ({ title }) => {
  return (
    <>
    </>
  )
}

Page.defaultProps = {
  title: 'Default page title',
}

Page.propsTypes = {
  title: PropsTypes.string.isRequired,
}

export default Page
