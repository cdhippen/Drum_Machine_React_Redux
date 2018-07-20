import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import DrumMachine from "./DrumMachine";
import "./styles.css";

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DrumMachine />
      </Provider>
    );
  }
}

const rootElement = document.getElementById("drum-machine");
render(<AppWrapper />, rootElement);
