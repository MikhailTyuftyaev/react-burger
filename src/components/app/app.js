import React from "react";
import Main from "../main/main";
import Header from "../app-header/app-header";
import { Scrollbars } from "react-custom-scrollbars";

class App extends React.Component {
  render() {
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
        <Main />
      </Scrollbars>
    );
  }
}

export default App;
