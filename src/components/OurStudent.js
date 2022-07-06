import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import candidate from '../logos/candidate-1.png'
export default function OurStudent() {
  return (
    <>
    <div className='our-student-main-div'>
        <div className='our-student-div'>
            <h3 className='text-center our-student-heading'>Our Students Who Made It Abroad</h3>
        </div>

        <Container>
            <Row className='justify-content-center'>
                {/* <Col className='our-student-card-col'>
                <Row className='ourStudentCard'>
                        <h5>Hobotiana Elvinah Randrianaivo & Lucian Ratsimamitaka</h5>
                        <h6>University of Paris Saclay, France</h6>
                    </Row>
                 </Col>
                <Col className='our-student-card-col'>
                <Row className='card-1-1'> 
                <img src={candidate} alt='' />
                    </Row>
                 </Col>
                <Col> 
                <Row className='ourStudentCard'>
                        <h5>AKSHAR PATEL</h5>
                        <h6>Fachhochschule des Mittelstands (FHM) Germany</h6>
                </Row>
                    </Col>
                <Col className='our-student-card-col'> 
                <Row className='card-1-1'> 
                <img src={candidate} alt='' />
                </Row>
                </Col>

                <Col className='our-student-card-col'>
                <Row className='card-1-1'> 
                <img src={candidate} alt='' />
                    </Row>
                </Col>

                <Col className='our-student-card-col'> 
                <Row className='ourStudentCard'>
                     <h5>SIMRAN KRISHNANI</h5>
                        <h6>Conestoge University Canada</h6>
                </Row>
                </Col>

                <Col className='our-student-card-col'> 
                <Row className='card-1-1'>
                <img src={candidate} alt='' />
                </Row>
                </Col>
                <Col className='our-student-card-col'>
                <Row className='ourStudentCard'>
                        <h5>Preyansh Shah</h5>
                        <h6>Heriot Watt University United Kingdom</h6>
                    </Row>
                 </Col> */}
                

<Card className='custom-card'>  
<h5>Hobotiana Elvinah Randrianaivo & Lucian Ratsimamitaka</h5>
<h6>University of Paris Saclay, France</h6>
 
</Card>

<Card className='custom-card-img'>
  <Card.Img className='card-img' variant="top" src={candidate} />
</Card>

<Card className='custom-card'>  
  <h5>AKSHAR PATEL</h5>
    <h6>Fachhochschule des Mittelstands (FHM) Germany</h6>
</Card>
<Card className='custom-card-img'>
  <Card.Img className='card-img' variant="top" src={candidate} />
</Card>
{/* row 2nd */}
<Row className='justify-content-center'>


<Card className='custom-card-img'>
  <Card.Img className='card-img' variant="top" src={candidate} />
</Card>

<Card className='custom-card'>
<h5>SIMRAN KRISHNANI</h5>
<h6>Conestoge University Canada</h6>
</Card>

<Card className='custom-card-img'>
  <Card.Img className='card-img' variant="top" src={candidate} />
</Card>
<Card className='custom-card'>
<h5>Preyansh Shah</h5>
<h6>Heriot Watt University United Kingdom</h6>
</Card>
</Row>
                
            </Row>
        </Container>
    </div>
    </>
  )
}
