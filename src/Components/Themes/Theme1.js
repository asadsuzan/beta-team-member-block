import teamMembers from '../../lib/data';
import { Github, Linkedin, Twitter, Mail, MapPin, Award, Users, Palette, Code, Camera, Lightbulb } from 'lucide-react';
// Variation 1: Clean Minimal Cards
// import "./theme1.css"
const Theme1 = () => (
    <section className="team-section">
        <div className="container">
            <div className="header">
                <h2 className="title">Meet Our Team</h2>
                <p className="subtitle">
                    Tal eptional creative work
                </p>
            </div>

            <div className="wrapper">
                {teamMembers.map((member, index) => (
                    <div key={index} className="card">
                        <div className="card-image">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="image"
                            />
                            <div className="overlay" />
                        </div>

                        <div className="card-body">
                            <h3 className="name">{member.name}</h3>
                            <p className="role">{member.role}</p>
                            <p className="bio">{member.bio}</p>

                            <div className="social">
                                {member.social.linkedin && (
                                    <a href={member.social.linkedin} className="link linkedin">
                                        <Linkedin size={20} />
                                    </a>
                                )}
                                {member.social.twitter && (
                                    <a href={member.social.twitter} className="link twitter">
                                        <Twitter size={20} />
                                    </a>
                                )}
                                {member.social.github && (
                                    <a href={member.social.github} className="link github">
                                        <Github size={20} />
                                    </a>
                                )}
                                <a href={`mailto:${member.social.email}`} className="link email">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Theme1