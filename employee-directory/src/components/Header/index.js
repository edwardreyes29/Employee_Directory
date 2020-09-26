import React from "react";

const Header = () => {
  return (
    <header className="bg-primary border-bottom border-danger">
      <div className="jumbotron bg-primary text-light text-center m-0">
      <h1 className="display-4 font-weight-bold text-light">Employee Directory</h1>
      <p>Click on carrots to filter by heading or use the search box to narrow your results</p>
      </div>
    </header>
  )
}

export default Header;