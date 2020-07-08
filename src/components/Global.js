import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CovidAPI from '../services/CovidAPI';

const Global = () => {
    const [confirmed, setConfirmed] = React.useState(String);
    const [recovered, setRecovered] = React.useState(String);
    const [death, setDeath] = React.useState(String);

    React.useEffect(() =>{
        const covid = new CovidAPI()
        covid.getDataGlobal().then(result => {
          setConfirmed(result.data.confirmed.value)
          setRecovered(result.data.recovered.value)
          setDeath(result.data.deaths.value)
          
        }, fail => {
          console.log(fail)
        })
      })
  return(
    <>
      <Container className="text-center mt-5">
          <h3 className="pb-2">Global Case</h3>
        <Row>
            <Col lg="4" sm="12" className="mb-1">
                <Card className="rounded border-0.1 shadow-sm px-1 py-4">
                    <h3 className="text-warning">{confirmed}</h3>
                    <h4>Confirmed</h4>
                </Card>
            </Col>
            <Col lg="4" sm="12" className="mb-1">
                <Card className="rounded border-0.1 shadow-sm px-1 py-4">
                    <h3 className="text-success">{recovered}</h3>
                    <h4>Recovered</h4>
                </Card>
            </Col>
            <Col lg="4" sm="12" className="mb-1">
                <Card className="rounded border-0.1 shadow-sm px-1 py-4">
                    <h3 className="text-danger">{death}</h3>
                    <h4>Deaths</h4>
                </Card>
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default Global;