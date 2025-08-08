import teamMembers from '../../lib/data';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Theme2 = ({ section = {}, teamMembers = [] }) => {

    return <>

        <section className="btms-variation2-section">
            <div className="btms-container">
                <div className="btms-header">
                    <h2 className="title">{section?.headline}</h2>
                    <p className="btms-subtitle">
                        {section?.slogan}
                    </p>
                </div>

                <div className="btms-grid">
                    {teamMembers?.map((member) => {
                        console.log(member);
                        return <div key={member?.id} className="btms-card-group">
                            <div className="btms-card-blur-bg" />
                            <div className="btms-card">
                                <div className="btms-card-img-wrapper">
                                    <img src={member.image} alt={member.name} className="btms-card-img" />
                                    <div className="btms-card-overlay" />
                                </div>
                                <div className="btms-card-text">
                                    <h3 className="btms-card-name">{member.name}</h3>
                                    <p className="btms-card-role">{member.role}</p>
                                    <p className="btms-card-bio">{member.bio}</p>
                                    <div className="btms-card-icons">

                                        <div
                                            className="btms-card-icon"
                                            dangerouslySetInnerHTML={{ __html: member.social.linkedin.icon }}>
                                        </div>
                                        <div
                                            className="btms-card-icon"
                                            dangerouslySetInnerHTML={{ __html: member.social.twitter.icon }}>
                                        </div>
                                        <div
                                            className="btms-card-icon"
                                            dangerouslySetInnerHTML={{ __html: member.social.email.icon }}>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    )}
                </div>
            </div>
        </section>

    </>
}

export default Theme2;
