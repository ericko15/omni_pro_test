import PropTypes from 'prop-types'

const HexagonalExclamation = ({className, height, width}) => (
  <svg width={width} height={height} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M7.77816 0H3.22184L0 3.22184V7.77816L3.22184 11H7.77816L11 7.77816V3.22184L7.77816 0ZM6.00525 8.26888H4.99475V7.09065H6.00525V8.26888ZM6.00525 6.69782H4.99475V2.73099H6.00525V6.69782Z"/>
  </svg>
)

HexagonalExclamation.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

HexagonalExclamation.defaultProps = {
  className: '',
  height: '11',
  width: '11',
}


export default HexagonalExclamation
