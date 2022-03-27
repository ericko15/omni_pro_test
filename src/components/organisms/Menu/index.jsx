import PropTypes from 'prop-types'
import classes from './styles.module.css'
import classNames from 'classnames'
import {useState} from 'react'

const Menu = ({menu, active}) => {
  const [open, setOpen] = useState(false)

  const handleToggleOpen = () => {
    setOpen(v => !v)
  }

  return (
    <>
      <div className={classes.icon} onClick={handleToggleOpen}>
        {
          !open && (
            <div className={classes.openIcon}/>
          )
        }
        {
          open && (
            <i className="fa-solid fa-arrow-left"/>
          )
        }
      </div>
      <ul className={classNames(classes.container, {[classes.open]: open})}>
        {
          menu.map(item => (
            <li key={item.id} className={classNames({[classes.active]: item.id === active})}>{item.title}</li>
          ))
        }
      </ul>
    </>
  )
}

Menu.propTypes = {
  menu: PropTypes.array.isRequired,
  active: PropTypes.string
}

export default Menu
