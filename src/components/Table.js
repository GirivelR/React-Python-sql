import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

function Table({data}) {
    const columns = [{
        dataField: 'id',
        text: 'ID'
      }, {
        dataField: 'first_name',
        text: 'First Name'
      }, {
        dataField: 'last_name',
        text: 'Last Name'
      }, {
        dataField: 'gender',
        text: 'Gender'
      }, {
        dataField: 'email',
        text: 'Email'
      }, {
        dataField: 'course',
        text: 'Course'
      }, {
        dataField: 'degree',
        text: 'Degree'
      }, {
        dataField: 'dob',
        text: 'Address'
      }];
    return (
        <div>
        <h5>Basic Table</h5>
        <BootstrapTable keyField='id' data={ data } columns={ columns } />
      </div>
    );
}

export default Table;