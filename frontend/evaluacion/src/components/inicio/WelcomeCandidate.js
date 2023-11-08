import React from 'react'
import { Jumbotron } from 'react-bootstrap'

function WelcomeCandidate(props) {
  return (
    <div className = "text-center"> 
        <Jumbotron>
        <h1>Welcome candidate {props.numberCandidate}</h1>
    </Jumbotron>
    </div>
  )
}

export default WelcomeCandidate