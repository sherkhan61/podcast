import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import "./buttonEpisodes.css"


export const ButtonEpisodes = () => {
    return (
        <div className="container d-flex justify-content-center p-3">
            <Button className="buttonEpisodes">
                <Link to='/episodes'>All Episodes</Link>
            </Button>
        </div>
    )
}