import React from "react";
import "./card-style.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";


export const Card = ({imgsrc, title}) => {
    return (
        <div className="card shadow m-2 justify-content-center">
            <div className="overflow">
                <img src={imgsrc} alt="image1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark text-center">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <Nav.Link>
                    <FontAwesomeIcon icon={faPlayCircle} className="mr-1"/>
                    <Link to='/'>Listen now!</Link>
                </Nav.Link>
            </div>
        </div>
    )
}