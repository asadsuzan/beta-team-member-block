
import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, RangeControl } from '@wordpress/components';
import { Background, BButtonGroup, BoxControl, ColorControl, Device, Label, Typography } from "../../../../../../bpl-tools-main/Components";
import { __experimentalUnitControl as UnitControl, __experimentalBorderControl as BorderControl } from "@wordpress/components"
import { updateData } from '../../../../utils/functions';
const Style = ({ attributes, setAttributes, device }) => {
  const { styles, theme, columns } = attributes;
  const { section, header = {}, title, subTitle, card, img, cardContent } = styles || {}
  const { name, role, bio, button } = cardContent
  const { textAlign } = header

  return (


    <>



      {/* grid settings  */}
      <PanelBody
        className='bPlPanelBody'
        title='grid'
        initialOpen={false}
      >

        <PanelRow><Label className=''>columns</Label> <Device /> </PanelRow>



        <RangeControl
          value={columns[device]}
          onChange={v => setAttributes({ columns: updateData(columns, v, device) })}

        />


      </PanelBody>


      {/* common styles  */}


      {/* section  */}
      <PanelBody
        className='bPlPanelBody'
        title={__('section', 'b-blocks')}
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
        <PanelRow><Label className=''>padding</Label> <Device /> </PanelRow>
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
        <PanelRow><Label className=''>margin</Label> <Device /> </PanelRow>
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
          label='radius'
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
        title={__('header', 'b-blocks')}
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





        <PanelRow><Label className=''>margin</Label> <Device /> </PanelRow>
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

        <PanelRow><Label className=''>padding</Label> <Device /> </PanelRow>
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
          label={__('title typo', 'b-blocks')}
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
          label={__('title color', 'b-blocks')}
          value={title.color}

          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'title', 'color')
            }
            )}
          defaults={title.color}

        />


        {/* header title margin  */}
        <PanelRow><Label className=''>title margin</Label> <Device /> </PanelRow>
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
          label={__('subtitle typography', 'b-blocks')}
          value={subTitle.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'subTitle', "typo")
            })
          }
        />

        {/* header subtitle color  */}

        <ColorControl
          label={__('subtitle color', 'b-blocks')}
          value={subTitle.color}

          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'subTitle', 'color')
            }
            )}
          defaults={subTitle.color}

        />


        {/* header subtitle margin  */}
        <PanelRow><Label className=''>subtitle margin</Label> <Device /> </PanelRow>
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
        title={__('team member', 'b-blocks')}
        initialOpen={false}
      >

        {/* layout  */}


        {
          theme !== 'theme3' && (
            <BButtonGroup
              label={__('text align', 'b-blocks')}
              options={[
                { label: __('Left', 'b-blocks'), value: 'left' },
                { label: __('Center', 'b-blocks'), value: 'center' },
                { label: __('Right', 'b-blocks'), value: 'right' },
              ]}
              value={cardContent.textAlign}
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

          )
        }

        {/* border  */}

        <BorderControl
          className='mt10'
          label={__('border', 'b-blocks')}
          value={card?.border}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'card', 'border')
            })
          }
        />

        <BoxControl
          className="mt10"
          label='radius'
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



        <PanelRow><Label>padding</Label><Device /></PanelRow>


        <BoxControl
          className='mt10'
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
        <PanelRow><Label>margin</Label><Device /></PanelRow>
        <BoxControl
          className='mt10'
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

        />




        {/* name  */}




        <Typography
          className='mt10'
          label={__('name typo', 'b-blocks')}
          value={name?.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', "name", "typo")
            })
          }
        />
        <ColorControl
          className='mt10'
          label={__('name color', 'b-blocks')}
          value={name?.color}

          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', 'name', 'color')
            }
            )}
          defaults={title.color}

        />
        <PanelRow><Label>name margin</Label><Device /></PanelRow>
        <BoxControl
          className='mt10'
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
          label={__('role typo', 'b-blocks')}
          value={role?.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', "role", "typo")
            })
          }
        />
        <ColorControl
          className='mt10'
          label={__('role color', 'b-blocks')}
          value={role?.color}

          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', 'role', 'color')
            }
            )}
          defaults={title.color}

        />
        <PanelRow><Label>role margin</Label><Device /></PanelRow>
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
          label={__('bio typo', 'b-blocks')}
          value={bio?.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', "bio", "typo")
            })
          }
        />
        <ColorControl
          className='mt10'
          label={__('bio color', 'b-blocks')}
          value={bio.color}

          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', 'bio', 'color')
            }
            )}
          defaults={bio.color}

        />
        <PanelRow><Label>bio margin</Label><Device /></PanelRow>
        <BoxControl
          className='mt10'
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
          label="social background"
          className="mt10"
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', "button", 'bg')
            })
          }
        />

        {/* width  */}

        <UnitControl
          className="mt10"
          label={__('social width', 'b-blocks')}
          value={button?.width}
          onChange={(v) => { setAttributes({ styles: updateData(styles, v, 'cardContent', "button", 'width') }) }}

        />
        {/* height  */}

        <UnitControl
          className="mt10"
          label={__('social height', 'b-blocks')}
          value={button?.height}
          onChange={(v) => { setAttributes({ styles: updateData(styles, v, 'cardContent', "button", 'height') }) }}

        />
        {/* padding  */}

        <PanelRow><Label>social padding</Label><Device /></PanelRow>
        <BoxControl
          className='mt10'
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
          label={__('social border', 'b-blocks')}
          value={button.border}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', "button", 'border')
            })
          }
        />


        <RangeControl
          className='mt10'
          label='social radius'
          value={button.radius}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', "button", 'radius')
            })
          }
        />
        <ColorControl
          className='mt10'
          label={__('icon color', 'b-blocks')}
          value={cardContent.button.icon.fill}

          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent',
                "button", "icon", 'fill')
            }
            )}
          defaults={cardContent.button.icon.fill}

        />

        <RangeControl
          className='mt10'
          label='icon size'
          value={cardContent.button.icon.size}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'cardContent', "button", 'icon', "size")
            })
          }
        />

      </PanelBody>

      {/* img  */}

      <PanelBody
        className='bPlPanelBody'
        title={__('Image', 'b-blocks')}
        initialOpen={false}

      >
        <PanelRow>
          <Label>{__('wrapper padding', 'b-blocks')} <Device /> </Label>
        </PanelRow>

        <BoxControl
          className='mt10'
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
        <Label>{__('wrapper margin', 'b-blocks')} <Device /> </Label>

        <BoxControl
          className='mt10'
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


        <BorderControl
          className='mt10'
          label={__('wrapper border', 'b-blocks')}
          value={img?.wrapper?.border}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'img', 'wrapper', 'border')
            })
          }
        />
        <Label>{__('wrapper radius', 'b-blocks')} </Label>

        <BoxControl
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





        <Label>{__('avatar width', 'b-blocks')} <Device /></Label>

        <UnitControl
          className='mt10'
          value={img?.avatar?.width}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'img', 'avatar', 'width')
            })
          }}

        />
        <Label>{__('avatar height', 'b-blocks')} <Device /></Label>

        <UnitControl
          className='mt10'
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

        <Label>{__('avatar radius', 'b-blocks')} </Label>
        <RangeControl
          className='mt10'
          value={img.avatar.radius}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'img', 'avatar', 'radius')
            })
          }
        />

      </PanelBody>





    </>
  )
}

export default Style