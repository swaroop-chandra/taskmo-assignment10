import { useState } from "react";
import "./App.css";
import MainContent from "./component/main-content";
import QcCheckDone from "./component/qc-check-done";
import SideBar from "./component/sidebar";
import LoginContainer from "./login/loginContainer";

function App() {
  const [blur,setBlur]=useState(false);
  return (
    <LoginContainer/>
    // <div className="App">
    //   <QcCheckDone blur={blur} setBlur={setBlur}/>
    //   <SideBar blur={blur} setBlur={setBlur}/>
    //   <MainContent blur={blur}/>
    // </div>
  );
}

export default App;
