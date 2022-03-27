import {useNavigate} from 'react-router-dom'
import Tab from '../../atoms/Tab'
import TextField from '../../atoms/TextField'
import CheckboxSwitch from '../../atoms/CheckboxSwitch'
import Button from '../../atoms/Button'

import classes from './styles.module.css'

const LoginTab = () => {
  const route = useNavigate()

  const handleSubmit = () => {
    route('/success')
  }

  return (
    <Tab title="Ingreso">
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField type="email" id="email" label="EMAIL" placeholder="ejemplo@email.com"/>
        <TextField type="password" id="password" label="CONTRASEÑA" placeholder="*******"/>

        <div className={classes.subscribe}>
          <CheckboxSwitch id="subscribe"/>
          <label htmlFor="subscribe">Suscribirse al Newsletter</label>
        </div>
        <div className={classes.buttonContainer}>
          <Button type="submit" fullWidth>Ingreso</Button>
        </div>
        <div className={classes.forgotPassword}>
          Olvide Contraseña
        </div>
      </form>
    </Tab>
  )
}

export default LoginTab
