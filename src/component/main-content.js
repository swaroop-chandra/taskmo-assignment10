import MyForm from "./my-form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
export default function MainContent({ blur }) {
  return (
    <>
      <div className={`main-content ${blur ? "myBlur" : ""}`}>
        <Router>
          <Switch>
            <Route path="/main">
              <MyForm />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}
