import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// 导入组件
import Home from "./pages/Home";
import Citylist from "./pages/Citylist";
// 导入路由
const App = () => {
  return (
    <Router>
      <div className="app">
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/citylist">城市选择</Link>
          </li>
        </ul>

        {/* 首页： */}
        {/* 外层路由，用来渲染整个 Home 页面 */}
        <Route path="/home" component={Home} />
        {/* 城市选择页面： */}
        <Route path="/citylist" component={Citylist} />
      </div>
    </Router>
  );
};
export default App;
