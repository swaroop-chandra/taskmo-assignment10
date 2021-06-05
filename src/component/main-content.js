import MyForm from "./my-form";
import Dashboard from "./dashboard/dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function MainContent({ blur }) {
  return (
    <>
      <div className={`main-content ${blur ? "myBlur" : null}`}>
        <Router>
          <Switch>
            <Route path="/qc">
              <MyForm />
            </Route>
            <Route path="/dash" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </>
  );
}
