import { useState } from "react";
import "./App.css";
import MainContent from "./component/main-content";
import QcCheckDone from "./component/qc-check-done";
import SideBar from "./component/sidebar";
import LoginContainer from "./login/loginContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [blur, setBlur] = useState(false);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginContainer />
        </Route>
        <Route path="/main">
          <div className="App">
            <QcCheckDone blur={blur} setBlur={setBlur} />
            <SideBar blur={blur} setBlur={setBlur} />
            <MainContent blur={blur} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
