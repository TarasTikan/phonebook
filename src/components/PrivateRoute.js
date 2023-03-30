import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggein, selectIsRefresh } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggein);
  const isRefresh = useSelector(selectIsRefresh);
  const shouldRedirect = !isRefresh && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
