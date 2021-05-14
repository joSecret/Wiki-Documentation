import PropsTypes from 'prop-types'

const Btn = ({ btnStyle, text, onClick }) => {
  return (
    <>
      <button
        className={btnStyle}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  )
}

Btn.defaultProps = {
  btnStyle: 'btn btn-primary',
}

Btn.propsType = {
  btnStyle: PropsTypes.string,
  text: PropsTypes.string,
  onClick: PropsTypes.func.isRequired,
}

export default Btn
