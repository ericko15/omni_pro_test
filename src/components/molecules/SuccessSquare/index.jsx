import classes from './styles.module.css'
import Check from '../../../assets/check.png'

const SuccessSquare = () => (
  <div className={classes.container}>
    <span>Success</span>
    <img src={Check} alt=""/>
  </div>
)

export default SuccessSquare
