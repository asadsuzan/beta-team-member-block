
import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, RangeControl } from '@wordpress/components';
import { Background, BButtonGroup, BoxControl, ColorControl, Device, Label, Typography } from "../../../../../../bpl-tools-main/Components";
import { __experimentalUnitControl as UnitControl, __experimentalBorderControl as BorderControl } from "@wordpress/components"
import { updateData } from '../../../../utils/functions';
const Style = ({ attributes, setAttributes, device }) => {
  const { styles, theme, columns } = attributes;
  const { section, header = {}, title, subTitle, card, img, cardContent } = styles || {}
  const { name, role, bio, button, badge } = cardContent
  const { textAlign } = header
  console.log('badge background', badge?.bg);
  console.log('badge hover background', badge?.hover?.bg);



  return (


    <>



      {/* grid settings  */}
      <PanelBody
        className='bPlPanelBody'
        title='Grid'
        initialOpen={false}
      >

        <PanelRow><Label className=''>Row</Label> <Device /> </PanelRow>



        <RangeControl
          max={12}
          min={1}
          value={columns[device]}
          onChange={v => setAttributes({ columns: updateData(columns, v, device) })}

        />


      </PanelBody>


      {/* common styles  */}


      {/* section  */}
      <PanelBody
        className='bPlPanelBody'
        title={__('Section', 'b-blocks')}
        initialOpen={false}
      >


        {/* section background  */}
        <Background
          className="mt10"
          value={section?.bg}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'section', 'bg')
            })
          }
        />



        {/* section padding  */}
        <PanelRow><Label className=''>Padding</Label> <Device /> </PanelRow>
        <BoxControl
          className="mt10"
          values={section?.padding?.[device]}
          resetValues={{
            "top": "2rem",
            "right": "2rem",
            "bottom": "2rem",
            "left": "2rem"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'section', 'padding', device)
            })
          }}

        />


        {/* section margin  */}
        <PanelRow><Label className=''>Margin</Label> <Device /> </PanelRow>
        <BoxControl
          className="mt10"
          values={section?.margin?.[device]}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'section', 'margin', device)
            })
          }}

        />


        {/* section border radius  */}
        <BoxControl
          className="mt10"
          label='Radius'
          values={section?.radius}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'section', 'radius')
            })
          }}

        />

      </PanelBody>
      {/* section header  */}

      <PanelBody
        className='bPlPanelBody'
        title={__('Header', 'b-blocks')}
        initialOpen={false}
      >

        <BButtonGroup
          className="mt10"
          label={__('Text Align', 'b-blocks')}
          options={[
            { label: __('Left', 'b-blocks'), value: 'left' },
            { label: __('Center', 'b-blocks'), value: 'center' },
            { label: __('Right', 'b-blocks'), value: 'right' },
          ]}
          value={textAlign}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'header', 'textAlign'),
            })
          }
          activeBg="#007cba"
          inactiveColor="#555"
          activeColor="#fff"
          borderRadius="4px"
          paddingX="12px"
          paddingY="6px"
          fontSize="13px"
          fontWeight={500}
        />





        <PanelRow><Label className=''>Margin</Label> <Device /> </PanelRow>
        <BoxControl
          className='mt10'
          values={header?.margin?.[device]}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "64px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'header', 'margin', device)
            })
          }}

        />

        <PanelRow><Label className=''>Padding</Label> <Device /> </PanelRow>
        <BoxControl
          className='mt10'
          values={header?.padding?.[device]}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'header', 'padding', device)
            })
          }}

        />

        {/* header title typo  */}

        <Typography
          className="mt10"
          label={__('Title Typo', 'b-blocks')}
          value={title.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'title', "typo")
            })
          }
        />

        {/* header title color  */}

        <ColorControl
          className='mt10'
          label={__('Title Color', 'b-blocks')}
          value={title?.color}

          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'title', 'color')
            }
            )}
          defaults={title?.color}

        />


        {/* header title margin  */}
        <PanelRow><Label className=''>Title Margin</Label> <Device /> </PanelRow>
        <BoxControl
          className='mt10'
          values={title?.margin?.[device]}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "24px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'title', 'margin', device)
            })
          }}

        />


        {/* header subtitle typo  */}
        <Typography
          label={__('Subtitle Typography', 'b-blocks')}
          value={subTitle?.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'subTitle', "typo")
            })
          }
        />

        {/* header subtitle color  */}

        <ColorControl
          label={__('Subtitle Color', 'b-blocks')}
          value={subTitle.color}

          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'subTitle', 'color')
            }
            )}
          defaults={subTitle?.color}

        />


        {/* header subtitle margin  */}
        <PanelRow><Label className=''>Subtitle Margin</Label> <Device /> </PanelRow>
        <BoxControl
          className='mt10'
          values={subTitle?.margin?.[device]}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'subTitle', 'margin', device)
            })
          }}

        />




      </PanelBody>




      {/* card /  theme member    styles*/}
      <PanelBody
        className='bPlPanelBody'
        title={__('Team Member', 'b-blocks')}
        initialOpen={false}
      >

        {/* layout  */}


        {
          theme == 'default' | theme == 'theme2' ? (
            <BButtonGroup
              label={__('Text align', 'b-blocks')}
              options={[
                { label: __('Left', 'b-blocks'), value: 'left' },
                { label: __('Center', 'b-blocks'), value: 'center' },
                { label: __('Right', 'b-blocks'), value: 'right' },
              ]}
              value={cardContent?.textAlign}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', 'textAlign'),
                })
              }
              activeBg="#007cba"
              inactiveColor="#555"
              activeColor="#fff"
              borderRadius="4px"
              paddingX="12px"
              paddingY="6px"
              fontSize="13px"
              fontWeight={500}
            />

          ) : null
        }

        {/* border  */}

        <BorderControl
          className='mt10'
          label={__('Border', 'b-blocks')}
          value={card?.border}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'card', 'border')
            })
          }
        />

        <BoxControl
          className="mt10"
          label='Radius'
          values={card?.radius}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'card', 'radius')
            })
          }}

        />



        <PanelRow><Label>Padding</Label><Device /></PanelRow>


        <BoxControl

          values={card?.padding?.[device]}
          resetValues={{
            "top": "24px",
            "right": "24px",
            "bottom": "24px",
            "left": "24px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'card', 'padding', device)
            })
          }}

        />
        {/* <PanelRow><Label>Margin</Label><Device /></PanelRow>
        <BoxControl

          values={card?.margin?.[device]}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'card', 'margin', [device])
            })
          }}

        /> */}




        {/* name  */}
        <Typography
          className='mt10'
          label={__('Name Typo', 'b-blocks')}
          value={name?.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', "name", "typo")
            })
          }
        />
        <ColorControl
          className='mt10'
          label={__('Name Color', 'b-blocks')}
          value={name?.color}

          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', 'name', 'color')
            }
            )}
          defaults={name?.color}

        />
        <PanelRow><Label>Name Margin</Label><Device /></PanelRow>
        <BoxControl
          values={name?.margin?.[device]}
          resetValues={{
            "top": "8px",
            "right": "0px",
            "bottom": "8px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'cardContent', 'name', 'margin', device)
            })
          }}

        />




        {/* role  */}


        <Typography
          className="mt10"
          label={__('Role Typo', 'b-blocks')}
          value={role?.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', "role", "typo")
            })
          }
        />
        <ColorControl
          className='mt10'
          label={__('Role Color', 'b-blocks')}
          value={role?.color}

          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', 'role', 'color')
            }
            )}
          defaults={role?.color}

        />
        <PanelRow><Label>Role Margin</Label><Device /></PanelRow>
        <BoxControl
          className='mt10'
          values={role?.margin?.[device]}
          resetValues={{
            "top": "8px",
            "right": "0px",
            "bottom": "10px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'cardContent', 'role', 'margin', device)
            })
          }}

        />



        {/* bio  */}




        <Typography
          className="mt10"
          label={__('Bio Typo', 'b-blocks')}
          value={bio?.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', "bio", "typo")
            })
          }
        />
        <ColorControl
          className='mt10'
          label={__('Bio Color', 'b-blocks')}
          value={bio.color}

          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', 'bio', 'color')
            }
            )}
          defaults={bio?.color}

        />
        <PanelRow><Label>Bio Margin</Label><Device /></PanelRow>
        <BoxControl
          values={bio?.margin?.[device]}
          resetValues={{
            "top": "8px",
            "right": "0px",
            "bottom": "24px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'cardContent', 'bio', 'margin', device)
            })
          }}

        />



        {/* social */}
        <Background
          label="Social Background"
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', "button", 'bg')
            })
          }
        />

        {/* width  */}

        <UnitControl
          className="mt10"
          label={__('Social Width', 'b-blocks')}
          value={button?.width}
          onChange={(v) => { setAttributes({ styles: updateData(styles, v, 'cardContent', "button", 'width') }) }}

        />
        {/* height  */}

        <UnitControl
          className="mt10"
          label={__('Social Height', 'b-blocks')}
          value={button?.height}
          onChange={(v) => { setAttributes({ styles: updateData(styles, v, 'cardContent', "button", 'height') }) }}

        />
        {/* padding  */}

        <PanelRow><Label>Social Padding</Label><Device /></PanelRow>
        <BoxControl

          values={cardContent.button?.padding?.[device]}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          }}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', 'button', "padding", device)
            })
          }

        />


        <BorderControl
          className='mt10'
          label={__('Social Border', 'b-blocks')}
          value={button?.border}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', "button", 'border')
            })
          }
        />


        <RangeControl
          className='mt10'
          label='Social Radius'
          value={button?.radius}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', "button", 'radius')
            })
          }
        />
        <ColorControl
          className='mt10'
          label={__('Icon Color', 'b-blocks')}
          value={cardContent?.button?.icon?.fill}

          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent',
                "button", "icon", 'fill')
            }
            )}
          defaults={cardContent?.button?.icon?.fill}

        />

        <RangeControl
          className='mt10'
          label='Icon Size'
          value={cardContent?.button?.icon?.size}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', "button", 'icon', "size")
            })
          }
        />

        {
          theme === 'theme3' || theme === 'theme4' ? (<>
            {/* badge styles  */}

            {/* badge height  */}

            <UnitControl
              className="mt10"
              label={__('Badge Height', 'b-blocks')}
              value={badge?.height}
              onChange={(v) => { setAttributes({ styles: updateData(styles, v, 'cardContent', "badge", 'height') }) }}

            />
            {/* badge width  */}

            <UnitControl
              className="mt10"
              label={__('Badge Width', 'b-blocks')}
              value={badge?.width}
              onChange={(v) => { setAttributes({ styles: updateData(styles, v, 'cardContent', "badge", 'width') }) }}
            />

            {/* badge background  */}

            <Background
              label="Badge Background"
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', "badge", 'bg')
                })
              }
              defaults={cardContent?.badge?.bg}
            />

            {/* badge hover bg  */}

            <Background
              label="Badge Hover Background"
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', "badge", 'hover', 'bg')
                })
              }
              defaults={cardContent?.badge?.hover?.bg}
            />

            {/* badge icon size  */}
            <RangeControl
              className='mt10'
              label='Badge Icon Size'
              value={cardContent?.badge?.icon?.size}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', "badge", 'icon', "size")
                })
              }
            />


            {/* badge icon color */}
            <ColorControl
              className='mt10'
              label={__('Icon Color', 'b-blocks')}
              value={cardContent?.badge?.icon?.fill}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', "badge", 'icon', 'fill')
                })
              }
              defaults={cardContent?.badge?.icon?.fill}
            />
            {/* badge icon hover color */}
            <ColorControl
              className='mt10'
              label={__('Icon Hover Color', 'b-blocks')}
              value={cardContent?.badge?.icon?.hover?.fill}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', "badge", 'icon', 'hover', 'fill')
                })
              }
              defaults={cardContent?.badge?.icon?.hover?.fill}
            />

          </>) : null
        }



      </PanelBody>

      {/* img  */}

      <PanelBody
        className='bPlPanelBody'
        title={__('Image', 'b-blocks')}
        initialOpen={false}

      >

        <BorderControl
          label={__('Wrapper Border', 'b-blocks')}
          value={img?.wrapper?.border}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'img', 'wrapper', 'border')
            })
          }
        />


        <BoxControl
          label={__('Wrapper Radius', 'b-blocks')}
          className='mt10'
          values={img?.wrapper?.radius}
          resetValues={{
            "top": "16px",
            "right": "16px",
            "bottom": "16px",
            "left": "16px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'img', 'wrapper', 'radius')
            })
          }}

        />
        <PanelRow>
          <Label>{__('Wrapper Padding', 'b-blocks')} <Device /> </Label>
        </PanelRow>

        <BoxControl

          values={img?.wrapper?.padding?.[device]}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'img', 'wrapper', 'padding', device)
            })
          }}

        />
        <Label>{__('Wrapper Margin', 'b-blocks')} <Device /> </Label>

        <BoxControl

          values={img?.wrapper?.margin?.[device]}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "24px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'img', 'wrapper', 'margin', device)
            })
          }}

        />









        <Label>{__('Avatar Width', 'b-blocks')} <Device /></Label>

        <UnitControl

          value={img?.avatar?.width}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'img', 'avatar', 'width')
            })
          }}

        />
        <Label>{__('Avatar Height', 'b-blocks')} <Device /></Label>

        <UnitControl

          value={img?.avatar?.height}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'img', 'avatar', 'height')
            })
          }}
          unit='px'
          units={{
            px: {
              label: __('px', 'b-blocks'),
            }
          }}
        />

        <Label>{__('Avatar Radius', 'b-blocks')} </Label>
        <BoxControl

          values={img?.avatar?.radius}
          resetValues={{
            "top": "16px",
            "right": "16px",
            "bottom": "16px",
            "left": "16px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'img', 'avatar', 'radius')
            })
          }}

        />

      </PanelBody>

    </>
  )
}

export default Style