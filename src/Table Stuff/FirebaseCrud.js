import React from "react";
import StartFirebase from "../firebase";
import {ref, set, get, update, remove, child } from "firebase/database";

export class Crud extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            db:'',
            email:'',
            fullname: '',
            password :'',
            ID: ''
        }
        this.interface = this.interface.bind(this);
    }
    componentDidMount(){
        this.setState({
            db: StartFirebase()
        });
    }

render (){
  return (
    <> 
    <label>Enter Email</label>
    <input type = 'text' id="userbox" value = {this.state.email} 
    onChnge = {e => {this.setState({email: e.target.value});}}/>
    <br></br>

    <label>Enter Full Name</label>
    <input type = 'text' id="userbox" value = {this.state.fullname} 
    onChnge = {e => {this.setState({email: e.target.value});}}/>
    <br></br>

    <label>Enter Full Name</label>
    <input type = 'text' id="userbox" value = {this.state.fullname} 
    onChnge = {e => {this.setState({email: e.target.value});}}/>
    <br></br>

    <button id = "addBtn" onClick={this.interface}>Add Data</button>
    <button id = "UpdateBtn" onClick={this.interface}>Update Data</button>
    <button id = "deleteBtn" onClick={this.interface}>Delete Data</button>
    <button id = "SelectBtn" onClick={this.interface}>Get Data</button>

    </>
  )
  }
  interface(event){
    const id = event.target.id;

    if(id=='addBtn'){
        this.insertData();
    }
    else if(id=='updateBtn'){
        this.updateData();
    }
    else if(id=='deleteBtn'){
        this.deleteData();
    }
    else if(id=='selectBtn'){
        this.selectData();
    }
  }

  getAllInputs(){
    return{
        email: this.state.email,
        fullname: this.state.fullname 
  }
  }
  insertData() {
    const db = this.state.db;
    const data = this.getAllInputs();

    set (ref(db,'Customer/'+data.email),
    {   
        Email: data.email,
        fullname: data.fullname
    })
    .then(()=>{alert('data was added successfully')})
    .catch((error)=>{alert("there was an error, details"+error)});
  }

  updateData() {
    const db = this.state.db;
    const data = this.getAllInputs();

    update (ref(db,'Customer/'+data.email),
    {   
        Email: data.email,
        fullname: data.fullname
    })
    .then(()=>{alert('data was uploaded successfully')})
    .catch((error)=>{alert("there was an error, details"+error)});
  }

  deleteData() {
    const db = this.state.db;
    const email = this.getAllInputs().email;

     remove (ref(db,'Customer/'+data.email),
    )
    .then(()=>{alert('data was deleted successfully')})
    .catch((error)=>{alert("there was an error, details"+error)});
  }

  selectData() {
    const db = this.state.db;
    const email = this.getAllInputs().email;

    get(child(db, 'User/'+email)).then((snapshot)=>{
if (snapshot.exists()){
    this.setState({
        email: snapshot.val().email,
        fullname: snapshot.val().fullname
    })
}
else {
    alert("no data found")
}
    })

    .then(()=>{alert('data was added successfully')})
    .catch((error)=>{alert("there was an error, details"+error)});
  }

}

