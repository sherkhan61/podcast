import React from 'react'
import {Jumbotron as Jumbo} from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./jumbotron-quotes.css"
import {Carousel} from "react-responsive-carousel";
import img2 from "../../assets/photos/img2.png"


export const JumbotronQuotes = () => {
    return (
        <>
            <Jumbo fluid className='jumbo'>
                <div className="container">
                    <Carousel
                        showArrows={false}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={6100}
                    >
                        <div>
                            <img src={img2} />
                            <div className="myCarousel">
                                <h3>Shirley Fultz</h3>
                                <h4>Designer</h4>
                                <p>
                                    It's freeing to be able to catch up on customized news and not be
                                    distracted by a social media element on the same site
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src={img2} />
                            <div className="myCarousel">
                                <h3>Daniel Keystone</h3>
                                <h4>Designer</h4>
                                <p>
                                    The simple and intuitive design makes it easy for me use. I highly
                                    recommend Fetch to my peers.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src={img2} />
                            <div className="myCarousel">
                                <h3>Theo Sorel</h3>
                                <h4>Designer</h4>
                                <p>
                                    I enjoy catching up with Fetch on my laptop, or on my phone when
                                    I'm on the go!
                                </p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </Jumbo>
        </>
    )
}