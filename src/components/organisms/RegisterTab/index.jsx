import Tab from '../../atoms/Tab'
import TextField from '../../atoms/TextField'
import Button from '../../atoms/Button'

import classes from './styles.module.css'

const RegisterTab = () => (
  <Tab className={classes.container}>
    <form>
      <TextField isRequired id="name" label="nombre"/>
      <TextField id="lastName" label="apellido" placeholder="Pérez"/>
      <TextField id="email" label="email" placeholder="ejemplo@email.com" type="email"/>
      <TextField id="password" label="contrasña" placeholder="********" type="password"/>
      <Button fullWidth>Registro</Button>
    </form>
  </Tab>
)

export default RegisterTab
