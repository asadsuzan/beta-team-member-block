import Variation1 from '../TeamSections/Variation1';
import Variation2 from '../TeamSections/Variation2';

const TeamSection = ({ attributes }) => {
  const { variation = 'variation2' } = attributes;
  return (
    <div className="bBlocksBetaTeamSection">

      {
        variation === 'default' ? <Variation2 /> : <Variation1 />
      }
    </div>
  );
};
export default TeamSection;
