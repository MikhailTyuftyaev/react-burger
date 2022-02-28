import { React, useEffect, useState } from "react";
import Main from "../main/main";
import Header from "../app-header/app-header";
import Modal from "../modal/modal";
import { Scrollbars } from "react-custom-scrollbars";

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
    <Scrollbars
      style={{ height: "100vh" }}
      renderTrackVertical={(props) => (
        <div
          {...props}
          style={{
            position: "absolute",
            width: "8px",
            height: "100vh",
            backgroundColor: "#2f2f37",
            right: "0",
          }}
        />
      )}
      renderThumbVertical={(props) => (
        <div
          {...props}
          style={{
            width: "8px",
            backgroundColor: "#8585ad",
            cursor: "pointer",
          }}
        />
      )}
    >
      <Header />
      <Main data={state[0].data} />
      {state.visible && (
        <Modal header="hello">
          <p>I am Mike</p>
        </Modal>
      )}
    </Scrollbars>
  );
};

export default App;
