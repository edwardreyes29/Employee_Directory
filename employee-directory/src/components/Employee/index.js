import React from 'react';

export const Employee = ({
  name,
  image="https://via.placeholder.com/72",
  phone, 
  email,
  DOB,
}) => {
  // console.log(typeof new Date(DOB))
  let dateConvert = new Date(DOB)
  let birthday = dateConvert.getMonth() + '/' + dateConvert.getDay() + '/' + dateConvert.getFullYear()
  return (
    <>
      <div className="col">
        <img className="img-fluid" src={image} />
      </div>
      <div className="col">
        {name}
      </div>
      <div className="col">
        {phone}
      </div>
      <div>
        <a href="#" className="m-2">{email}</a>
      </div>
      <div className="col text-center">
        {birthday}
      </div>
    </>
  )
}