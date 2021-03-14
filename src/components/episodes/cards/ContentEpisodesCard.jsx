import React from "react";


export const ContentEpisodesCard = ({imgsrc, updated, title, paragraph, podcastTitle, audioSrc}) => {
    return (
            <div className="card-episodes mb-3" style={{maxWidth: "100%"}}>
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <img src={imgsrc} className="card-img" alt="image"/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <p className="card-text">
                                <small className="text-muted">{updated}</small>
                            </p>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{paragraph}</p>
                            <strong>{podcastTitle}</strong>
                            <div>
                                <audio controls><source src={audioSrc} type ="audio/mpeg"/>
                                </audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}