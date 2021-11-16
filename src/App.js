
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import AddService from './components/AddService/AddService';
import Booking from './components/Booking/Booking';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import Tours from './components/Tours/Tours';
import MyOrders from './components/MyOrders/MyOrders';
import AuthProvider from './context/AuthProvider';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';


function App() {
  return (
    <div className="">

      <AuthProvider>
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
          <Route exact path="/allServices">
            <Tours> </Tours>
          </Route>

          {/* -----------Booking route---------------- */}
          <PrivetRoute exact  path="/booking/:serviceId">
            <Booking> </Booking>
          </PrivetRoute>

            {/* -----------Booking route---------------- */}
            <PrivetRoute exact path="/myOrders">
              <MyOrders> </MyOrders>
            </PrivetRoute>
      

             {/* ----------manage orders-------------- */}
            <Route exact path="/manageOrders">
             <ManageAllOrders></ManageAllOrders>
            </Route>


          {/* -----------About route---------------- */}
          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>
          {/* -----------contact route---------------- */}
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

            {/* --------------Add Services---------------- */}
          <PrivetRoute exact path="/addServices">
            <AddService></AddService>
          </PrivetRoute>



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

      </AuthProvider>



    </div>
  );
}

export default App;

