import StartFirebase from '../firebase';
import React from 'react';
import { ref, onValue } from 'firebase/database';
import { Table } from 'react-bootstrap';
import {CrudPanel} from './CrudPanel';

const db = StartFirebase();
let UniqueNumber = 0;

export class RealTimeData extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: []
    };
  }

  componentDidMount() {
    const dbRef = ref(db, 'users');

    onValue(dbRef, (snapshot) => {
      let records = [];
      console.log(snapshot);
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ "key": keyName, "data": data });
      });
      this.setState({ tableData: records });
    });
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Email</th>
            <th>Full Name</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {this.state.tableData.map((row, index) => {
            return (
              <tr key={UniqueNumber++}>
                <td>{index}</td>
                <td>{row.key}</td>
                <td>{row.data.email}</td>
                <td>{row.data.name}</td>
                <td>{row.data.role}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}