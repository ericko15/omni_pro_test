import classes from './styles.module.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Tabs = ({children, tabs, active, onClick}) => {

  return (
    <>
      <div className={classes.container}>
        {
          tabs.map((tab, i) => (
            <div onClick={() => onClick(i)} className={classNames(classes.header, {[classes.active]: active === i})} key={i}>
              <span>{tab.title}</span>
            </div>
          ))
        }
      </div>
      <div>{children}</div>
    </>
  )
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  tabs: PropTypes.array.isRequired,
  active: PropTypes.number,
  onClick: PropTypes.func
}

export default Tabs
