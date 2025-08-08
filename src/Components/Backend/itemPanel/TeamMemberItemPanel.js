import { __ } from "@wordpress/i18n";
import { Flex, FlexItem, TextControl } from "@wordpress/components";
import { URLInput } from "@wordpress/block-editor";
import { IconLibrary, Label } from '../../../../../bpl-tools-main/Components';
import { updateData } from '../../../utils/functions';

const TeamMembersItemPanel = ({ attributes, setAttributes, index }) => {

    const { teamMembers } = attributes;
    const { name, role, bio, image, social } = teamMembers[index];

    return (
        <>




            {/* name  */}

            <Label>
                {__('Name', "bpl-tools")}
            </Label>

            <TextControl
                value={name}
                onChange={(v) => {
                    setAttributes({
                        teamMembers: updateData(teamMembers, v, index, 'name')
                    })
                }}
            />
            {/* role  */}
            <Label>
                {__('Role', "bpl-tools")}
            </Label>

            <TextControl
                value={role}
                onChange={(v) => {
                    setAttributes({
                        teamMembers: updateData(teamMembers, v, index, 'role')
                    })
                }}
            />
            {/* bio  */}
            <Label>
                {__('Bio', "bpl-tools")}
            </Label>

            <TextControl
                value={bio}
                onChange={(v) => {
                    setAttributes({
                        teamMembers: updateData(teamMembers, v, index, 'bio')
                    })
                }}
            />

            <Label>
                {__('Socials', "bpl-tools")}
            </Label>




            {Object.entries(teamMembers[index]?.social || {}).map(([key, socialItem]) => (
                <div key={key} style={{ marginBottom: '1rem' }}>
                    <TextControl
                        label={`${key} URL`}
                        value={socialItem.url}
                        onChange={(v) => {
                            setAttributes({
                                teamMembers: updateData(
                                    teamMembers,
                                    v,
                                    index,
                                    "social",
                                    key,
                                    "url"
                                )
                            });
                        }}
                    />

                    <Flex>
                        <FlexItem>
                            <span className='btms-control-panel-svg'
                                dangerouslySetInnerHTML={{ __html: socialItem.icon }}
                            ></span>
                        </FlexItem>
                        <FlexItem>
                            <IconLibrary
                                label=""
                                onChange={(v) =>
                                    setAttributes({
                                        teamMembers: updateData(
                                            teamMembers,
                                            v,
                                            index,
                                            "social",
                                            key,
                                            "icon"
                                        )
                                    })
                                }
                            />
                        </FlexItem>
                    </Flex>
                </div>
            ))}







        </>
    );
};

export default TeamMembersItemPanel;

