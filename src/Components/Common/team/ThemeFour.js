import { Award, Linkedin, Mail, MapPin, Users } from 'lucide-react'
import React from 'react'
import Header from './Header'
import Image from './Image'
import Social from './Social'

const ThemeFour = ({ teamMembers, section, setAttributes }) => {
    return (
        <div className='bBlocksBetaTeamSectionV4'>
            <section className="team-section">
                <div className="container">
                    {/* <div className="team-header">
                        <div className="team-icon-wrapper">
                            <Users className="team-icon" />
                        </div>
                        <h2 className="team-title">Leadership Team</h2>
                        <p className="team-description">
                            Experienced professionals driving innovation and excellence in creative solutions
                        </p>
                    </div> */}
                    <Header {...{ section }} />

                    <div className="grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-card btms-card" onClick={() => setAttributes({ activeCardIdx: index })}>
                                <div className="team-card-content">
                                    <div className="team-member-image-container">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="team-member-image"
                                        />
                                    </div>
                                    {/* <Image {...{ member }} /> */}

                                    <div className="team-member-info">
                                        <div className="team-member-header">
                                            <div className="team-member-details">
                                                <h3 className="name">{member.name}</h3>
                                                <p className="role">{member.role}</p>
                                            </div>


                                            {
                                                member?.badge?.isShowBadge && (
                                                    <div className="icon-badge">
                                                        <span
                                                            dangerouslySetInnerHTML={{ __html: member.badge?.icon }} >
                                                        </span>
                                                    </div>
                                                )
                                            }

                                        </div>

                                        <p className="bio">{member.bio}</p>

                                        <div className="team-member-footer">
                                            {
                                                member?.location?.isShowLocation && (
                                                    <div className="team-member-location">
                                                        <MapPin size={16} className="location-icon" />
                                                        <span>{member?.location?.city}</span>
                                                        ,
                                                        <span>{member?.location?.country}</span>
                                                    </div>
                                                )
                                            }
                                            <Social {...{ member }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ThemeFour