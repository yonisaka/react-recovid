import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
  return(
    <>
      <Container className="text-center mt-5">
        <h2>ReCovid-19</h2>
        <p>Data source from <a href="https://github.com/mathdroid/covid-19-api">mathdroid covid 19 </a>API</p>
      </Container>
    </>
  );
};

export default Header;