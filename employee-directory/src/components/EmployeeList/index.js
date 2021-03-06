import React, { Component } from 'react';
import API from '../../utils/API';
import PropTypes from 'prop-types';
import Input from '../Input';
import { RowTitle } from '../RowTitle';
import { Loading } from '../Loading';
import { Employee } from '../Employee';

const styles = {
  evenColor: {
    background: "#FFFFFF"
  },
  oddColor: {
    background: "#E4E4E4"
  }
}

class EmployeeList extends Component {

  state = {
    search: "",
    data: [],
    loading: false
  }

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    this.setState({ loading: true });
    API.getEmployeeLists()
      .then(res => this.setState({ data: res.data.results, loading: false}))
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
    this.setState({search: value});
    console.log(value)
    console.log(this.state.search)
  }

  render() {
    return (
      <>
        <Input 
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          employeeList={this.state.data}
        />
        <RowTitle />
        {this.state.loading 
          ? <Loading/> 
          : <>
            {this.state.data.map((employee, i) => {

              // Set background color 
              let style;
              if (i % 2 === 0) {
                style = styles.evenColor;
              } else {
                style = styles.oddColor;
              }

              // Convert birthday to proper format
              let dateConvert = new Date(employee.dob.date)
              let month = dateConvert.getMonth();
              if (parseInt(month) === 0) {
                month = 12
              }
              let day = dateConvert.getDay();
              if (parseInt(day) === 0) {
                day = 1;
              }
              let DOB = month + '/' + day + '/' + dateConvert.getFullYear()

              // Check if search state contains any input data
              if (this.state.search.length) {
                // Check if the current employee name contains the employee name in input
                const name = `${employee.name.first} ${employee.name.last}`.toLowerCase();
                
                // If it does, then render the employee to the list
                if (name.includes(this.state.search.toLowerCase()) || // Search by name
                  employee.phone.includes(this.state.search) || // Search by phone
                  employee.email.toLowerCase().includes(this.state.search) || // Search by email
                  DOB.includes(this.state.search) // Search by dob
                ) {
                  return (
                    <div 
                      className="row border-top border-bottom d-flex justify-content-around align-items-center text-center"
                      key={i}
                      style={style}
                    >
                      <Employee 
                        name={`${employee.name.first} ${employee.name.last}`}
                        image={employee.picture.medium}
                        phone={employee.phone}
                        email={employee.email}
                        DOB={DOB}
                      />
                    </div>
                  )
                }
              } else { // 
                return (
                  <div 
                    className="row border-top border-bottom d-flex justify-content-around align-items-center text-center"
                    key={i}
                    style={style}
                  >
                    <Employee 
                      name={`${employee.name.first} ${employee.name.last}`}
                      image={employee.picture.medium}
                      phone={employee.phone}
                      email={employee.email}
                      DOB={DOB}
                    />
                  </div>
                )
              }
            })}
          </>
        }
      </>
    )
  }
}

Employee.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  DOB: PropTypes.string,
}

export default EmployeeList;