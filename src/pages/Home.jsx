import React from "react";
import {Owner} from "../components/home/Owner";
import {JumbotronSupport} from "../components/home/JumbotronSupport";
import {JumbotronQuotes} from "../components/home/JumbotronQuotes";
import {MainSection} from "../components/home/MainSection";
import {EpisodesSection} from "../components/home/EpisodesSection";


const Home = () => {
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

export default Home