import { FC, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from 'react-router-dom';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { LoginPage, RegisterPage, ForgotPage, ResetPage, ProfilePage, IngredientsPage, NotFound404, FeedPage, FeedInfoPage} from '../../pages';
import { useAppSelector } from '../../services/types';
import { getItemsRequest } from "../../services/actions/index";
import { getUserRequest } from "../../services/actions/auth";
import { getCookie } from '../../utils';
import { ProtectedRoute } from '../protected-route/protected-route';
import { closeModalAction, deleteCurrentItemAction } from '../../services/actions/modal';
import { TLocation, useDispatch } from '../../services/types';
import FeedDetails from '../feed-details/feed-detail';
import AppHeader from '../app-header/app-header';
import Main from "../main/main";

const App: FC = () => {
  const ModalSwitch = () => {
    const location = useLocation<TLocation>();
    const dispatch = useDispatch();
    const history = useHistory();
    let background = location.state && location.state.background;
    const feed = useAppSelector((state) => state.feed.modal);

    function onClose() {
      dispatch(deleteCurrentItemAction());
      dispatch(closeModalAction(false, false));
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
          <ProtectedRoute path="/profile">
            <ProfilePage />
          </ProtectedRoute>
          <Route path="/feed" exact={true}>
            <FeedPage />
          </Route>
          <Route path="/feed/:id" exact={true}>
            <FeedInfoPage />
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
                <IngredientDetails/>
              </Modal>
            }
            />
        )}
        {background && (
          <Route
            path='/feed/:id'
            children={
              <Modal
                onClose={onClose}
                isModal={true}
              >
                  <FeedDetails/>
              </Modal>
            }
            />
          )
        }
        {background && (
          <ProtectedRoute
            path='/profile/orders/:id'
            children={
              <Modal
                onClose={onClose}
                isModal={true}
              >
                  <FeedDetails/>
              </Modal>
            }
            />
          )
        }
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