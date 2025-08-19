import ThemeOne from '../Themes/ThemeOne';
import ThemeThree from '../Themes/ThemeThree';
import ThemeTwo from '../Themes/ThemeTwo';

const TeamSection = ({ attributes }) => {
  const { theme = 'default', section = {}, teamMembers = [] } = attributes || {};

  return (
    <div className="tmsTeamWrapper">
      {/* <ThemeThree {...{ section, teamMembers }} /> */}

      {/* {
        theme === 'default' ? <ThemeOne  {...{ section, teamMembers }} /> : <ThemeTwo {...{ section, teamMembers }} />

      } */}

      {
        (() => {
          switch (theme) {
            case 'default':
              return <ThemeOne {...{ section, teamMembers }} />;
            case 'theme2':
              return <ThemeTwo {...{ section, teamMembers }} />;
            case 'theme3':
              return <ThemeThree {...{ section, teamMembers }} />;
            default:
              return <ThemeOne {...{ section, teamMembers }} />;
          }
        })()
      }
    </div>
  );
};
export default TeamSection;
