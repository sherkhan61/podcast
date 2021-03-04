import React from "react";
import {Owner} from "../components/Owner";
import {JumbotronSupport} from "../components/JumbotronSupport";
import {JumbotronQuotes} from "../components/JumbotronQuotes";
import {MainSection} from "../components/header/MainSection";
import {EpisodesSection} from "../components/EpisodesSection";


export const Home = () => {
    return (
        <>
            <MainSection/>
            <EpisodesSection/>
            <JumbotronSupport/>
            <div className="container">
                <Owner/>
            </div>
            <JumbotronQuotes/>
        </>
    )
}