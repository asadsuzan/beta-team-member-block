import { __ } from "@wordpress/i18n";
import { CheckboxControl, Flex, FlexItem, PanelRow, TextareaControl, TextControl, ToggleControl } from "@wordpress/components";
import { IconLibrary, InlineMediaUpload, Label } from '../../../../../bpl-tools/Components';
import { updateData } from '../../../utils/functions';

const TeamMembersItemPanel = ({ attributes, setAttributes, index }) => {


    const { teamMembers, theme } = attributes;
    const { name, role, bio, isShowSocial } = teamMembers[index];

    return (
        <>





            {/* name  */}

            <Label>
                Name
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

            <InlineMediaUpload
                label="Avatar"
                className="m20"
                value={teamMembers[index].image}

                onChange={(v) => {
                    setAttributes({
                        teamMembers: updateData(teamMembers, v, index, 'image')
                    })
                }}
            />

            {/* social media settings  */}

            <PanelRow>
                <Label className=" ">
                    {__('Socials', "bpl-tools")}
                </Label>
                <ToggleControl
                    label={isShowSocial ? 'ON' : 'OFF'}
                    checked={isShowSocial || false}
                    onChange={(v) => {
                        setAttributes({
                            teamMembers: updateData(teamMembers, v, index, "isShowSocial")
                        })
                    }}
                />
            </PanelRow>



            <div style={{
                color: `${isShowSocial ? "inherit" : "#842029"}`
            }}
            >
                {teamMembers[index]?.social?.map((item, idx) => (
                    <div key={idx}
                        style={{
                            color: `${!item?.isShow ? "#842029" : "inherit"}`
                        }}
                        className='btms-social-panel'
                    >


                        <Flex

                            align='center'
                            direction='row'
                            justify='space-between'
                        >
                            <FlexItem>
                                <Flex>
                                    {
                                        item?.isShow && isShowSocial && (
                                            <FlexItem>
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
                                            </FlexItem>
                                        )
                                    }

                                    <FlexItem>
                                        <div className='btms-control-panel-svg'
                                            dangerouslySetInnerHTML={{ __html: item.icon }}
                                        ></div>
                                    </FlexItem>
                                    <FlexItem>
                                        <span>{__(`${item.name}`, "bpl-tools")}</span>
                                    </FlexItem>

                                </Flex>
                            </FlexItem>

                            <FlexItem>
                                <ToggleControl
                                    checked={item?.isShow || false}
                                    label={item?.isShow ? 'ON' : 'OFF'}
                                    disabled={!isShowSocial}
                                    onChange={(v) => {
                                        setAttributes({
                                            teamMembers: updateData(teamMembers, v, index, 'social', idx, "isShow")
                                        })
                                    }}
                                />
                            </FlexItem>
                        </Flex>



                        <TextControl
                            className='mt10'
                            label={__('URL', 'btms-block')}
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


                        <TextControl
                            label={__('Name', 'btms-block')}
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
                            checked={item?.isOpenNewTab}
                            label={`Open in new tab`}
                            onChange={(v) => {
                                setAttributes({
                                    teamMembers: updateData(teamMembers, v, index, 'social', idx, "isOpenNewTab")
                                })
                            }}
                        />

                    </div>
                ))}
            </div >



            {/* badge icon settings  */}


            {(
                (theme === "theme3" || theme === "theme4") && (
                    <>
                        <Flex className='mt10' align="center" justify="space-between" style={{ marginBottom: '12px' }}>
                            <FlexItem>
                                <Label className=" ">
                                    Badge Icon
                                </Label>
                            </FlexItem>
                            <FlexItem>
                                <ToggleControl
                                    label={teamMembers[index]?.badge?.isShowBadge ? 'ON' : 'OFF'}
                                    checked={teamMembers[index]?.badge?.isShowBadge || false}
                                    onChange={(value) => {
                                        setAttributes({
                                            teamMembers: updateData(
                                                teamMembers,
                                                value,
                                                index,
                                                "badge",
                                                "isShowBadge"
                                            )
                                        })
                                    }}
                                />
                            </FlexItem>
                        </Flex>

                        {teamMembers[index]?.badge?.isShowBadge && (
                            <Flex align="center" justify="space-between">

                                <FlexItem>
                                    <div className='btms-control-panel-svg'
                                        dangerouslySetInnerHTML={{ __html: teamMembers[index]?.badge?.icon || '' }}
                                    ></div>
                                </FlexItem>
                                <FlexItem>
                                    <IconLibrary
                                        className='btms-icon-lib'
                                        label=""
                                        onChange={(v) =>
                                            setAttributes({
                                                teamMembers: updateData(
                                                    teamMembers,
                                                    v,
                                                    index,
                                                    "badge",
                                                    "icon"

                                                )
                                            })
                                        }
                                    />
                                </FlexItem>
                            </Flex>
                        )}
                    </>
                )
            )}


            {/* location settings  */}

            {
                theme === "theme4" && (<>

                    <Flex className='mt10' align="center" justify="space-between" style={{ marginBottom: '12px' }}>
                        <FlexItem>
                            <Label className=" ">
                                Location
                            </Label>
                        </FlexItem>
                        <FlexItem>
                            <ToggleControl
                                label={teamMembers[index]?.location?.isShowLocation ? 'ON' : 'OFF'}
                                checked={teamMembers[index]?.location?.isShowLocation || false}
                                onChange={(value) => {
                                    setAttributes({
                                        teamMembers: updateData(
                                            teamMembers,
                                            value,
                                            index,
                                            "location",

                                            "isShowLocation"
                                        )
                                    })
                                }}
                            />
                        </FlexItem>
                    </Flex>
                    {
                        teamMembers[index]?.location?.isShowLocation && (
                            <>
                                <TextControl
                                    className='mb10'
                                    label={__('City', 'btms-block')}
                                    value={teamMembers[index]?.location?.city || ''}
                                    onChange={(v) => {
                                        setAttributes({
                                            teamMembers: updateData(
                                                teamMembers,
                                                v,
                                                index,
                                                "location",
                                                "city"
                                            )
                                        });
                                    }}
                                />

                                <TextControl
                                    label={__('Country', 'btms-block')}
                                    value={teamMembers[index]?.location?.country || ''}
                                    onChange={(v) => {
                                        setAttributes({
                                            teamMembers: updateData(
                                                teamMembers,
                                                v,
                                                index,
                                                "location",
                                                "country"
                                            )
                                        });
                                    }}
                                />
                            </>
                        )
                    }

                </>)
            }






        </>
    );
};

export default TeamMembersItemPanel;

