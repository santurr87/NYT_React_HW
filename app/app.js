//react dependencies
var React = require("react");
var ReactDOM = require("react-dom");

//requiring main file in components folder
var Main = require("./components/Main");

//render main component
ReactDOM.render(<Main />, document.getElementById("app"));