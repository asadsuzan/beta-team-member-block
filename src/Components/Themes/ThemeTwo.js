import Header from '../Common/team/Header'
import Image from '../Common/team/Image'
import Social from '../Common/team/Social'
import Text from '../Common/team/Text'

const ThemeTwo = ({ section = {}, teamMembers = [] }) => {

    return (
        <div className="bBlocksBetaTeamSectionV2">
            <section className="btms-team-section">
                <div className="container">
                    <Header {...{ section }} />
                    <div className="grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="btms-card">
                                <Image {...{ member }} />
                                <div className="btms-card-body">
                                    <Text {...{ member }} />
                                    <Social {...{ member }} />

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ThemeTwo