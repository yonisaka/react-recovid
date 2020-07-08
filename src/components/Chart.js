import React, { useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import {Line} from 'react-chartjs-2';
import CovidAPI from '../services/CovidAPI';

const Chart = () => {
    const [chartData, setChartData] = React.useState({});
    const chart = () => {
        let dataDate = [];
        let dataConf = [];

        const daily = new CovidAPI()
        daily.getDataDaily().then(result =>{
          for(const dataObj of result.data){
              dataDate.push(dataObj.reportDate)
              dataConf.push(parseInt(dataObj.totalConfirmed))
              setChartData({
                labels: dataDate,
                datasets: [{
                  label: 'Total Confirmed',
                  data: dataConf,
                  backgroundColor: [ 
                    'rgba(75, 192, 192, 0.6)'
                  ],
                  borderWidth: 4
                }]
              })
          }
        });
    }

    useEffect(() => {
        chart()
      }, [])
  return(
    <>
      <Container className="text-center mt-5">
        <Card className="rounded border-0.1 shadow-sm p-3">
            <Card-header>Covid-19 Chart</Card-header>
            <Line data={chartData}/>
        </Card>
      </Container>
    </>
  );
};

export default Chart;