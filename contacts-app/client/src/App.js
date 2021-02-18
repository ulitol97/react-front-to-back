import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alerts from "./components/layout/Alerts";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";
import ContactState from "./context/contact/ContactState";

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <ContactState>
          <Router>
            <div className="App">
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/register" component={Register}></Route>
                  <Route exact path="/login" component={Login}></Route>
                  <Route exact path="/about" component={About}></Route>
                  <Route component={NotFound}></Route>
                </Switch>
              </div>
            </div>
          </Router>
        </ContactState>
      </AlertState>
    </AuthState>
  );
};

export default App;
