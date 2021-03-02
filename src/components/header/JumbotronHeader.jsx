import React from 'react'
import {Container, Jumbotron as Jumbo} from "react-bootstrap";
import "./jumbotron-header.css"

export const JumbotronHeader = () => {
    return (
        <>
            <Jumbo fluid className='jumboHeader'>
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
        </>
    )
}