import { React, useEffect, useState } from "react";
import Main from "../main/main";
import Header from "../app-header/app-header";

const App = () => {
  const [state, setState] = useState({
    data: [{ image_mobile: "" }],
  });

  const url = "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setState(data);
      } catch (e) {
        console.log("Произошла ошибка при загрузке данных");
      }
    };
    getData();
  }, []);

  return (
    <>
      <Header />
      <Main data={state.data} />
    </>
  );
};

export default App;
