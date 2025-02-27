import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import { CounterProvider } from "./context/CounterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CounterProvider>
      <App />
    </CounterProvider>
  </Provider>
);
