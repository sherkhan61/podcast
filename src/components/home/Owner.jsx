import React from "react";
import owner from "../../assets/photos/owner.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faVk} from "@fortawesome/free-brands-svg-icons";
import "./owner.css"

export const Owner = () => {
    return (
        <div className="container">
            <h2 className="d-flex justify-content-end">I am the girl behind the show, podcasting since '99.</h2>
            <div className="row my-5">
                <div className="col-md-6 col-sm-12">
                    <h4 className="my-3">Hello, I am Zhanka.</h4>
                    <p>Leave that to me. Send a distress signal, and inform the Senate that all on board were killed.
                        Dantooine. They’re on Dantooine. The plans you refer to will soon be back in our hands.
                        Alderaan? I’m not going to Alderaan. I’ve got to go home.
                        I find your lack of faith disturbing. Kid, I’ve flown from one side of this galaxy to the other.
                        I’ve seen a lot of strange stuff, but I’ve never seen anything to make me believe there’s one
                        all-powerful Force controlling everything. There’s no mystical energy field that controls my
                        destiny. It’s all a lot of simple tricks.
                    </p>
                    <h4>Zhanagul Tlepbergenova</h4>
                    <div className="col-lg-6 col-sm-12 social-media d-flex">
                        <div className="row">
                            <ul className='col-sm-12 d-flex p-3'>
                                <li className='ml-3'><a href="https://www.facebook.com/">
                                    <FontAwesomeIcon icon={faFacebook} className="mr-1"/></a>
                                </li>
                                <li className='ml-3'>
                                    <a target="_blank"
                                        href="https://www.instagram.com/zhan.tlepbergenova/">
                                        <FontAwesomeIcon icon={faInstagram} className="mr-1"/>
                                    </a>
                                </li>
                                <li className='ml-3'>
                                    <a href="#"><FontAwesomeIcon icon={faVk} className="mr-1"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 col-sm-12">
                    <img className="ownerImg"
                         src={owner}
                         alt="owner"/>
                </div>
            </div>
        </div>
    )
}