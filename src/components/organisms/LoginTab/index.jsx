import Tab from '../../atoms/Tab'
import TextField from '../../atoms/TextField'

import classes from './styles.module.css'
import CheckboxSwitch from '../../atoms/CheckboxSwitch'
import Button from '../../atoms/Button'

const LoginTab = () => (
  <Tab title="Ingreso">
    <form className={classes.form}>
      <TextField type="email" id="email" label="EMAIL" placeholder="ejemplo@email.com" />
      <TextField type="password" id="password" label="CONTRASEÑA" placeholder="*******" />

      <div className={classes.subscribe}>
        <CheckboxSwitch id="subscribe" />
        <label htmlFor="subscribe">Suscribirse al Newsletter</label>
      </div>
      <div className={classes.buttonContainer}>
        <Button fullWidth className={classes.button}>Ingreso</Button>
      </div>
      <div className={classes.forgotPassword}>
        Olvide Contraseña
      </div>
    </form>
  </Tab>
)

export default LoginTab
