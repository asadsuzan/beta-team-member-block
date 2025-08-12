import Theme1 from '../Themes/Theme1';
import Theme2 from '../Themes/Theme2';
import ThemeTwo from '../Themes/ThemeTwo';

const TeamSection = ({ attributes }) => {
  const { theme = 'default', section, teamMembers } = attributes;

  return (
    <div className="bBlocksBetaTeamSection">

      {
        theme === 'default' ? <Theme2  {...{ section, teamMembers }} /> : <div className='bBlocksBetaTeamSectionV2'> <ThemeTwo attributes={attributes} /></div>

      }
    </div>
  );
};
export default TeamSection;
