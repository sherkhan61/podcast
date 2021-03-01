import React from "react";
import img1 from "../assets/photos/img1.jpg"
import "./card-style.css"


export const Card = ({imgsrc, title}) => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={imgsrc} alt="image1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, cumque debitis delectus dolorem dolores earum eius eligendi et ipsa ipsam labore maiores maxime nesciunt non provident quo reiciendis tenetur voluptatem.
                </p>
                <a href="#" className="btn btn-outline-success">Go anywhere</a>
            </div>
        </div>
    )
}