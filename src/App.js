import { useState } from "react";
import "./App.css";
import MainContent from "./component/main-content";
import QcCheckDone from "./component/qc-check-done";
import SideBar from "./component/sidebar";
import LoginContainer from "./component/login/loginContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashboardContainer from "./component/dashboard/dashboardContainer";

function App() {
  const [blur, setBlur] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [acceptProject, setAcceptProject] = useState(false);
  const [leadId,setLeadId]=useState(31);
  return (
    <Router>
      <Switch>
        <Route path="/test">
          <div style={{pointerEvents:"none"}} onClick={()=>{
            console.log("test is cliced");
          }}>TEST</div>
        </Route>
        <Route exact path="/">
          <LoginContainer setLoggedIn={setLoggedIn} />
        </Route>
        {loggedIn ? (
          <>
            <Route path="/dashboard">
              <DashboardContainer
                setAcceptProject={setAcceptProject}
                acceptProject={acceptProject}
              />
            </Route>
            <Route path="/main">
              <div className="App">
                {blur?<QcCheckDone blur={blur} setBlur={setBlur} />:null}
                <SideBar />
                <MainContent blur={blur} setBlur={setBlur} leadId={leadId} />
              </div>
            </Route>
          </>
        ) : (
          <>
            <div>Please Login</div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
