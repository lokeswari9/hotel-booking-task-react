import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ViewDetails from './components/ViewDetails';
import ViewOnMap from './components/ViewOnMap';
import MyBookingPage from './components/MyBookingPage';

class App extends Component {
  render() {
    return (
        <div className="App">
        <BrowserRouter>
                    <div>
                        <div>
                          <i><h2  className="page-header">  Welcome to Hotel Booking System </h2></i>
                        </div>
                        <Switch>
                        <Route path="/" component={Login} exact/>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/homePage" component={HomePage}/>
                        <Route path="/viewDetails/:hotelNameParam/:addressParam" component={ViewDetails}/>
                        <Route path="/ViewOnMap" component={ViewOnMap}/>
                        <Route path="/bookingPage/:hotelNameParam/:addressParam" component={BookingPage}/>
                        <Route path="/myBookingPage" component={MyBookingPage}/>
                        </Switch>
                    </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
