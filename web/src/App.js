import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./router/routes";
import "./sass/main.scss";
import store from "./store";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <div className="main">
        <div className="main__header">
          <Header />
        </div>
        <div className="main__body">
          <div className="main__body__content">
            <Routes />
          </div>
        </div>
        <div className="main__footer">
          <Footer />
        </div>
      </div>
    </div>
  </Provider>
);

export default App;
