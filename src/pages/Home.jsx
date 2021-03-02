import React from "react";
import {Cards} from "../components/cards/Cards";
import {ButtonEpisodes} from "../components/cards/ButtonEpisodes";
import {Owner} from "../components/Owner";
import {JumbotronHeader} from "../components/header/JumbotronHeader";
import {JumbotronSupport} from "../components/JumbotronSupport";
import {JumbotronQuotes} from "../components/JumbotronQuotes";


export const Home = () => {
    return (
        <>
            <JumbotronHeader/>
            <div className="container">
                <div className="episodes-title text-center">
                    <h2>Latest Episodes</h2>
                    <p>Listen the podcasts</p>
                </div>
                <Cards/>
                <ButtonEpisodes/>
            </div>
            <JumbotronSupport/>
            <div className="container">
                <Owner/>
            </div>
            <JumbotronQuotes/>
        </>
    )
}