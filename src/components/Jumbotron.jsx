import React from 'react'
import {Container, Jumbotron as Jumbo} from "react-bootstrap";
import podcast from '../assets/images/podcast.jpg'
import styled from 'styled-components'


const Styles = styled.div`
    .jumbo {
        background: url(${podcast}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay {
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`

export const Jumbotron = () => {
    return (
        <>
            <Styles>
                <Jumbo fluid className='jumbo'>
                    <div className="overlay">

                    </div>
                    <Container>
                        <h1>Episode</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Modi, sed, voluptates? Cum et minima quam! Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Assumenda ducimus eos, impedit in ipsam odio?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, nobis!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus asperiores consectetur dolores ex fuga iste laudantium, omnis pariatur porro
                            quaerat repudiandae tempora ullam veniam voluptate.
                        </p>
                    </Container>
                </Jumbo>
            </Styles>
        </>
    )
}