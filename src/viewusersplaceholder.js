import { render } from '@testing-library/react';
import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import { Table } from 'react-bootstrap';


function TableComponent(props) {
  const data = [
    { id: 1, name: 'Mark Otto', email: 'mark@example.com' },
    { id: 2, name: 'Jacob Thornton', email: 'jacob@example.com' },
    { id: 3, name: 'Larry the Bird', email: 'larry@example.com' }
  ];
render ()
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableComponent;
