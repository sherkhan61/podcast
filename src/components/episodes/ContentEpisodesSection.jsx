import React from 'react'
import {ContentEpisodesCards} from "./cards/ContentEpisodesCards";

export const ContentEpisodesSection = () => {
    return (
        <>
            <section className="section-content row justify-content-center">
                <div className="container">
                    <ContentEpisodesCards/>
                </div>
            </section>
        </>
    )
}

