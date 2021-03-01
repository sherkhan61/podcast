import React from "react";
import {Card} from "./Card";
import img1 from "../assets/photos/img1.jpg"
import img2 from "../assets/photos/zhan.tlepbergenova_71079983_152808609299980_2984664553722593415_n.jpg"
import img3 from "../assets/photos/zhan.tlepbergenova_123287066_788963614995661_4481966674230671713_n.jpg"

export const Cards = () => {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={img1} title="Episode 1"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img2} title="Episode 2"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img3} title="Episode 3"/>
                </div>
            </div>
        </div>

    )
}