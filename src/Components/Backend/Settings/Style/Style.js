
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { Background, BButtonGroup, BoxControl, ColorControl, ColorsControl, Label, Typography } from "../../../../../../bpl-tools-main/Components";
import { __experimentalUnitControl as UnitControl } from "@wordpress/components"
import { updateData } from '../../../../utils/functions';
const Style = ({ attributes, setAttributes }) => {
  const { styles } = attributes;
  const { section, header = {}, title, subTitle, card, img } = styles || {}
  const { textAlign } = header
  console.log(subTitle)
  return (
    <>

      {/* section  */}
      <PanelBody
        className='bPlPanelBody'
        title={__('section', 'b-blocks')}
        initialOpen={true}
      >
        {/* width  */}
        <Label>{__('width', 'b-blocks')} </Label>
        <UnitControl
          value={section.width}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'section', 'width')
            })
          }

        />
        {/* height  */}
        <Label>{__('height', 'b-blocks')} </Label>
        <UnitControl
          value={section.height}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'section', 'height')
            })
          }

        />

        <Background
          value={section?.bg}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'section', 'bg')
            })
          }
        />

        <Label>{__('padding', 'b-blocks')} </Label>

        <BoxControl
          values={section?.padding}
          resetValues={{
            "top": "80px",
            "right": "0px",
            "bottom": "80px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'section', 'padding')
            })
          }}

        />

        <Label>{__('margin', 'b-blocks')} </Label>

        <BoxControl
          values={section?.padding}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'section', 'margin')
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

        <Label>{__('margin', 'b-blocks')} </Label>

        <BoxControl
          values={header?.margin}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "64px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'header', 'margin')
            })
          }}

        />
        <Label>{__('padding', 'b-blocks')} </Label>

        <BoxControl
          values={header?.padding}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'header', 'padding')
            })
          }}

        />

      </PanelBody>

      {/* title  */}
      <PanelBody
        className='bPlPanelBody'
        title={__('title', 'b-blocks')}
        initialOpen={false}
      >

        <Typography
          label={__('Typography', 'b-blocks')}
          value={title.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'title', "typo")
            })
          }
        />

        <ColorControl
          label={__('Color', 'b-blocks')}
          value={title.color}

          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'title', 'color')
            }
            )}
          defaults={title.color}

        />
        <Label>{__('margin', 'b-blocks')} </Label>

        <BoxControl
          values={title?.margin}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "24px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'title', 'margin')
            })
          }}

        />



      </PanelBody>


      {/* sub title  */}
      <PanelBody
        className='bPlPanelBody'
        title={__('sub-title', 'b-blocks')}
        initialOpen={false}
      >

        <Typography
          label={__('Typography', 'b-blocks')}
          value={subTitle.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'subTitle', "typo")
            })
          }
        />

        <ColorControl
          label={__('Color', 'b-blocks')}
          value={subTitle.color}

          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'subTitle', 'color')
            }
            )}
          defaults={subTitle.color}

        />
        <Label>{__('margin', 'b-blocks')} </Label>

        <BoxControl
          values={subTitle?.margin}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'subTitle', 'margin')
            })
          }}

        />



      </PanelBody>

      {/* card  */}
      <PanelBody
        className='bPlPanelBody'
        title={__('card', 'b-blocks')}
        initialOpen={false}
      >

        {/* width  */}
        <Label>{__('width', 'b-blocks')} </Label>
        <UnitControl
          value={card.width}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'card', 'width')
            })
          }

        />
        {/* height  */}
        <Label>{__('height', 'b-blocks')} </Label>
        <UnitControl
          value={card.height}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'card', 'height')
            })
          }

        />
        <Label>{__('padding', 'b-blocks')} </Label>

        <BoxControl
          values={card?.padding}
          resetValues={{
            "top": "24px",
            "right": "24px",
            "bottom": "24px",
            "left": "24px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'card', 'padding')
            })
          }}

        />
        <Label>{__('margin', 'b-blocks')} </Label>
        <BoxControl
          values={card?.margin}
          resetValues={{
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'card', 'margin')
            })
          }}

        />



      </PanelBody>

      {/* img  */}

      <PanelBody
        className='bPlPanelBody'
        title={__('Image', 'b-blocks')}
        initialOpen={false}

      >
        {/* width  */}
        <Label>{__('width', 'b-blocks')} </Label>
        <UnitControl
          value={img.width}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'img', 'width')
            })
          }

        />
        {/* height  */}
        <Label>{__('height', 'b-blocks')} </Label>
        <UnitControl
          value={img.height}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'img', 'height')
            })
          }

        />


        <Label>{__('radius', 'b-blocks')} </Label>
      </PanelBody>
    </>
  )
}

export default Style