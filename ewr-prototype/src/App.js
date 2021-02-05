import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Partner from "./components/partners/partner";

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/">
          <Header />
          <Home />
          <Partner />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
