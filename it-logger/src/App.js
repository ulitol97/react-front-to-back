import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import React, { useEffect } from "react";
import "./App.css";

function App() {
  // Initializes materiale JS
  useEffect(() => {
    M.AutoInit();
  }, []);

  return <div className="App">React app.</div>;
}

export default App;
