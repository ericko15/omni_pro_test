import Logo from '../../../assets/logo.png'
import classes from './styles.module.css'

const LogoImage = () => (
  <div className={classes.container}>
    <img src={Logo} alt=""/>
  </div>
)

export default LogoImage
