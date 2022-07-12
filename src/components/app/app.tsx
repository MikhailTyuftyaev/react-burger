import { FC, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from 'react-router-dom';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { LoginPage, RegisterPage, ForgotPage, ResetPage, ProfilePage, IngredientsPage, NotFound404, FeedPage} from '../../pages';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../services/types';
import { getItemsRequest } from "../../services/actions/index";
import { getUserRequest } from "../../services/actions/auth";
import { getCookie } from '../../utils';
import { ProtectedRoute } from '../protected-route/protected-route';
import { closeModalAction, deleteCurrentItemAction } from '../../services/actions/modal';
import { TLocation } from '../../services/types';
import FeedDetails from '../feed-details/feed-detail';
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
              > {modalItem &&
                  <IngredientDetails
                    image={modalItem.image_large}
                    name={modalItem.name}
                    calories={modalItem.calories}
                    proteins={modalItem.proteins}
                    fat={modalItem.fat}
                    carbohydrates={modalItem.carbohydrates}
                  />
                }
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
                  <FeedDetails
                    number="123456"
                    date="Сегодня, 16:20 i-GMT+3"
                    name="Death Star Starship Main бургер"
                    status="Создан"
                    ingredients={[
                      {
                        "name": "Флюоресцентная булка R2-D3",
                        "__v": 1,
                        "price": 400,
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png"
                      },
                      {
                        "name": "Флюоресцентная булка R2-D3",
                        "__v": 1,
                        "price": 400,
                        "image_mobile": "https://code.s3.yandex.net/react/code/sauce-02-mobile.png"
                      },
                    ]}
                    price={400}
                  />
              </Modal>
            }
            />
          )
        }
        {background && (
          <Route
            path='/profile/orders/:id'
            children={
              <Modal
                onClose={onClose}
                isModal={true}
              >
                  <FeedDetails
                    number="123456"
                    date="Сегодня, 16:20 i-GMT+3"
                    name="Death Star Starship Main бургер"
                    status="Создан"
                    ingredients={[
                      {
                        "name": "Флюоресцентная булка R2-D3",
                        "__v": 1,
                        "price": 400,
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png"
                      },
                      {
                        "name": "Флюоресцентная булка R2-D3",
                        "__v": 1,
                        "price": 400,
                        "image_mobile": "https://code.s3.yandex.net/react/code/sauce-02-mobile.png"
                      },
                    ]}
                    price={400}
                  />
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