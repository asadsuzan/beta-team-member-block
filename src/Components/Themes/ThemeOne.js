import { Linkedin, Mail, Twitter } from 'lucide-react';

const ThemeOne = ({ section = {}, teamMembers = [] }) => {

    return <>

        <section className="btms-section">
            <div className="btms-container">
                <div className="btms-header">
                    <h2 className="btms-title">{section?.headline}</h2>
                    <p className="btms-subtitle">
                        {section?.slogan}
                    </p>
                </div>

                <div className="btms-grid">
                    {teamMembers?.map((member) => {

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
                                    {
                                        member?.isShowSocial && <div className="btms-card-icons">

                                            {
                                                member.social.map((item, idx) => {
                                                    return <>
                                                        {

                                                            item?.isShow && <a
                                                                href={item.url}
                                                                target={item?.isOpenNewTab ? "_blank" : "_self"}
                                                                rel={item?.isOpenNewTab ? "noreferrer" : undefined}
                                                                key={idx}
                                                                className="btms-card-icon"
                                                            >
                                                                {
                                                                    item.icon ? <span dangerouslySetInnerHTML={{ __html: item.icon }}></span> : <span className='btms-custom-svg'>
                                                                        {item?.name === "linkedin" && <Linkedin color='#fff' />}
                                                                        {item?.name === "twitter" && <Twitter color='#fff' />}
                                                                        {item?.name === "email" && <Mail color='#fff' />}
                                                                    </span>
                                                                }

                                                            </a>


                                                        }

                                                    </>
                                                })
                                            }

                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    }

                    )}
                </div>
            </div>
        </section >

    </>
}

export default ThemeOne;
