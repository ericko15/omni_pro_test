import LogoImage from '../../atoms/LogoImage'
import PropTypes from 'prop-types'

const AuthLayout = ({children}) => (
  <>
    <LogoImage/>
    {children}
  </>
)

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthLayout
