import { Camera, Code, Lightbulb, Linkedin, Mail, Palette } from 'lucide-react';
import Header from '../Common/team/Header';
import Social from '../Common/team/Social';

const ThemeThree = ({ section, teamMembers }) => {
    const icons = [Palette, Code, Camera, Lightbulb];
    console.log("ThemeThree", teamMembers?.length);
    return (
        <div className="bBlocksBetaTeamSectionV3">
            <section className="team-section">
                <div className="container">
                    {/* <div className="team-header">
                        <h2 className="team-title">
                            The Creatives
                        </h2>
                        <p className="team-subtitle">Where art meets innovation</p>
                    </div> */}
                    <Header {...{ section }} />
                    <div className="grid">
                        {teamMembers?.map((member, index) => {

                            const IconComponent = icons[index % icons.length]; // safe looping 
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className={`team-member`}>


                                    <div className={`team-card ${isEven ? 'offset-top' : ''}`}>
                                        <div className="img-wrapper">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="image"
                                            />

                                            <div className="gradient-overlay" />

                                            <div className="member-info">
                                                <div className="info-content">
                                                    <div className="text-content">
                                                        <h3 className="name">{member.name}</h3>
                                                        <p className="role">{member.role}</p>
                                                    </div>

                                                    <div className="icon-badge">
                                                        <IconComponent className="badge-icon" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="social-links">
                                                <div className="social-container">
                                                    <div className="social-icon">
                                                        <Linkedin size={14} />
                                                    </div>
                                                    <div className="social-icon">
                                                        <Mail size={14} />
                                                    </div>
                                                </div>
                                            </div> */}

                                            <Social {...{ member }} />
                                        </div>

                                        <div className="member-bio">
                                            <p className="bio">{member.bio}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ThemeThree;