import { useLocation, Navigate } from 'react-router-dom'
import { useAuthStatus } from '../../Hooks/useAuthStatus'

const inPrivatePaths = ['/MyAccount', 'MyFavorites', 'NewPrivatePage']

const PrivateRoute = ({ children }) => {
  const location = useLocation()
  const { loggedIn } = useAuthStatus()
  const current = location.pathname

  const isPrivate = inPrivatePaths.includes(current)

  if(isPrivate && current !== '/Login' && !loggedIn ) {
    return <Navigate to='/Login' state={{ from: location }} />
  }
  // if(((current === '/MyAccount' || current === '/MyFavorites') && current !== '/Login') && !loggedIn ) {
  //   return <Navigate to='/Login' state={{ from: location }} />
  // }
  
  return children
}

export default PrivateRoute