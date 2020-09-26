import React from 'react';

export const RowTitle = () => {
  return (
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
  )
}