import StartFirebase from '../firebase';
import React from 'react';
import { ref, onValue } from 'firebase/database';
import { Table } from 'react-bootstrap';

const db = StartFirebase();
let UniqueNumber = 0;

export class RealTimeGLTable extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: []
    };
  }

  componentDidMount() {
    const dbRef = ref(db, 'journalEntries');

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
            <th>GL Name</th>
            <th>GL Number</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Date</th>
            <th>User</th>
            <th>Comment</th>
            
          </tr>
        </thead>

        <tbody>
          {this.state.tableData.map((row, index) => {
            return (
              <tr key={UniqueNumber++}>
                <td>{row.data.name}</td>
                <td>{row.data.number}</td>
                <td>{row.data.credit}</td>
                <td>{row.data.debit}</td>
                <td>{row.data.date}</td>
                <td>{row.data.user}</td>
                <td>{row.data.comment}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
