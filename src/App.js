import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, LoginPage } from './pages';

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
        </Switch>
      </Router>
    );
  }