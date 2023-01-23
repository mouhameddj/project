import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
// To use routing functionalities




var divStyle = {
margin: '8% 8%',
};

class StudentList extends Component {

constructor(props) {
super(props);

this.state = {
employees: []
}

}

componentDidMount = () => {
this.getEmployeeList();
}

// To get all the employees
getEmployeeList() {
axios.get('http://127.0.0.1:3001/api/tache')
.then((response) => {
console.log(response.data);
this.setState({
employees: response.data
});
})
.catch((error) => {
console.log(error);
})
}

// To delete any employee


render() {
const { employees } = this.state;
return (
<div style={divStyle}>
<Table responsive>
<thead>
<tr>
<th>#</th>
<th>First Name</th>
<th>Last Name</th>
<th>Email</th>
<th>Phone</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
{
employees && employees.map((employee, i) => {
return (
<tr >
<td>{i}</td>
<td>{employee.titre}</td>
<td>{employee.code}</td>
<td>{employee.email}</td>
<td>{employee.phone}</td>

</tr>
)
})
}
</tbody>
</Table>
</div>
);
} 
}

export default StudentList;
