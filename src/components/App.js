import React from 'react';
// import {  Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Global from './Global';
import Indo from './Indo';
import Province from './Province';
import Chart from './Chart';
import './App.css';

const App = () => {
  return(
    <>
      <Header/>
      <Global/>
      <Indo/>
      <Province/>
      <Chart/>
      <br/>
    </>
  );
};

export default App;
