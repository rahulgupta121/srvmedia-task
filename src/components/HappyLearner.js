import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import InvertedCommas from '../logos/InvertedCommas.png'
export default function HappyLearner() {
  return (
    <>
    <div className='HappyLearner-main-div'>
        <h3 className='HappyLearner-heading'>Our Happy Learners</h3>
        <Container>
            <Row>
                <Col className='HappyLearner-col-1'>
                <div className='HappyLearner-div-1'>
                    <img  className='invertedCommas' src={InvertedCommas}/>
                    <p className='HappyLearner-para'>I am more than grateful for the help and assistance which I received from the International Relations Cell- study abroad desk. I always wanted to know how to make the best choice in terms of my future studies and the study abroad team helped to understand the best prospective Universities I could go to and I am
                         glad to have been able to find Conestoga Canada.</p>
                <h6 className='auther-name'>
                Simran Krishnani <br></br> Conestoge, Canada 
                    </h6>
                    </div>
                </Col>

                <Col className='HappyLearner-col-2'>
                <div className='HappyLearner-div-2'>
                    <img className='invertedCommas' src={InvertedCommas}/>
                    <p className='HappyLearner-para'>One of my major concerns was regarding my ability to be proficient in the English language as well as understanding the processes which were required for me to study abroad. I am grateful for the Cell’s linguistics study centre as I was able to gain the much needed coaching regarding IELTS and I was also able to receive the necessary guidance in
                         processing my visa and all the required documentations.</p>
                    <h6 className='auther-name'>
                    Babyesh Vithlani <br></br>Conestoge, Canada
                    </h6>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}
