import { FC } from 'react'
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector, RootState } from '../utils/types';
import { IisLoggedin } from '../utils/interfaces';

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const isLoggedIn: IisLoggedin = useSelector((state: RootState) => state.auth['isLoggedIn']);

  if (!isLoggedIn) {
    return (
      <Route
        {...rest}
        render={({ location }) => (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )}
      />
    );
  }

  return <Route {...rest} render={({ location }) => children} />;
}
