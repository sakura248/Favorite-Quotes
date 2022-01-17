import { useLocation, Navigate } from 'react-router-dom'
import { useAuthStatus } from '../../Hooks/useAuthStatus'

const PrivateRoute = ({ children }) => {
  const location = useLocation()
  const { loggedIn } = useAuthStatus()

  if(!loggedIn) {
    return <Navigate to='/Login' state={{ from: location }} />
  }
  
  return children
}

export default PrivateRoute
