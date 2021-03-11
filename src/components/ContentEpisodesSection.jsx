import React from 'react'
import img from "../assets/photos/img1.jpg"

export const ContentEpisodesSection = () => {
    return (
        <>
            <section className="section-content row justify-content-center">
                <div className="container">
                    <div className="card-episodes mb-3" style={{maxWidth: "100%"}}>
                        <div className="row no-gutters">
                            <div className="col-md-6">
                                <img src={img} className="card-img" alt="image1"/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></p>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

