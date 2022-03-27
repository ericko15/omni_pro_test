import classes from './styles.module.css'
import Logo from '../../../assets/second-logo.png'

const Topbar = () => (
  <div className={classes.container}>
    <img src={Logo} alt="logo"/>
    <div className={classes.icons}>
      <i className="fa-solid fa-magnifying-glass"/>
      <i className="fa-regular fa-heart"/>
      <i className="fa-solid fa-bag-shopping"/>
      <i className="fa-solid fa-bars-staggered"/>
    </div>
  </div>
)

export default Topbar
