import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";



export const ButtonEpisodes = () => {
    return (
        <div className="container d-flex justify-content-center p-3">
            <Button>
                <Link to='/episodes'>All Episodes</Link>
            </Button>
        </div>
    )
}