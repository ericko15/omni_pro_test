import classes from './styles.module.css'
import Check from '../../../assets/check.png'
import {Link} from 'react-router-dom'

const SuccessSquare = () => (
  <div className={classes.container}>
    <span>Success</span>
    <img src={Check} alt=""/>
    <Link to="/home">Ir a la segundo diseño</Link>
  </div>
)

export default SuccessSquare
