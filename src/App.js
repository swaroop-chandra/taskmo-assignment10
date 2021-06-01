import "./App.css";
import MainContent from "./component/main-content";
import SideBar from "./component/sidebar";

function App() {
  return (
    <div className="App">
      <SideBar/>
      <MainContent/>
    </div>
  );
}

export default App;
