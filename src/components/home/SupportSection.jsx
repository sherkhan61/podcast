import React from 'react'
import {Container} from "react-bootstrap";
import "./support-section.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMicrophoneAlt} from "@fortawesome/free-solid-svg-icons";


export const SupportSection = () => {
    return (
        <>
            <section className='supportSection'>
                <Container>
                    <FontAwesomeIcon size="6x" icon={faMicrophoneAlt} className="mr-1"/>
                    <h1>Episode</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Modi, sed, voluptates? Cum et minima quam! Lorem ipsum dolor sit amet
                    </p>
                </Container>
            </section>
        </>
    )
}