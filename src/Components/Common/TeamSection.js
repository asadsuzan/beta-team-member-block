import ThemeOne from '../Themes/ThemeOne';
import ThemeTwo from '../Themes/ThemeTwo';

const TeamSection = ({ attributes }) => {
  const { theme = 'default', section = {}, teamMembers = {} } = attributes;

  return (
    <div className={theme === 'default' ? 'btms-theme-one' : "btms-theme-two"}>

      {
        theme === 'default' ? <ThemeOne  {...{ section, teamMembers }} /> : <ThemeTwo {...{ section, teamMembers }} />

      }
    </div>
  );
};
export default TeamSection;
