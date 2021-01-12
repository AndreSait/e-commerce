import './App.css';
import { Switch, Route, Link} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";







const HatsPage = props => {
  console.log(props)
  return (
    <div>
      <button onClick={() => props.history.push("/topics")}></button>
      <h1>HATS PAGE </h1>
  </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats-page" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
