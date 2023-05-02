import StartFirebase from '../firebase';
import React from 'react';
import { ref, onValue } from 'firebase/database';
import { Table } from 'react-bootstrap';
import {CrudPanel} from './CrudPanel';

const db = StartFirebase();
let UniqueNumber = 0;

export class COATable extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: []
    };
  }

  componentDidMount() {
    const dbRef = ref(db, 'accounts');

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
            <th>Account Name</th>
            <th>Account Number</th>
            <th>Account Description</th>
            <th>Normal Side</th>
            <th>Account Category</th>
            <th>Account Subcategory</th>
            <th>Initial Balance</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Current Balance</th>
            <th>Account Date Added</th>
            <th>User ID</th>
            <th>Order</th>
            <th>Statement</th>
            <th>Comment</th>
          </tr>
        </thead>

        <tbody>
          {this.state.tableData.map((row, index) => {
            return (
              <tr key={UniqueNumber++}>
                <td>{row.data.name}</td>
                <td>{row.data.number}</td>
                <td>{row.data.description}</td>
                <td>{row.data.normalSide}</td>
                <td>{row.data.category}</td>
                <td>{row.data.subcategory}</td>
                <td>{row.data.balance}</td>
                <td>{row.data.credit}</td>
                <td>{row.data.debit}</td>
                <td>{row.data.curBalance}</td>
                <td>{row.data.date}</td>
                <td>{row.data.user}</td>
                <td>{row.data.order}</td>
                <td>{row.data.statement}</td>
                <td>{row.data.comment}</td>
                <td><CrudPanel id = {row.key} record = {row.data}/></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
