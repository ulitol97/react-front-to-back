import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import React, { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import "./App.css";
import AddBtn from "./components/layout/AddBtn";
import SearchBar from "./components/layout/SearchBar";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import Logs from "./components/logs/Logs";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import store from "./store";

function App() {
  // Initializes materiale JS
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <Logs />
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
