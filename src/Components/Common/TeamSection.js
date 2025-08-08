import Theme1 from '../Themes/Theme1';
import Theme2 from '../Themes/Theme2';

const TeamSection = ({ attributes }) => {
  const { theme = 'default', section, teamMembers } = attributes;

  return (
    <div className="bBlocksBetaTeamSection">

      {
        theme === 'default' ? <Theme2  {...{ section, teamMembers }} /> : <Theme1 />
      }
    </div>
  );
};
export default TeamSection;
