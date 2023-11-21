// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from "./components/greeting";

function App() {
  return (<Greeting />);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
