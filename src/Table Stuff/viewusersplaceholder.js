import { render } from '@testing-library/react';
import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import { Table } from 'react-bootstrap';


function TableComponent(props) {
  const data = [
    { id: 1, name: 'Myles Joseph', email: 'Myles@gmail.com' },
    { id: 2, name: 'Logan Devine', email: 'Logan@Gmail.com' },
    { id: 3, name: 'Zachary Okwuosa', email: 'Zachary@gmail.com' }
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
