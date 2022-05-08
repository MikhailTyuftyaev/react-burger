import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from 'react-router-dom';
import Modal from './components/modal/modal';
import IngredientDetails from './components/ingredient-details/ingredient-details';
import { HomePage, LoginPage, RegisterPage, ForgotPage, ResetPage, ProfilePage, IngredientsPage, NotFound404} from './pages';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsRequest } from "./services/actions/index";
import { getUserRequest } from "./services/actions/auth";
import { CLOSE_MODAL,   DELETE_CURRENT_ITEM,
} from './services/actions/modal';
import AppHeader from './components/app-header/app-header';

export default function App() {

  const ModalSwitch = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    let background = location.state && location.state.background;
    const modalItem = useSelector((state) => state.modal.currentItem);

    function onClose() {
      dispatch({
        type: DELETE_CURRENT_ITEM
      });
      dispatch({
        type: CLOSE_MODAL,
        ingredientModal: false,
      });
      history.goBack();
    }

    useEffect(()=> {
      dispatch(getItemsRequest());
      dispatch(getUserRequest());
  }, [dispatch])

    return (
      <>
      <AppHeader/>
        <Switch location={background || location}>
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
          <Route>
            <NotFound404/>
          </Route>
        </Switch>

        {background && (
          <Route
            path='/ingredients/:id'
            children={
              <Modal
                header="Детали ингредиента"
                onClose={onClose}
                isModal={true}
              > 
                <IngredientDetails
                  image={modalItem.imageLarge}
                  name={modalItem.title}
                  calories={modalItem.calories}
                  proteins={modalItem.proteins}
                  fat={modalItem.fat}
                  carbohydrates={modalItem.carbohydrates}
                />
              </Modal>
            }
            />
          
        )}
      </>
    );
  };  
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}