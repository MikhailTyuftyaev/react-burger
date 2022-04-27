import React, { useEffect } from "react";
import Main from "../main/main";
import Header from "../app-header/app-header";
import { useDispatch  } from 'react-redux';
import { getItemsRequest } from "../../services/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getItemsRequest());
}, [dispatch])

  return (
    <>
      <Main/>
    </>
  );
};

export default App;
