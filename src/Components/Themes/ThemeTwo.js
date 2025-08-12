

import React from 'react'

const ThemeTwo = ({ attributes }) => {
    const { teamMembers, section } = attributes

    return (
        <section className="btms-team-section">
            <div className="btms-container">
                <div className="btms-header">
                    <h2 className="btms-title">{section.headline}</h2>
                    <p className="btms-subtitle">
                        {section.slogan}
                    </p>
                </div>

                <div className="btms-wrapper">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="btms-card">
                            <div className="btms-card-image">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="btms-image"
                                />
                                <div className="btms-overlay" />
                            </div>

                            <div className="btms-card-body">
                                <h3 className="btms-name">{member.name}</h3>
                                <p className="btms-role">{member.role}</p>
                                <p className="btms-bio">{member.bio}</p>



                                {
                                    member?.isShowSocial && <div className="btms-social">
                                        {
                                            member.social.map((item, idx) => {
                                                return item?.isShow && <>
                                                    <a
                                                        href={item.url}
                                                        target={item?.isOpenNewTab ? "_blank" : "_self"}
                                                        rel={item?.isOpenNewTab ? "noreferrer" : undefined}
                                                        key={idx}
                                                        className="btms-link"
                                                        dangerouslySetInnerHTML={{ __html: item.icon }}>
                                                    </a>

                                                </>
                                            })
                                        }
                                    </div>
                                }



                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ThemeTwo