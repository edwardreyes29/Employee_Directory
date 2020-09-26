import React from 'react';

const Input = props => {
  return (
    <div className="input-group mb-3 mt-3 w-25 mx-auto">
      <input 
        type="text" 
        className="form-control" 
        placeholder="Search" 
        aria-label="Search"
        onChange={props.handleInputChange}
        value={props.value}
      />
    </div>
    
  )
}

export default Input;