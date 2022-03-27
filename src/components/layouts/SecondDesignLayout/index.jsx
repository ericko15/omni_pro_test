import PropTypes from 'prop-types'
import classes from './styles.module.css'
import TopBar from '../../molecules/TopBar'

const SecondDesignLayout = ({children}) => (
  <div className={classes.container}>
    <TopBar/>
    {children}
  </div>
)

SecondDesignLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default SecondDesignLayout
