import React from 'react'
import {Col, Container, Image, Jumbotron as Jumbo} from "react-bootstrap";
import "./jumbotron-quotes.css"
import img2 from "../assets/photos/img2.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteRight} from "@fortawesome/free-solid-svg-icons";

export const JumbotronQuotes = () => {
    return (
        <>
            <Jumbo fluid className='jumbo'>
                <div className="overlay">
                </div>
                <Container>
                    <blockquote>
                        <FontAwesomeIcon size="6x" icon={faQuoteRight} className="mr-1"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem libero numquam voluptates!</p>
                    </blockquote>
                    <div className="d-flex justify-content-center">
                        <div className="row">
                            <Col xs={6} md={4}>
                                <Image src={img2} roundedCircle/>
                            </Col>
                        </div>
                        <span>
                            <strong>Rachel Zeis</strong>
                            <span>CEO at Allep</span>
                        </span>
                    </div>

                </Container>
            </Jumbo>
        </>
    )
}