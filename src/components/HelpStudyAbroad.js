import React from 'react'
import {Container , Row, Col} from 'react-bootstrap'
import freeCounseling from '../logos/FreeCounseling.png'
import flightTicket from '../logos/Flight Ticket Booking.png'
import visaApplycation from '../logos/Visa Application.png'
import admissionApplycation from '../logos/Admission Processing.png'
import universityAlignation from '../logos/UniversityAlignment.png'
import languageCoaching from '../logos/LanguageCoaching.png'
import preDeparture from '../logos/Pre-Departure.png'
export default function HelpStudyAbroad() {
  return (
    <>
    <div className='help-abroad'>
        <h4 className='here-is-how-head'>Here Is How</h4>
        <h2 className='help-you-study-head'>We Help You Study Abroad</h2>

        <Container>
            <Row className='justify-content-center'>
                <Col className='help-study-abroad-div' md={3}>
                    <img className='help-study-abroad-img' src={freeCounseling} alt=''/>
                    <h6 className='help-study-abroad-heading'>Free Counseling</h6>
                    <p className='help-study-abroad-para' > Make the best well informed choices through our counseling free of cost</p>
                </Col>
                <Col className='help-study-abroad-div' md={3}>
                <img className='help-study-abroad-img' src={flightTicket} alt=''/>
                    <h6 className='help-study-abroad-heading'>Flight Ticket Booking</h6>
                    <p className='help-study-abroad-para'>We ensure that you get the best travel plan through flight bookings </p>
                </Col>
                <Col className='help-study-abroad-div' md={3}>
                <img className='help-study-abroad-img' src={visaApplycation} alt=''/>
                    <h6 className='help-study-abroad-heading'>Visa Application</h6>
                    <p className='help-study-abroad-para'> Our experts take you through the preparation for your visa documentations</p>
                </Col>
                <Col className='help-study-abroad-div' md={3}>
                <img className='help-study-abroad-img' src={admissionApplycation} alt=''/>
                    <h6 className='help-study-abroad-heading'>Admission Processing </h6>
                    <p className='help-study-abroad-para'>We help you find the best Universities Abroad for your higher studies </p>
                </Col>
                <Col className='help-study-abroad-div' md={3}>
                <img className='help-study-abroad-img' src={universityAlignation} alt=''/>
                    <h6 className='help-study-abroad-heading'>University Alignment</h6>
                    <p className='help-study-abroad-para'> Aligning you with best University which meets academics your needs</p>
                </Col>
                <Col className='help-study-abroad-div' md={3}>
                <img className='help-study-abroad-img' src={languageCoaching} alt=''/>
                    <h6 className='help-study-abroad-heading'>Language Coaching</h6>
                    <p className='help-study-abroad-para'>IELTS, German and French Language Coaching for Your Next Destination </p>
                </Col>
                <Col className='help-study-abroad-div' md={3}>
                <img className='help-study-abroad-img' src={preDeparture} alt=''/>
                    <h6 className='help-study-abroad-heading'>Pre-Departure Orientation</h6>
                    <p className='help-study-abroad-para'> Get prepared to venture to your next global University</p>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}
