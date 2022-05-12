import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProtectedRoute({ children, ...rest }) {
  const isRegistered = useSelector((state) => state.auth.isRegistered);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isLoggedOut = useSelector((state) => state.auth.isLoggedOut);

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
