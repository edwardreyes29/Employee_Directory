import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Container from './components/Container';
import EmployeeList from './components/EmployeeList'

function App() {
  return (
    <>
      <Header />
      <Container>
        <EmployeeList />
      </Container>
    </>
  );
}

export default App;
