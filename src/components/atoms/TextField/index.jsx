import PropTypes from 'prop-types'

import classes from './styles.module.css'
import HexagonalExclamation from '../HexagonalExclamation'

const TextField = ({id, label, isRequired, placeholder, type}) => {
  return (
    <div className={classes.container}>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} type={type} placeholder={placeholder}/>
      {
        isRequired && (
          <div className={classes.isRequired}>
            <HexagonalExclamation className={classes.icon} height="14" width="14"/>
            <span>Requerido</span>
          </div>
        )
      }
    </div>
  )
}

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}

TextField.defaultProps = {
  type: 'text'
}

export default TextField
