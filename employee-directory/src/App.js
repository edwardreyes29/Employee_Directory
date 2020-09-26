import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Container from './components/Container';
import Input from './components/Input';
import EmployeeList from './components/EmployeeList'

function App() {
  return (
    <>
      <Header />
      <Container>
        <Input />
        <EmployeeList />
      </Container>
    </>
  );
}

export default App;
