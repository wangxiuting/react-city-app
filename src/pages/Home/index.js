import React from "react";
import { Route } from "react-router-dom";

import Index from "../Index";
import HouseList from "../HouseList";
import News from "../News";
import Profile from "../Profile";
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>im home</h1>
        <Route path="/home/index" component={Index} />
        <Route path="/home/list" component={HouseList} />
        <Route path="/home/news" component={News} />
        <Route path="/home/profile" component={Profile} />
      </div>
    );
  }
}
