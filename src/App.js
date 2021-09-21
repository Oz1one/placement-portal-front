import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Years from './components/pages/Years';
import AboutPage from './components/pages/AboutPage';
import ContactUs from './components/pages/ContactUs';
import Dummy from './components/pages/Dummy';
import Dummy2 from './components/pages/Dummy2';
import AddUserComponent from './components/user/AddUserComponent'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/year' component={Years} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={AddUserComponent} />
        <Route path='/dummy' component={Dummy} />
        <Route path='/dummy2' component={Dummy2} />
      </Switch>
    </Router>
  );
}

export default App;
