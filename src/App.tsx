import React from 'react';
import './App.css';

import Home from './pages/home';
import Articles from './pages/articles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/articles" component={Articles} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />

          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
