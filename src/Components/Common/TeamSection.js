import ThemeOne from '../Themes/ThemeOne';
import ThemeThree from '../Themes/ThemeThree';
import ThemeTwo from '../Themes/ThemeTwo';
import ThemeFour from './team/ThemeFour';

const TeamSection = ({ attributes, setAttributes }) => {
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
              return <ThemeOne {...{ section, teamMembers, attributes, setAttributes }} />;
            case 'theme2':
              return <ThemeTwo {...{ section, teamMembers, attributes, setAttributes }} />;
            case 'theme3':
              return <ThemeThree {...{ section, teamMembers, attributes, setAttributes }} />;
            case 'theme4':
              return <ThemeFour {...{ section, teamMembers, attributes, setAttributes }} />;
            default:
              return <ThemeOne {...{ section, teamMembers, attributes, setAttributes }} />;
          }
        })()
      }
    </div>
  );
};
export default TeamSection;
