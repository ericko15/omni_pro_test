import PropTypes from 'prop-types'
import classes from './styles.module.css'
import classNames from 'classnames'

const Tab = ({children, className}) => (
  <div className={classNames(classes.container, className)}>
    <div className={classes.content}>
      {children}
    </div>
  </div>
)

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Tab
