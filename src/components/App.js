import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";
import Header from './Header';
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path="/" exact component={HomePage} />
            <Route path="/About" exact component={AboutMe} />
            <Route path="/Contact" exact component={Contact} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
