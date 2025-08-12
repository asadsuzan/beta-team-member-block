import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl, TextControl } from "@wordpress/components";
import { generateId, themeSwitch, updateData } from "../../../../utils/functions";
import { ItemsPanel } from '../../../../../../bpl-tools-main/Components';
import TeamMembersItemPanel from '../../itemPanel/TeamMemberItemPanel';

const General = ({ attributes, setAttributes }) => {
  const { section, teamMembers, theme, styles } = attributes;


  return (
    <>
      {theme === "default" && <>
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
              "name": `James Kim ${generateId(teamMembers)}`,
              "role": "Brand Strategist",
              "bio": "Strategic thinker who transforms brands through compelling storytelling.",
              "image": "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
              "social": [
                {
                  "name": "linkedin",
                  "url": "https://www.linkedin.com/in/sarah-chen-1234567890 ",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-linkedin-icon lucide-linkedin\"><path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"/><rect width=\"4\" height=\"12\" x=\"2\" y=\"9\"/><circle cx=\"4\" cy=\"4\" r=\"2\"/></svg>",
                  "isShow": true,
                  "isOpenNewTab": true
                },
                {
                  "name": "twitter",
                  "url": "https://www.twitter.com/in/sarah-chen-1234567890 ",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-twitter-icon lucide-twitter\"><path d=\"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z\"/></svg>",
                  "isShow": true,
                  "isOpenNewTab": true
                },
                {
                  "name": "email",
                  "url": "saarah@example.com",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-mail-icon lucide-mail\"><path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\"/><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/></svg>",
                  "isShow": true,
                  "isOpenNewTab": true
                }
              ]
            }}
            ItemSettings={TeamMembersItemPanel}

            design="sortable"
            title='name'

          />


        </PanelBody>
      </>}

      {
        theme === 'theme2' && (<>

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
          {/* section*/}
          <PanelBody
            className="bPlPanelBody"
            title={__("section", "b-blocks")}
            initialOpen={true} >

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
                    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"/><rect width=\"4\" height=\"12\" x=\"2\" y=\"9\"/><circle cx=\"4\" cy=\"4\" r=\"2\"/></svg>",
                    "isShow": true,
                    "isOpenNewTab": true
                  },
                  {
                    "name": "twitter",
                    "url": "https://www.twitter.com/in/sarah-chen-1234567890 ",
                    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z\"/></svg>",
                    "isShow": true,
                    "isOpenNewTab": true
                  },
                  {
                    "name": "email",
                    "url": "saarah@example.com",
                    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13l8-6.99V6H4z\"/></svg>",
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

        </>)
      }
    </>
  );
};

export default General;
