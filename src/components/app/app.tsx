import { FC, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from 'react-router-dom';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { LoginPage, RegisterPage, ForgotPage, ResetPage, ProfilePage, IngredientsPage, NotFound404} from '../../pages';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../utils/types';
import { getItemsRequest } from "../../services/actions/index";
import { getUserRequest } from "../../services/actions/auth";
import { getCookie } from '../../utils';
import { ProtectedRoute } from '../protected-route/protected-route';
import { CLOSE_MODAL,   DELETE_CURRENT_ITEM,
} from '../../services/constants/modal';
import { TLocation } from '../../utils/types';
import AppHeader from '../app-header/app-header';
import Main from "../main/main";

const App: FC = () => {

  const ModalSwitch = () => {
    const location = useLocation<TLocation>();
    const dispatch = useDispatch();
    const history = useHistory();
    let background = location.state && location.state.background;
    const modalItem = useAppSelector((state) => state.modal.currentItem);

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
      const accessToken = getCookie("accessToken");
      if (accessToken){
        dispatch(getUserRequest());
      }
  }, [dispatch])

    return (
      <>
      <AppHeader/>
        <Switch location={background || location}>
          <Route path="/" exact={true}>
            <Main />
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
          <ProtectedRoute path="/profile" exact={true}>
            <ProfilePage />
          </ProtectedRoute>
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
export default App;