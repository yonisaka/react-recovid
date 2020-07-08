import React from 'react';
import { Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import CovidAPI from '../services/CovidAPI';

const Province = () => {
    const [data, setData] = React.useState([]);

    const indo = new CovidAPI()
    indo.getDataProvinsi().then(result=>{
        setData(result.data.data)
    },fail =>{
        console.log(fail)
    }); 

    // constructor(props){
    //     super(props);
    //     this.state = {value: ''};

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleChange(event) {
    //     this.setState({value: event.target.value});
    // }
    
    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }
    
  return(
    <>
      <Container className="text-center mt-5">
          <h3 className="pb-2">Indonesian Province</h3>
          {/* <Col lg="4" className="mx-auto mb-2">
            <Form onSubmit={this.handleSubmit}>
                <Form.Control type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search Province"/>
                <Button type="submit">Search</Button>
            </Form>
          </Col> */}
        <Row>
            {
                data.map((item, i) => {
                    let provinsi = item['provinsi'];
                    let positif = item['kasusPosi'];
                    let sembuh = item['kasusSemb'];
                    let meninggal = item['kasusMeni'];
                    return(
                        <Col lg="4" sm="12" className="mb-1" key={i}>
                            <Card className="rounded border-0.1 shadow-sm px-1 py-4">
                                <h4>{provinsi}</h4>
                                <h6>Positif : {positif}</h6>
                                <h6>Sembuh : {sembuh}</h6>
                                <h6>Meninggal : {meninggal}</h6>
                            </Card>
                        </Col>
                    );
                })
            }
        </Row>
      </Container>
    </>
  );
}

export default Province;