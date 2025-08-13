import React from 'react'
import './draft.css'
const DraftTheme = ({ section = {}, teamMembers = [] }) => {
    return (
        <section className="btms-team-variation2">
            <div className="btms-container">
                <div className="btms-text-center btms-header">
                    <h2>{section?.headline}</h2>
                    <p>{section?.slogan}</p>
                </div>

                <div className="btms-grid">



                    <div className="btms-gradient-border">

                    </div>
                    {
                        teamMembers.map((member, idx) => {
                            return (
                                <>
                                    <div className="btms-card-group">
                                        <div className="btms-relative">
                                            <div className="btms-gradient-border">
                                            </div>
                                            <div className="btms-card">
                                                <figure className="btms-image-wrapper">
                                                    <img src={member.image} alt="Name" />
                                                    <div className="btms-image-overlay"></div>
                                                </figure>
                                                <div className="btms-text-center">
                                                    <h3>{member.name}</h3>
                                                    <p className="btms-role">{member.role}</p>
                                                    <p className="btms-bio">{member.bio}</p>
                                                    <div className="btms-socials">

                                                        {

                                                            member?.social?.map((item, idx) => {
                                                                return <>

                                                                    <a
                                                                        href={item.url}

                                                                        key={idx}
                                                                        className="btms-social-icon"
                                                                        dangerouslySetInnerHTML={{ __html: item.icon }}>
                                                                    </a>

                                                                </>
                                                            })
                                                        }

                                                        {/* <div className="btms-social-icon">[LinkedIn]</div>
                                                        <div className="btms-social-icon">[Twitter]</div>
                                                        <div className="btms-social-icon">[Mail]</div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }




                </div>
            </div>
        </section>


    )
}

export default DraftTheme