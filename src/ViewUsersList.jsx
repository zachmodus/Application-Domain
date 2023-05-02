import React from 'react';
import HomeButton from "./Homebutton";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {RealTimeData} from './Table Stuff/FirebaseUserTable';

function ViewUserList() {
  return (
    <div>
      <RealTimeData/>
      <h1>Hello, world!</h1>
      <HomeButton/>
    </div>
  );
}

export default ViewUserList;
