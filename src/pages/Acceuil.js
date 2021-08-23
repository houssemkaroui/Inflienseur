import React,{useEffect,useContext} from 'react';
import { Col, Row } from 'react-bootstrap';
import { Line,Radar } from 'react-chartjs-2';
import Carousel from 'react-bootstrap/Carousel'
import {AppContext} from "../components/contextapi"


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

function Home() {
  const [message, setMessage] = React.useContext(AppContext);
useEffect(() =>{
  setMessage(true)
})
  return (
    <div className='home'>
      <Row>
      <img   style={{height:400}}
                    className="d-block w-100"
                    src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
                    alt="First slide"
                />
      {/* <Carousel >
            <Carousel.Item style={{ height: 400,position:'inherit' }} >
                <img
                    className="d-block w-100"
                    src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: 400,position:'inherit' }} >
                <img
                    className="d-block w-100"
                    src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: 400,position:'inherit' }} >
                <img
                    className="d-block w-100"
                    src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel> */}
        </Row>
      <Row>
        <Col>
        <div >
        <h2>Chart 1</h2>
        <Line data={data} />
      </div>    


        </Col>
        <Col>
        <h2>Chart 2</h2>
        <Radar data={data} />
        </Col>
     
      </Row>
     
    </div>
  );
}

export default Home;
