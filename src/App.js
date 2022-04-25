import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage, ForgotPage } from './pages';

export default function App() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/register" exact={true}>
            <RegisterPage />
          </Route>
          <Route path="/forgot-password" exact={true}>
            <ForgotPage />
          </Route>
        </Switch>
      </Router>
    );
  }