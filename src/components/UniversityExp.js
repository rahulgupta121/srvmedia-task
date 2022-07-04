import React from 'react'
// import uniExpBackground from '../logos/universityExp.png'
import data from '../data'
import { Container, Col, Row } from 'react-bootstrap'
export default function UniversityExp() {
    console.log(data)
  return (
    <>

    <div className='uniExpBackground-main-div'>
    {/* <img className='uniExpBackground' src={uniExpBackground} alt='backgroundImg' /> */}
    <div className='uniExpHeading-div'> <h3 className='uniExpHeading text-center'>Choose The Parul University Experience!</h3> 
    
    <Container className='uniExpMainDiv'>
      <Row className='list-unstyled list-main-div'> 
        {data && data.map((index, key) =>{
            return (
                <>
                <Col className='sub-list' md={2} lg={2}>
                <h3 className='main-data-no'>{index.data_no}</h3>
                  <h6 className='main-data-para'>{index.name}</h6>
                </Col>
                </>
            )
        })}
    </Row>

    {/* <Row className='test-list-row'>
    <Col>
    </Col>

     <Col>
     </Col>

     <Col>
     </Col>

     <Col>
     </Col>
     
    </Row> */}
    </Container>
    
    </div>
    </div>
    </>
  )
}
