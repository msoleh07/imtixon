import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";
import { Provider } from "react-redux";
import reducer from "./store/store";
import { legacy_createStore as createStore } from "redux";

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <Suspense fallback={<h2>Loading...</h2>}>
      <Provider store={store}>
        <Router />
      </Provider>
    </Suspense>
  </div>
);
