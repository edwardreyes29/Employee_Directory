import React from "react";
import reactLogo from "../../assets/react-logo.png"

const styles = {
  logo: {
    width: "100px"
  }
}
const Header = () => {
  return (
    <header className="bg-primary border-bottom border-danger">
      <div className="jumbotron bg-primary text-light text-center m-0">
      <h1 className="display-4 font-weight-bold text-light">Employee Directory</h1>
      <p>Click on carrots to filter by heading or use the search box to narrow your results</p>
      <img src={reactLogo} style={styles.logo}/>
      </div>
    </header>
  )
}

export default Header;