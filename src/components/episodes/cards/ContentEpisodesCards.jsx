import React from "react";
import img1 from "../../../assets/photos/img1.jpg"
import {ContentEpisodesCard} from "./ContentEpisodesCard";
import podcast1 from "../../../assets/audios/zella_day.mp3"


export const ContentEpisodesCards = () => {
    return (
        <div>
            <div>
                <ContentEpisodesCard imgsrc={img1}
                                     updated="Last updated 3 mins ago"
                                     title="Episode 1"
                                     paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores incidunt ipsa quam saepe? Asperiores cumque cupiditate fugit impedit quaerat qui quo sed. Accusamus esse et iste magni odit provident, sequi?"
                                     podcastTitle="Title"
                                     audioSrc={podcast1}/>
            </div>
            <div>
                <ContentEpisodesCard imgsrc={img1}
                                     updated="Last updated 3 mins ago"
                                     title="Episode 1"
                                     paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
                                     incidunt ipsa quam saepe? Asperiores cumque cupiditate fugit impedit quaerat qui
                                     quo sed. Accusamus esse et iste magni odit provident, sequi?"
                                     podcastTitle="Title"
                                     audioSrc={podcast1}/>
            </div>
            <div>
                <ContentEpisodesCard imgsrc={img1}
                                     updated="Last updated 3 mins ago"
                                     title="Episode 1"
                                     paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
                                     incidunt ipsa quam saepe? Asperiores cumque cupiditate fugit impedit quaerat qui
                                     quo sed. Accusamus esse et iste magni odit provident, sequi?"
                                     podcastTitle="Title"
                                     audioSrc={podcast1}/>
            </div>
            <div>
                <ContentEpisodesCard imgsrc={img1}
                                     updated="Last updated 3 mins ago"
                                     title="Episode 1"
                                     paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
                                     incidunt ipsa quam saepe? Asperiores cumque cupiditate fugit impedit quaerat qui
                                     quo sed. Accusamus esse et iste magni odit provident, sequi?"
                                     podcastTitle="Title"
                                     audioSrc={podcast1}/>
            </div>
            <div>
                <ContentEpisodesCard imgsrc={img1}
                                     updated="Last updated 3 mins ago"
                                     title="Episode 1"
                                     paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
                                     incidunt ipsa quam saepe? Asperiores cumque cupiditate fugit impedit quaerat qui
                                     quo sed. Accusamus esse et iste magni odit provident, sequi?"
                                     podcastTitle="Title"
                                     audioSrc={podcast1}/>
            </div>
        </div>
    )
}