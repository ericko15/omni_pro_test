import PropTypes from 'prop-types'
import classNames from 'classnames'

import classes from './styles.module.css'

const Button = ({children, className, fullWidth, type}) => (
  <button type={type} className={classNames(classes.button, className, {[classes.fullWidth]: fullWidth})}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string
}

export default Button
