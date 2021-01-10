import './App.css';
import { Switch, Route, Link} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";


const HatsPage = () => {
  return (
    <div>
      <Link to="/hats-page">HATS PAGE</Link>
      <h1>HATS PAGE </h1>
  </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route exact path="/hats-page" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
