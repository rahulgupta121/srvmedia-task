import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
export default function StudyAbroad() {
  return (
    <>
        <div className='studyAbroadMain'>
        <Container>
            <h2 className='studyAbroadHeading'>WHY PU Study Abroad Center</h2>
        
            <Row className='row-main-div'>
                <Col className='card-col-1'>
                    <Row className='card-1'>
                        <h5>100% Alignment with Leading Universities</h5>
                    </Row>
                </Col>

                <Col className='card-col-2'>
                    <Row className='card-2'>
                       <h5>98% Language Coaching Success Rate</h5> 
                    </Row>
                </Col>

                <Col className='card-col-3'>
                    <Row className='card-3 '>
                    <h5>Effective Career Guidance & Grooming</h5>
                    </Row>
                    </Col>
                <Col className='card-col-4'>
                    <Row className='card-4'>
                    <h5> Highly Strategic Global Partnerships</h5>
                    </Row>
                    </Col>
            </Row>
        </Container>
        </div>
    </>
  )
}
