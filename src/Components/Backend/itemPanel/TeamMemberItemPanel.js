import { __ } from "@wordpress/i18n";
import { CheckboxControl, Flex, FlexItem, PanelRow, TextareaControl, TextControl, ToggleControl, Tooltip } from "@wordpress/components";
import { URLInput } from "@wordpress/block-editor";
import { IconLibrary, Label } from '../../../../../bpl-tools-main/Components';
import { updateData } from '../../../utils/functions';

const TeamMembersItemPanel = ({ attributes, setAttributes, index }) => {

    const { teamMembers } = attributes;
    const { name, role, bio, image, social, isShowSocial } = teamMembers[index];

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

            <TextareaControl
                value={bio}
                onChange={(v) => {
                    setAttributes({
                        teamMembers: updateData(teamMembers, v, index, 'bio')
                    })
                }}
            />



            <Flex>
                <FlexItem>
                    <Label className="">
                        {__('Socials', "bpl-tools")}
                    </Label>
                </FlexItem>
                <FlexItem>
                    <ToggleControl
                        checked={isShowSocial}

                        onChange={(v) => {

                            setAttributes({
                                teamMembers: updateData(teamMembers, v, index, "isShowSocial")
                            })
                        }}



                    />
                </FlexItem>
            </Flex>


            <div style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: `${isShowSocial ? "#ddd" : "red"}`,
                margin: "10px 0",
                padding: "10px"
            }}>
                {teamMembers[index]?.social.map((item, idx) => (
                    <div key={idx}
                        style={{
                            border: `${!item?.isShow ? "1px solid red" : "1px solid green"}`,

                        }}

                        className='btms-social-panel'


                    >

                        <Flex

                            align='center'
                            direction='row'
                            style={{
                                marginBottom: "5px"
                            }}

                        >

                            <FlexItem>


                                <Flex>

                                    <FlexItem>
                                        <div className='btms-control-panel-svg'
                                            dangerouslySetInnerHTML={{ __html: item.icon }}
                                        ></div>

                                    </FlexItem>
                                    <FlexItem><span>{

                                        __(`${item.name}`, "bpl-tools")
                                    }</span></FlexItem>

                                    {
                                        item?.isShow && isShowSocial &&


                                        <IconLibrary
                                            className='btms-icon-lib'
                                            label=""
                                            onChange={(v) =>
                                                setAttributes({
                                                    teamMembers: updateData(
                                                        teamMembers,
                                                        v,
                                                        index,
                                                        "social",
                                                        idx,
                                                        "icon"
                                                    )
                                                })
                                            }
                                        />


                                    }
                                </Flex>



                            </FlexItem>

                            <FlexItem>


                                <ToggleControl
                                    checked={item.isShow}
                                    disabled={!isShowSocial}
                                    onChange={(v) => {

                                        setAttributes({
                                            teamMembers: updateData(teamMembers, v, index, 'social', idx, "isShow")
                                        })
                                    }}



                                />

                            </FlexItem>




                        </Flex>


                        <span>{__('URL', 'b-blocks')}</span>
                        <TextControl
                            disabled={!item.isShow || !isShowSocial}
                            value={item?.url}
                            onChange={(v) => {
                                setAttributes({
                                    teamMembers: updateData(
                                        teamMembers,
                                        v,
                                        index,
                                        "social",
                                        idx,
                                        "url"
                                    )
                                });
                            }}
                        />

                        <span>{__('Label', 'b-blocks')}</span>
                        <TextControl
                            disabled={!item.isShow || !isShowSocial}
                            value={item?.name}
                            onChange={(v) => {
                                setAttributes({
                                    teamMembers: updateData(
                                        teamMembers,
                                        v,
                                        index,
                                        "social",
                                        idx,
                                        "name"
                                    )
                                });
                            }}
                        />





                        <CheckboxControl
                            disabled={!item.isShow || !isShowSocial}
                            checked={item.isOpenNewTab}
                            label={` Open in new tab`}
                            onChange={(v) => {

                                setAttributes({
                                    teamMembers: updateData(teamMembers, v, index, 'social', idx, "isOpenNewTab")
                                })
                            }}
                        />

                    </div>
                ))}


            </div >





        </>
    );
};

export default TeamMembersItemPanel;

