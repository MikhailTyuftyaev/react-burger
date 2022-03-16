import React, { useEffect } from "react";
import Main from "../main/main";
import Header from "../app-header/app-header";
import {useSelector, useDispatch  } from 'react-redux';
import { getItemsRequest } from "../../services/actions";

const App = () => {
  const dispatch = useDispatch();

  const ingredients = useSelector(state => state.ingredients);

  useEffect(()=> {
    dispatch(getItemsRequest());
}, [dispatch])

  console.log(ingredients);

  return (
    <>
      <Header />
      <Main data={ingredients.data} />
    </>
  );
};

export default App;
