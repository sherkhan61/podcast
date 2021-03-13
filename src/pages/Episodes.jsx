import React from "react";
import {MainEpisodesSection} from "../components/episodes/MainEpisodesSection"
import {ContentEpisodesSection} from "../components/episodes/ContentEpisodesSection"
import {Preloader} from "../components/ui/preloader/Preloader";


const Episodes = () => {
    return (
        <>
            <Preloader/>
            <>
                <MainEpisodesSection/>
                <ContentEpisodesSection/>
            </>

        </>
    )
}

export default Episodes