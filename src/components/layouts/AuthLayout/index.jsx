import LogoImage from '../../atoms/LogoImage'
import PropTypes from 'prop-types'
import Menu from '../../organisms/Menu'

import classes from './styles.module.css'

const menu = [
  {
    title: 'Inicio',
    id: 'home'
  },
  {
    title: 'Servicios',
    id: 'services'
  },
  {
    title: 'Nuestro Equipo',
    id: 'team'
  },
  {
    title: 'Portafolio',
    id: 'briefcase'
  },
  {
    title: 'Contácto',
    id: 'contact'
  },
  {
    title: 'Términos y condiciones',
    id: 'terms'
  }
]

const AuthLayout = ({children}) => (
  <div className={classes.body}>
    <div className={classes.container}>
      <LogoImage/>
      <Menu menu={menu} active="services"/>
      {children}
    </div>
  </div>
)

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthLayout
