
import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl } from '@wordpress/components';
import { Background, BButtonGroup, BoxControl, ColorControl, ColorsControl, Label, Typography } from "../../../../../../bpl-tools-main/Components";
import { __experimentalUnitControl as UnitControl, __experimentalBorderControl as BorderControl } from "@wordpress/components"
import { updateData } from '../../../../utils/functions';
const Style = ({ attributes, setAttributes }) => {
  const { styles, theme } = attributes;
  const { section, header = {}, title, subTitle, card, img, cardContent } = styles || {}
  const { name, role, bio, button } = cardContent
  const { textAlign } = header
  console.log(subTitle)
  return (


    <>
      {theme === "default" && <>

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

          {/* layout  */}

          <div className="btms-nested-control">
            <span className='btms-nested-label'>Layout</span>
            <BButtonGroup
              label={__('Align', 'b-blocks')}
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
          </div>


          <div className='btms-nested-control'>
            {/* name  */}


            <span className='btms-nested-label'>{__('Name', 'b-blocks')}</span>

            <Typography
              label={__('Typography', 'b-blocks')}
              value={name.typo}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', "name", "typo")
                })
              }
            />
            <ColorControl
              label={__('Color', 'b-blocks')}
              value={name.color}

              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', 'name', 'color')
                }
                )}
              defaults={title.color}

            />

            <BoxControl
              label='margin'
              values={name?.margin}
              resetValues={{
                "top": "8px",
                "right": "0px",
                "bottom": "8px",
                "left": "0px"
              }}
              onChange={(v) => {
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', 'name', 'margin')
                })
              }}

            />




            {/* role  */}


            <span className='btms-nested-label'>{__('Role', 'b-blocks')}</span>

            <Typography
              label={__('Typography', 'b-blocks')}
              value={role.typo}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', "role", "typo")
                })
              }
            />
            <ColorControl
              label={__('Color', 'b-blocks')}
              value={role.color}

              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', 'role', 'color')
                }
                )}
              defaults={title.color}

            />

            <BoxControl
              label='margin'
              values={role?.margin}
              resetValues={{
                "top": "8px",
                "right": "0px",
                "bottom": "10px",
                "left": "0px"
              }}
              onChange={(v) => {
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', 'role', 'margin')
                })
              }}

            />



            {/* bio  */}


            <span className='btms-nested-label'>{__('Bio', 'b-blocks')}</span>

            <Typography
              label={__('Typography', 'b-blocks')}
              value={bio.typo}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', "bio", "typo")
                })
              }
            />
            <ColorControl
              label={__('Color', 'b-blocks')}
              value={bio.color}

              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', 'bio', 'color')
                }
                )}
              defaults={bio.color}

            />

            <BoxControl
              label='margin'
              values={bio?.margin}
              resetValues={{
                "top": "8px",
                "right": "0px",
                "bottom": "24px",
                "left": "0px"
              }}
              onChange={(v) => {
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', 'bio', 'margin')
                })
              }}

            />

          </div>
          {/* social */}
          <div className='btms-nested-control'>

            <span className='btms-nested-label'>
              {__('social', 'b-blocks')}
            </span>

            {/* width  */}
            <Label>{__('width', 'b-blocks')} </Label>
            <UnitControl
              value={button.width}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', 'button', "width")
                })
              }

            />
            {/* height  */}
            <Label>{__('height', 'b-blocks')} </Label>
            <UnitControl
              value={button.height}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', 'button', "height")
                })
              }

            />
            <Background
              value={cardContent.button?.bg}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', "button", 'bg')
                })
              }
            />

            <BorderControl
              className='mt10'
              label={__('Border', 'b-blocks')}
              value={button.border}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', "button", 'border')
                })
              }
            />

            <Label>{__('radius', 'b-blocks')} </Label>
            <RangeControl
              value={button.radius}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', "button", 'radius')
                })
              }
            />
            <ColorControl
              label={__('fill color', 'b-blocks')}
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
              label='icon size'
              value={cardContent.button.icon.size}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'cardContent', "button", 'icon', "size")
                })
              }
            />

          </div>






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
          <RangeControl
            value={img.radius}
            onChange={(v) =>
              setAttributes({
                styles: updateData(styles, v, 'img', 'radius')
              })
            }
          />






        </PanelBody>





      </>}

      {
        theme === "theme2" && <>
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
              values={section?.margin}
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
              value={header.textAlign}
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
                "bottom": "16px",
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

            {/* layout  */}

            <div className="btms-nested-control">
              <span className='btms-nested-label'>Layout</span>
              <BButtonGroup
                label={__('Align', 'b-blocks')}
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
            </div>
            <BorderControl
              className='mt10'
              label={__('Border', 'b-blocks')}
              value={card.border}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'card', 'border')
                })
              }
            />


            <RangeControl
              label='radius'
              value={card.radius}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, 'card', 'radius')
                })
              }
            />


            <div className='btms-nested-control'>
              {/* name  */}


              <span className='btms-nested-label'>{__('Name', 'b-blocks')}</span>

              <Typography
                label={__('Typography', 'b-blocks')}
                value={name.typo}
                onChange={(v) =>
                  setAttributes({
                    styles: updateData(styles, v, 'cardContent', "name", "typo")
                  })
                }
              />
              <ColorControl
                label={__('Color', 'b-blocks')}
                value={name.color}

                onChange={(v) =>
                  setAttributes({
                    styles: updateData(styles, v, 'cardContent', 'name', 'color')
                  }
                  )}
                defaults={title.color}

              />

              <BoxControl
                label='margin'
                values={name?.margin}
                resetValues={{
                  "top": "8px",
                  "right": "0px",
                  "bottom": "8px",
                  "left": "0px"
                }}
                onChange={(v) => {
                  setAttributes({
                    styles: updateData(styles, v, 'cardContent', 'name', 'margin')
                  })
                }}

              />




              {/* role  */}


              <span className='btms-nested-label'>{__('Role', 'b-blocks')}</span>

              <Typography
                label={__('Typography', 'b-blocks')}
                value={role.typo}
                onChange={(v) =>
                  setAttributes({
                    styles: updateData(styles, v, 'cardContent', "role", "typo")
                  })
                }
              />
              <ColorControl
                label={__('Color', 'b-blocks')}
                value={role.color}

                onChange={(v) =>
                  setAttributes({
                    styles: updateData(styles, v, 'cardContent', 'role', 'color')
                  }
                  )}
                defaults={title.color}

              />

              <BoxControl
                label='margin'
                values={role?.margin}
                resetValues={{
                  "top": "8px",
                  "right": "0px",
                  "bottom": "10px",
                  "left": "0px"
                }}
                onChange={(v) => {
                  setAttributes({
                    styles: updateData(styles, v, 'cardContent', 'role', 'margin')
                  })
                }}

              />



              {/* bio  */}


              <span className='btms-nested-label'>{__('Bio', 'b-blocks')}</span>

              <Typography
                label={__('Typography', 'b-blocks')}
                value={bio.typo}
                onChange={(v) =>
                  setAttributes({
                    styles: updateData(styles, v, 'cardContent', "bio", "typo")
                  })
                }
              />
              <ColorControl
                label={__('Color', 'b-blocks')}
                value={bio.color}

                onChange={(v) =>
                  setAttributes({
                    styles: updateData(styles, v, 'cardContent', 'bio', 'color')
                  }
                  )}
                defaults={bio.color}

              />

              <BoxControl
                label='margin'
                values={bio?.margin}
                resetValues={{
                  "top": "8px",
                  "right": "0px",
                  "bottom": "24px",
                  "left": "0px"
                }}
                onChange={(v) => {
                  setAttributes({
                    styles: updateData(styles, v, 'cardContent', 'bio', 'margin')
                  })
                }}

              />

            </div>
            {/* social */}
            <div className='btms-nested-control'>

              <span className='btms-nested-label'>
                {__('social', 'b-blocks')}
              </span>


              <Background
                value={cardContent.button?.bg}
                onChange={(v) =>
                  setAttributes({
                    styles: updateData(styles, v, 'cardContent', "button", 'bg')
                  })
                }
              />

              <BorderControl
                className='mt10'
                label={__('Border', 'b-blocks')}
                value={button.border}
                onChange={(v) =>
                  setAttributes({
                    styles: updateData(styles, v, 'cardContent', "button", 'border')
                  })
                }
              />

              <Label>{__('radius', 'b-blocks')} </Label>
              <RangeControl
                value={button.radius}
                onChange={(v) =>
                  setAttributes({
                    styles: updateData(styles, v, 'cardContent', "button", 'radius')
                  })
                }
              />
              <ColorControl
                label={__('fill color', 'b-blocks')}
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
                label='icon size'
                value={cardContent.button.icon.size}
                onChange={(v) =>
                  setAttributes({
                    styles: updateData(styles, v, 'cardContent', "button", 'icon', "size")
                  })
                }
              />

            </div>






          </PanelBody>
        </>
      }
    </>
  )
}

export default Style