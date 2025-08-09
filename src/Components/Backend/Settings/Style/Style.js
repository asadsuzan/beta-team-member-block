
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { Background, BButtonGroup, BoxControl, ColorsControl, Label } from "../../../../../../bpl-tools-main/Components";
import { __experimentalUnitControl as UnitControl } from "@wordpress/components"
import { updateData } from '../../../../utils/functions';
const Style = ({ attributes, setAttributes }) => {
  const { styles } = attributes;
  const { section, header = {} } = styles || {}
  const { textAlign } = header
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
          value={section.width}
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
    </>
  )
}

export default Style