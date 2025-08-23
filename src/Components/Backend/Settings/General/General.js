import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl, TextControl } from "@wordpress/components";
import { generateId, themeSwitch, updateData } from "../../../../utils/functions";
import { ItemsPanel } from '../../../../../../bpl-tools-main/Components';
import TeamMembersItemPanel from '../../itemPanel/TeamMemberItemPanel';

const General = ({ attributes, setAttributes }) => {
  const { section, teamMembers, theme } = attributes;


  return (
    <>


      <>
        {/* theme switcher  */}
        <PanelBody className="bPlPanelBody"
          title={__("Themes", "b-blocks")}
          initialOpen={true}>
          <SelectControl
            value={theme} options={[
              { value: 'default', label: __('Default', 'b-blocks') },
              { value: 'theme2', label: __('Theme-2', 'b-blocks') },
              { value: 'theme3', label: __('Theme-3', 'b-blocks') },
              { value: 'theme4', label: __('Theme-4', 'b-blocks') },
            ]}
            onChange={(value) => setAttributes(themeSwitch(value, attributes))}
          />
        </PanelBody>

        {/* section setting  */}
        <PanelBody
          className="bPlPanelBody"
          title={__("Section", "b-blocks")}
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
          title={__("Team Members", "b-blocks")}
          initialOpen={true} >

          <ItemsPanel
            {...{ attributes, setAttributes }}
            arrKey="teamMembers"
            activeIndex={attributes?.activeCardIdx}
            newItem={{
              "id": generateId(teamMembers),
              "name": `Sarah Chen ${generateId(teamMembers)}`,
              "role": "Creative Director",
              "bio": "Visionary leader with 10+ years in brand strategy and creative direction.",
              "image": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
              "location": {
                "city": "San Francisco",
                "country": "USA",
                "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480c-123.5 0-224-100.5-224-224S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z\"></path></svg>",
                "isShowLocation": true
              },
              "social": [
                {
                  "name": "linkedin",
                  "url": "https://www.linkedin.com/in/sarah-chen-1234567890 ",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path d=\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z\"></path></svg>",
                  "isShow": true,
                  "isOpenNewTab": true
                },
                {
                  "name": "twitter",
                  "url": "https://www.twitter.com/in/sarah-chen-1234567890 ",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" id=\"twitter\"><path d=\"M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15\"></path></svg>",
                  "isShow": true,
                  "isOpenNewTab": true
                },
                {
                  "name": "email",
                  "url": "saarah@example.com",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z\"></path></svg>",
                  "isShow": true,
                  "isOpenNewTab": true
                }
              ],
              "badge": {
                "isShowBadge": true,
                "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z\"></path></svg>"
              },
              "isShowSocial": true
            }}
            ItemSettings={TeamMembersItemPanel}
            design="sortable"
            title='name'
          />
        </PanelBody>
      </>

    </>
  );
};

export default General;
