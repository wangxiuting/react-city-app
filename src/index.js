import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Route } from "react-router-dom";

//1引入tabbar组件、
import { TabBar } from "antd-mobile";

// 导入 antd-mobile 的样式文件
import "antd-mobile/dist/antd-mobile.css";

// 导入字体图标库的样式
import "./assets/fonts/iconfont.css";

// 导入全局样式
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
