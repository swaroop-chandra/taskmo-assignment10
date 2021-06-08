import { useState } from "react";
import "./App.css";
import MainContent from "./component/main-content";
import QcCheckDone from "./component/qc-check-done";
import SideBar from "./component/sidebar";
import Dashboard from "./component/dashboard/dashboard";
import Login from "./component/login/login";
import Popup from "./component/popup/popup";

function App() {
  const [blur, setBlur] = useState(false);
  return (
    <div className="App">
      {/* <QcCheckDone blur={blur} setBlur={setBlur} /> */}
      <div className="app_col1">
        <SideBar blur={blur} setBlur={setBlur} />
      </div>
      <div className="app_col2">
        <Dashboard />
        {/* <Popup /> */}
      </div>

      {/* <MainContent blur={blur} /> */}
      {/* <Login />  */}
      {/* comment above 2 for login*/}
    </div>
  );
}

export default App;
