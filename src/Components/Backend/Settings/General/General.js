import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl, TextControl } from "@wordpress/components";
import { generateId, themeSwitch, updateData } from "../../../../utils/functions";
import { ItemsPanel } from '../../../../../../bpl-tools-main/Components';
import TeamMembersItemPanel from '../../itemPanel/TeamMemberItemPanel';

const General = ({ attributes, setAttributes }) => {
  const { section, teamMembers, theme, styles } = attributes;


  return (
    <>

      {
        (theme === 'default' || theme === "theme2") && (
          <>
            {/* theme switcher  */}
            <PanelBody className="bPlPanelBody"
              title={__("Themes", "b-blocks")}
              initialOpen={true}>
              <SelectControl
                value={theme} options={[
                  { value: 'default', label: __('Default', 'b-blocks') },
                  { value: 'theme2', label: __('Theme-2', 'b-blocks') },
                ]}
                onChange={(value) => setAttributes(themeSwitch(value, attributes))}
              />
            </PanelBody>

            {/* section setting  */}
            <PanelBody
              className="bPlPanelBody"
              title={__("section", "b-blocks")}
              initialOpen={false}
            >
              <TextControl
                label={__('Title', 'b-blocks')}
                value={section.headline}
                onChange={(v) =>
                  setAttributes({
                    section: updateData(section, v, 'headline')
                  })
                }
              />
              <TextControl
                label={__('Slogan', 'b-blocks')}
                value={section.slogan}
                onChange={(v) =>
                  setAttributes({
                    section: updateData(section, v, 'slogan')
                  })
                }
              />
            </PanelBody>


            {/* team members  */}
            <PanelBody
              className="bPlPanelBody"
              title={__("team members", "b-blocks")}
              initialOpen={false} >
              <ItemsPanel
                {...{ attributes, setAttributes }}
                arrKey="teamMembers"
                newItem={{
                  "id": generateId(teamMembers),
                  "name": `Sarah Chen ${generateId(teamMembers)}`,
                  "role": "Creative Director",
                  "bio": "Visionary leader with 10+ years in brand strategy and creative direction.",
                  "image": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
                  "social": [
                    {
                      "name": "linkedin",
                      "url": "https://www.linkedin.com/in/sarah-chen-1234567890 ",
                      "icon": "",
                      "isShow": true,
                      "isOpenNewTab": true
                    },
                    {
                      "name": "twitter",
                      "url": "https://www.twitter.com/in/sarah-chen-1234567890 ",
                      "icon": "",
                      "isShow": true,
                      "isOpenNewTab": true
                    },
                    {
                      "name": "email",
                      "url": "saarah@example.com",
                      "icon": "",
                      "isShow": true,
                      "isOpenNewTab": true
                    }
                  ],
                  "isShowSocial": true
                }}
                ItemSettings={TeamMembersItemPanel}
                design="sortable"
                title='name'
              />
            </PanelBody>
          </>
        )
      }
    </>
  );
};

export default General;
