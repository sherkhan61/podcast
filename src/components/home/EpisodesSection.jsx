import React from "react";
import {Cards} from "./cards/Cards";
import "./episodes-section.css"
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";


export const EpisodesSection = () => {
    return (
        <section id="episodes-section" className="episodes-section d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="episodes-section-content d-flex">
                        <h2>Latest Episodes</h2>
                        <Nav.Link><Link to='/episodes'>VIEW ALL EPISODES</Link></Nav.Link>
                    </div>
                </div>
                <Cards/>
            </div>
        </section>
    )
}