
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import AddNewServices from './components/AddNewServices/AddNewServices';
import AddService from './components/AddService/AddService';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import Tours from './components/Tours/Tours';


function App() {
  return (
    <div className="">


      <Router>
        {/* -----------Header route---------------- */}
        <Header>
        </Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* -----------Home route---------------- */}
          <Route exact path="/home">
            <Home></Home>
          </Route>
          {/* -----------tours route---------------- */}
          <Route exact path="/tours">
            <Tours> </Tours>
          </Route>

          {/* -----------About route---------------- */}
          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>
          {/* -----------contact route---------------- */}
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="/addServices"> 
            <AddService></AddService>
          </Route>
          {/* -----------Login route---------------- */}
          <Route exact path="/login">
            <LogIn></LogIn>
          </Route>
          {/* -----------Unknown or error  route---------------- */}
          <Route path="*">
            <NotFound> </NotFound>
          </Route>

        </Switch>
        {/* -----------Route route---------------- */}
        <Footer></Footer>
      </Router>





    </div>
  );
}

export default App;

