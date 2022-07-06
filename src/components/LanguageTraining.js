import React from 'react'
import languageTraining from '../logos/languageTraining.png'
import { Container, Row, Col } from 'react-bootstrap'
import {BsFillCaretRightFill} from 'react-icons/bs'
// import { FaBeer } from 'react-icons/fa';
export default function LanguageTraining() {
  return (
    <>
    <div className='languageTraining-main-div'>
        <img className='languageTrainin-background' src={languageTraining} alt=''/>
        <Container>
            <Row className='languageTraining-row'>
                <Col md={5}>
                    <h4 className='languageTraining-heading'>Providing The Right Language Training For 
                        Future Education</h4>
                    <p>The Parul University Study Abroad Center provides students with leading opportunities to pursue their studies abroad under the guidance of leading experts. The University’s ties with strategic Universities worldwide across Europe, Australia, USA, Canada, amongst others. We provide the best assistance in language coaching, admissions, and visa
                         processing which allows you to reach your academic dreams.</p>
                </Col>
                <Col md={5}>
                    <h4 className='languageTraining-list-head'>Why Learn Languages with PU</h4>
                    <ul className='list-unstyled'>
                        <li className='language-tranning-list'> 
                        <BsFillCaretRightFill className="left-arrow"/>Free mock tests
                        </li>
                        <li className='language-tranning-list'>
                        <BsFillCaretRightFill className="left-arrow"/>Free 1 week demo class
                        </li>
                        <li className='language-tranning-list'>
                        <BsFillCaretRightFill className="left-arrow"/>500+ student enrollment
                        </li>
                        <li className='language-tranning-list'>
                        <BsFillCaretRightFill className="left-arrow"/>Trainers with 10+ years of IELTS teaching experience
                            </li>
                            <li className='language-tranning-list'>
                            <BsFillCaretRightFill className="left-arrow"/> Options for online and offline classes
                            </li>
                            <li className='language-tranning-list'>
                            <BsFillCaretRightFill className="left-arrow"/> Exam oriented coaching
                            </li>
                            <li className='language-tranning-list'>
                            <BsFillCaretRightFill className="left-arrow"/>Special weekend batches
                            </li>
                            <li className='language-tranning-list'>
                            <BsFillCaretRightFill className="left-arrow"/>Skill focused Learning
                            </li>
                            <li className='language-tranning-list'><BsFillCaretRightFill className="left-arrow"/>Long term membership with a one-time fee payment</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}
