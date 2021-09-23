import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AboutPage from './components/pages/AboutPage';
import ContactUs from './components/pages/ContactUs';
import Dummy from './components/pages/Dummy';
import Dummy2 from './components/pages/Dummy2';
import AuthUserComponent from './components/user/AuthUserComponent'
import RegisterUserComponent from './components/user/RegisterUserComponent';
import ListUserComponent from './components/user/ListUserComponent';
import ShowProfileComponent from './components/user/ShowProfileComponent'
function App() {
  return (
    <Router>
      <Navbar />
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/student' component={ListUserComponent} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-in' component={AuthUserComponent} />
        <Route path='/dummy' component={Dummy} />
        <Route path='/dummy2' component={Dummy2} />
        <Route path='/register-user' component={RegisterUserComponent}/>
        <Route path='/profile' component={ShowProfileComponent}/>
      </Switch>
    </Router>
    
  );
}

export default App;
