
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; 
import { RealTimeGLData } from '../Table Stuff/RealTimeAccountData';
import ReactDOM from 'react-dom';
import {RealTimeGLTable} from './GLTable';


function ViewGLTable() {
    return(    
    <RealTimeGLTable/>
    );
}
export default ViewGLTable;