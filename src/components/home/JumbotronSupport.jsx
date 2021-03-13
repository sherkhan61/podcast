import React from 'react'
import {Container, Jumbotron as Jumbo} from "react-bootstrap";
import "./jumbotron-support.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMicrophoneAlt} from "@fortawesome/free-solid-svg-icons";

export const JumbotronSupport = () => {
    return (
        <>
            <Jumbo fluid className='jumboSupport'>
                <Container>
                    <FontAwesomeIcon size="6x" icon={faMicrophoneAlt} className="mr-1"/>
                    <h1>Episode</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Modi, sed, voluptates? Cum et minima quam! Lorem ipsum dolor sit amet
                    </p>
                </Container>
            </Jumbo>
        </>
    )
}