import ThemeOne from '../Themes/ThemeOne';
import ThemeThree from '../Themes/ThemeThree';
import ThemeTwo from '../Themes/ThemeTwo';
import ThemeFour from './team/ThemeFour';

const TeamSection = ({ attributes, setAttributes }) => {
  const { theme = 'default', section = {}, teamMembers = [] } = attributes || {};

  const themes = {
    theme1: ThemeOne,
    theme2: ThemeTwo,
    theme3: ThemeThree,
    theme4: ThemeFour
  }


  // pick the right theme , fallback to themeOne if not found 

  const SelectedTheme = themes[theme] || ThemeOne
  return (
    <div className="tmsTeamWrapper">

      <SelectedTheme {...{ section, teamMembers, attributes, setAttributes }} />


    </div>
  );
};
export default TeamSection;
