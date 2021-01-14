import './App.css';
import { Switch, Route } from "react-router-dom";


import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";







const TestPage = () => (
  <h1>TEST this you dork</h1>
)


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/wasihun" component={TestPage} />
      </Switch>
    </div>
  );
}

export default App;
