import Login from "./login";
import "./login.css";
export default function LoginContainer({setLoggedIn}) {
  return <div className="App"><Login setLoggedIn={setLoggedIn} /></div>
}
