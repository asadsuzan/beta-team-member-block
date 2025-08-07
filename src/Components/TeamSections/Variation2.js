import teamMembers from '../../lib/data';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import './variation2.css';

const Variation2 = () => (
    <section className="variation2-section">
        <div className="variation2-container">
            <div className="variation2-header">
                <h2 className="variation2-title">Creative Minds</h2>
                <p className="variation2-subtitle">
                    Bold thinkers, creative doers, and passionate innovators
                </p>
            </div>

            <div className="variation2-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="card-group">
                        <div className="card-blur-bg" />
                        <div className="card">
                            <div className="card-img-wrapper">
                                <img src={member.image} alt={member.name} className="card-img" />
                                <div className="card-overlay" />
                            </div>
                            <div className="card-text">
                                <h3 className="card-name">{member.name}</h3>
                                <p className="card-role">{member.role}</p>
                                <p className="card-bio">{member.bio}</p>
                                <div className="card-icons">
                                    <div className="card-icon"><Linkedin size={18} /></div>
                                    <div className="card-icon"><Twitter size={18} /></div>
                                    <div className="card-icon"><Mail size={18} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Variation2;
