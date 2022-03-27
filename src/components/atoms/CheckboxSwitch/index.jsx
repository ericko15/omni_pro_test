import classes from './styles.module.css'
import PropTypes from 'prop-types'

const CheckboxSwitch = ({id}) => (
  <div className={classes.checkbox}>
    <input id={id} type="checkbox"/>
  </div>
)

CheckboxSwitch.propTypes = {
  id: PropTypes.string
}

export default CheckboxSwitch
