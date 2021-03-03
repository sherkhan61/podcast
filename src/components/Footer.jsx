import React from 'react'
import {Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faVk} from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
    return (
        <>
            <Container fluid style={{backgroundColor: '#212529', color: '#fff'}}>
                <Container style={{padding: '20px'}}>
                    <p className="text-center">© 2021 Шабадансыз саяхат</p>
                    <div>
                        <ul className="d-flex justify-content-center pl-0">
                            <li><a href="https://www.facebook.com/">
                                <FontAwesomeIcon size="2x" icon={faFacebook} className="mr-1"/></a>
                            </li>
                            <li className='ml-3'>
                                <a target="_blank"
                                   href="https://www.instagram.com/zhan.tlepbergenova/">
                                    <FontAwesomeIcon size="2x" icon={faInstagram} className="mr-1"/>
                                </a>
                            </li>
                            <li className='ml-3'>
                                <a href="#"><FontAwesomeIcon size="2x" icon={faVk} className="mr-1"/>
                                </a>
                            </li>
                        </ul>
                    </div>

                </Container>
            </Container>
        </>
    )
}