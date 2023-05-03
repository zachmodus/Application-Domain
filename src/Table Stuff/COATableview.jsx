
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; 
import { RealTimeAccountData } from './COATableview';
import ReactDOM from 'react-dom';
import AddAccountButton from '../AddAccount/AddAccountButton';


function ViewCOATable() {
    return(
        
    <RealTimeAccountData/>
    );
}
export default ViewCOATable;