import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Home} from "./Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path = "/uuuu" element ={<Register/>}/>
          <Route  path = "/uppy" element ={<Home/>}/>

        </Routes>
      </Router>


      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;

export default App;
