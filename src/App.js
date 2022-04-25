import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    );
  }