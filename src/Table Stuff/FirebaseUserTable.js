import StartFirebase from '../firebase'
import React from 'react'
import {ref, onValue} from 'firebase/database'
import {Table} from 'react-bootstrap'

const db = StartFirebase();

export class RealTimeData extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef = ref(db,'users');

        onValue(dbRef,(snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key":keyName,"data":data});

            });
                this.setState({tableData:records});
            });
        }

    render(){
        return(
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Full Name</th>
                </tr>
            </thead>
            
            <tbody>
                {this.state.tableData.map((row,index)=>{
                    return(
                    <tr>
                        <td>{index}</td>
                        <td>{row.key}</td>
                        <td>{row.email}</td>
                        <td>{row.name}</td>
                    </tr>
                )}
                )}
            </tbody>
        </Table>
    )}
}