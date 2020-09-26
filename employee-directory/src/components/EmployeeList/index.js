import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from '../Loading'
class EmployeeList extends Component {

  state = {
    data: [],
    loading: false
  }

  componentDidMount() {

    this.setState({ loading: true }); // Set loading to true

    fetch('https://randomuser.me/api/?results=200&nat=us') // fetch the data
      .then(data => data.json()) // change data to json format
      .then(data => this.setState({ data, loading: false }))
  }

  render() {
    return (
      <>
        <div className="row border-top border-bottom d-flex justify-content-around align-content-center text-center">
          <div className="col">
            <p className="font-weight-bold m-2">Image</p>
          </div>
          <div className="col">
            <p className="font-weight-bold m-2">Name</p>
          </div>
          <div className="col">
            <p className="font-weight-bold m-2">Phone</p>
          </div>
          <div className="col">
            <p className="font-weight-bold m-2">Email</p>
          </div>
          <div className="col">
            <p className="font-weight-bold m-2">DOB</p>
          </div>
        </div>
        <Loading />
      </>
    )
  }
}

export default EmployeeList;