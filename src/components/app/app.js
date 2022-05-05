import React, { useEffect } from "react";
import Main from "../main/main";
import { useDispatch  } from 'react-redux';
import { getItemsRequest } from "../../services/actions";
import { getUserRequest } from "../../services/actions/auth";

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getItemsRequest());
    dispatch(getUserRequest());
}, [dispatch])

  return (
    <>
      <Main/>
    </>
  );
};

export default App;
