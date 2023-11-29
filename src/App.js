import React, { useState } from "react";
import Header from "./Header";
import Login from "./pages/Login";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Admin from "./pages/AdminPage/admin";
import drivers from "./pages/AdminPage/driversPage/drivers";
import Vehicles from "./pages/AdminPage/VehiclesPage/vehicles";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auction from "./pages/AdminPage/VehiclesPage/AuctionPage/Auction";
import Maintenance from "./pages/AdminPage/MaintenancePage/Maintenance";
import Fueling from "./pages/AdminPage/FuelingPage/Fueling";
import driver from './pages/DriverPage/driver';
import Route_details from "./pages/DriverPage/Route_detail";

function App() {
  return (
    <Router>
      <div className="full-page">
        <Header />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/drivers" exact component={drivers} />
          <Route path="/vehicles" exact component={Vehicles} />
          <Route path="/auction" exact component={Auction} />
          <Route path="/maintenance" exact component={Maintenance} />
          <Route path="/fueling" exact component={Fueling} />
          <Route path='/driver' exact component={driver} />
          <Route path='/route-det' exact component={Route_details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
