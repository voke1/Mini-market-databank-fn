import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import FrontPage from './component/homePage';
import AddMarket from "./component/addMarket";
import MarketList from "./component/marketListing";
import MarketDetails from "./component/market";
import Error from './component/error';
import LoginPage from "./component/login";
import RegisterPage from "./component/signup";
import Profile from "./component/profile";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={FrontPage}></Route>
        <Route exact path="/addmarket" component={AddMarket}></Route>
        <Route exact path="/marketlist" component={MarketList}></Route>
        <Route exact path="/marketdetails" component={MarketDetails}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/register" component={RegisterPage}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route component={Error}></Route>
      </Switch>
    </div>
  );
}

export default App;
