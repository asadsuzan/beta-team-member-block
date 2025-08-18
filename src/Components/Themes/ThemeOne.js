import Header from '../Common/team/Header';
import Image from '../Common/team/Image';
import Social from '../Common/team/Social';
import Text from '../Common/team/Text';

const ThemeOne = ({ section = {}, teamMembers = [] }) => {

    return <div className='bBlocksBetaTeamSection'>

        <section className="btms-variation2-section">
            <div className="container">
                <Header {...{ section }} />
                <div className="grid">
                    {teamMembers?.map((member) => {
                        return <div key={member?.id} className="btms-card-group">
                            <div className="btms-card-blur-bg" />
                            <div className="btms-card">
                                <Image {...{ member }} />
                                <div className="btms-card-text">
                                    <Text {...{ member }} />
                                    <Social {...{ member }} />
                                </div>
                            </div>
                        </div>
                    }

                    )}
                </div>
            </div>
        </section >

    </div>
}

export default ThemeOne;
