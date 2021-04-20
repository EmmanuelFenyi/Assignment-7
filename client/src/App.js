import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterationPage from "./pages/RegisterationPage";
import StudentsDataPage from "./pages/StudentsDataPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/registration" component={RegisterationPage} />
          <Route path="/database" component={StudentsDataPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
