import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Blog from './components/pages/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HeroSection} />
          <Route path='/about' component={AboutSection} />
          <Route path='/resources' component={Cards} />
          <Route path='/contact' component={Contact} />
          <Route path='/blog' component={Blog} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
