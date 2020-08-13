import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navmenu from './components/Nav'
import Projects from './pages/Project.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <Navmenu />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      </div>
    </Router>

  );
}

export default App;
