import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Navbarmenu from "./components/Navbarmenu";
import Footermenu from "./components/Footermenu";
import Homepage from "./components/Homepage";
import Resturents from "./components/Resturents";
import Foodtrucks from "./components/Foodtrucks";
import SushiCentro from "./components/SushiCentro";
import Signinpage from "./components/usersetting/Signinpage";
import Adminfoodtrucks from "./components/Admaddfoodtruck";
import Adminfoodtrucklist from "./components/Adminfoodtrucks";
import Usersetting from "./components/usersetting/Settingpage";
import Changepass from "./components/usersetting/Changepassword";



export default class App extends Component {
  render() {
    return (
      <div>
        <Navbarmenu/>   
          <Changepass/>
        <Footermenu/>
      </div>
    )
  }
}
