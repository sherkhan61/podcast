import React from "react";
import {Owner} from "../components/home/Owner";
import {SupportSection} from "../components/home/SupportSection";
import {QuotesSection} from "../components/home/QuotesSection";
import {MainSection} from "../components/home/MainSection";
import {EpisodesSection} from "../components/home/EpisodesSection";


const Home = () => {
    return (
        <>
            <MainSection/>
            <EpisodesSection/>
            <SupportSection/>
            <div className="container">
                <Owner/>
            </div>
            <QuotesSection/>
        </>
    )
}

export default Home