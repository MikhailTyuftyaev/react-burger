import { React, useEffect, useState } from "react";
import Main from "../main/main";
import Header from "../app-header/app-header";
import Modal from "../modal/modal";

const App = () => {
  const [state, setState] = useState([
    {
      data: [{ image_mobile: "" }],
    },
  ]);

  const url = "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setState([data]);
      } catch (e) {
        console.log("Произошла ошибка");
      }
    };
    getData();
  }, []);

  return (
    <>
      <Header />
      <Main data={state[0].data} />
      {state.visible && (
        <Modal header="hello">
          <p>I am Mike</p>
        </Modal>
      )}
    </>
  );
};

export default App;
