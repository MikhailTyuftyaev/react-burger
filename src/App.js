import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage, ForgotPage, ResetPage, ProfilePage, IngredientsPage} from './pages';
import AppHeader from './components/app-header/app-header';

export default function App() {
    return (

      <>
      <AppHeader/>
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
          <Route path="/reset-password" exact={true}>
            <ResetPage />
          </Route>
          <Route path="/profile" exact={true}>
            <ProfilePage />
          </Route>
          <Route path="/ingredients/:id" exact={true}>
            <IngredientsPage />
          </Route>
        </Switch>
      </Router>
      </>
    );
  }