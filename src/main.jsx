import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { Container } from "react-bootstrap";
import "bootswatch/dist/simplex/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container>
      <Provider store={store}>
        <App />
      </Provider>
    </Container>
  </React.StrictMode>
);
