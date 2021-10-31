import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddServices from './components/AddServices/AddServices';
import Booking from './components/Booking/Booking';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div >
      <AuthProvider>
      <Router>
       <Header></Header>
         <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <PrivateRoute path="/booking/:serviceId">
         <Booking></Booking>
          </PrivateRoute>
          <Route exact path="/home">
           <Home></Home>
          </Route>   
          <Route exact path="/services">
         <Services></Services>
          </Route>
          <PrivateRoute exact path="/contact">
         <Contact></Contact>
          </PrivateRoute>
          <Route exact path="/addservices">
         <AddServices></AddServices>
          </Route>
          <Route exact path="/manageAllOrders">
         <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route exact path="/myOrders">
         <MyOrders></MyOrders>
          </Route>
          <Route exact path="/login">
          <Login></Login>
          </Route> 
          <Route path="*">  
          <Error></Error>       
          </Route>
         </Switch>
         <Footer></Footer>
       </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
