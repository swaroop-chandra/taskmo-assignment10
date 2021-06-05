import { useState } from "react";
import "./App.css";
import MainContent from "./component/main-content";
import QcCheckDone from "./component/qc-check-done";
import SideBar from "./component/sidebar";
import Dashboard from "./component/dashboard/dashboard";

function App() {
  const [blur, setBlur] = useState(false);
  return (
    <div className="App">
      {/* <QcCheckDone blur={blur} setBlur={setBlur} /> */}
      <SideBar blur={blur} setBlur={setBlur} />
      <MainContent blur={blur} />
    </div>
  );
}

export default App;
