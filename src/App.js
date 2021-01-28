import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/home.jsx";
import Regf from "./pages/regf.jsx";
import Header from "./components/header.js";
import About from "./pages/aboutus.jsx";
import Explore from "./pages/explore.jsx";
import Projects from "./pages/projects.jsx";
import Teams from "./pages/teams.jsx";
import Footer from "./components/footer.js";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/regf' component={Regf} />
        <Route path='/Aboutus' component={About} />
        <Route path='/Explore' component={Explore} />
        <Route path='/Projects' component={Projects} />
        <Route path='/Teams' component={Teams} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
