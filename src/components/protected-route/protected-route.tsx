import { FC } from 'react'
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAppSelector } from '../../services/types';

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

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
